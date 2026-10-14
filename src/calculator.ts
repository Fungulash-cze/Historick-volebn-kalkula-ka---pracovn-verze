import { ElectionMeta, PartyScore, UserAnswerValue, Question } from './types.ts';

export function calculatePartyScores(
  election: ElectionMeta,
  userAnswers: Record<number, UserAnswerValue>,
  questionsToUse?: Question[]
): PartyScore[] {
  const questions = questionsToUse || election.questions;
  const totalQuestions = questions.length;

  if (totalQuestions === 0) return [];

  const scores: PartyScore[] = election.parties.map((party) => {
    let totalDistance = 0;
    const maxDistance = totalQuestions * 2;
    let agreeCount = 0;
    let disagreeCount = 0;
    let neutralCount = 0;

    questions.forEach((q) => {
      const userVal = userAnswers[q.id] ?? 0;
      const partyVal = q.partyStances[party.id] ?? 0;

      // Vzdálenost na škále: -1, 0, 1
      const distance = Math.abs(userVal - partyVal); // 0, 1 nebo 2
      totalDistance += distance;

      if (userVal !== 0 && partyVal !== 0) {
        if (userVal === partyVal) {
          agreeCount++;
        } else {
          disagreeCount++;
        }
      } else {
        neutralCount++;
      }
    });

    const matchPercentage = Math.round((1 - totalDistance / maxDistance) * 100);

    return {
      party,
      matchPercentage: Math.max(0, Math.min(100, matchPercentage)),
      agreeCount,
      disagreeCount,
      neutralCount
    };
  });

  // Seřadit od nejvyšší shody k nejnižší
  return scores.sort((a, b) => b.matchPercentage - a.matchPercentage);
}
