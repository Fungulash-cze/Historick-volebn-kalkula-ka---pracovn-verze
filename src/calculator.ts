import { ElectionMeta, ElectionYear, PartyScore, UserAnswerValue, Question } from './types.ts';

/**
 * Mapování stěžejních ("core") témat k politickým stranám pro jednotlivé volební roky.
 * Klíčem je volební rok -> ID otázky -> pole ID stran, pro které je téma identitní.
 */
export const CORE_TOPICS: Record<ElectionYear, Record<number, string[]>> = {
  1920: {
    1: ['rszml'], // Pozemková reforma
    2: ['cssd'], // Socializace průmyslu
    3: ['cssd'], // 8h pracovní doba
    4: ['csl', 'csns'], // Odluka církve (ČSL silně proti, ČSNS silně pro)
    5: ['csl'], // Náboženství ve školách
    6: ['sls'], // Autonomie Slovenska
    8: ['dsap', 'bdl'], // Menšiny
    9: ['csnd'] // Měnová politika
  },
  1946: {
    1: ['ksc', 'kss'], // Spojenectví SSSR
    4: ['csns', 'ksc'], // Hranice znárodnění (ČSNS ochrana soukromníků, KSČ znárodnění)
    8: ['ksc', 'kss'], // Plánované hospodářství
    9: ['csl'], // Církev a školství
    10: ['ds'], // Postavení Slovenska
    13: ['cssd'] // Odbory
  },
  1990: {
    1: ['of', 'vpn'], // Rychlost transformace
    3: ['kscs'], // Ochrana zaměstnanosti
    4: ['of'], // Lustrace
    6: ['kdu'], // Restituce
    8: ['sns'], // Suverenita Slovenska
    9: ['hsd_sms'], // Moravská samospráva
    12: ['of', 'vpn'], // Odchod sovětských vojsk
    13: ['sz'] // Ekologie
  }
};

export function isCoreTopicForParty(
  year: ElectionYear,
  questionId: number,
  partyId: string
): boolean {
  const yearMap = CORE_TOPICS[year];
  if (!yearMap) return false;
  const coreParties = yearMap[questionId];
  return Array.isArray(coreParties) ? coreParties.includes(partyId) : false;
}

export function calculatePartyScores(
  election: ElectionMeta,
  userAnswers: Record<number, UserAnswerValue>,
  questionsToUse?: Question[],
  importantQuestions?: Record<number, boolean> | Set<number>
): PartyScore[] {
  const questions = questionsToUse || election.questions;
  const totalQuestions = questions.length;

  if (totalQuestions === 0) return [];

  const isQuestionImportant = (questionId: number): boolean => {
    if (!importantQuestions) return false;
    if (importantQuestions instanceof Set) {
      return importantQuestions.has(questionId);
    }
    return Boolean(importantQuestions[questionId]);
  };

  const scoredResults = election.parties.map((party) => {
    let earnedPoints = 0;
    let maxPossiblePoints = 0;
    let agreeCount = 0;
    let disagreeCount = 0;
    let neutralCount = 0;

    questions.forEach((q) => {
      const userVal = userAnswers[q.id] ?? 0;
      const partyVal = q.partyStances[party.id] ?? 0;
      const isImportant = isQuestionImportant(q.id);
      const weight = isImportant ? 2 : 1;

      if (userVal === 0) {
        // Neutrální postoj uživatele / přeskočeno -> 0 bodů, nezvyšuje maxPossiblePoints
        neutralCount++;
        return;
      }

      // Dynamický maximální možný zisk bodů podle toho, zda uživatel otázku označil jako zásadní
      maxPossiblePoints += weight;

      if (partyVal === 0) {
        // Strana nemá vyhraněný postoj
        neutralCount++;
      } else if (userVal === partyVal) {
        // Shoda: +1 bod standardně, +2 body u zásadní otázky
        earnedPoints += weight;
        agreeCount++;
      } else {
        // Neshoda (uživatel má vyhraněný názor 1/-1 a strana opačný -1/1)
        disagreeCount++;
        if (isImportant && isCoreTopicForParty(election.year, q.id, party.id)) {
          // Zásadní otázka a zároveň core téma dané strany -> výraznější penalizace (-2 body)
          earnedPoints -= 2;
        } else {
          // Standardní neshoda -> -1 bod
          earnedPoints -= 1;
        }
      }
    });

    const rawRatio =
      maxPossiblePoints > 0
        ? (earnedPoints + maxPossiblePoints) / (2 * maxPossiblePoints)
        : 0;
    const matchPercentage = Math.max(0, Math.min(100, Math.round(rawRatio * 100)));

    return {
      rawRatio,
      score: {
        party,
        matchPercentage,
        agreeCount,
        disagreeCount,
        neutralCount
      } satisfies PartyScore
    };
  });

  // Seřadit od nejvyšší shody k nejnižší (při shodě zaokrouhlených procent rozhoduje přesný poměr bodů)
  return scoredResults
    .sort((a, b) => b.score.matchPercentage - a.score.matchPercentage || b.rawRatio - a.rawRatio)
    .map((item) => item.score);
}
