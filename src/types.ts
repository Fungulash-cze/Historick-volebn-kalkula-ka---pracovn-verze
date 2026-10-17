export type ElectionYear = 1920 | 1946 | 1990;

export type UserAnswerValue = 1 | 0 | -1;

export interface Question {
  id: number;
  title?: string;
  category: string;
  statement: string;
  historicalNote: string;
  context?: string;
  partyStances: Record<string, UserAnswerValue>;
}

export interface Party {
  id: string;
  shortName: string;
  fullName: string;
  ideology: string;
  leaders: string[];
  color: string;
  historicalPercentage: number;
  historicalSeats: number;
  description: string;
  programHighlight: string;
  wikipediaUrl?: string;
}

export interface ElectionSystemInfo {
  body: string; // Do jakého tělesa se volilo
  system: string; // Volební systém a pravidla (přepočet, klauzule, volební obvody)
  franchise: string; // Kdo mohl volit (aktivní volební právo)
  eligibility: string; // Kdo mohl být zvolen (pasivní volební právo)
  trivia: string[]; // Zajímavosti k volbám
}

export interface ElectionMeta {
  year: ElectionYear;
  title: string;
  subtitle: string;
  date: string;
  turnout: string;
  historicalContext: string;
  stakes: string;
  atmosphereQuote: string;
  outcomeSummary: string;
  parties: Party[];
  questions: Question[];
  expandedQuestions?: Question[];
  electionSystem: ElectionSystemInfo;
}

export interface PartyScore {
  party: Party;
  matchPercentage: number;
  agreeCount: number;
  disagreeCount: number;
  neutralCount: number;
}

export interface DemographicSurveyData {
  ageGroup: string;
  votedParty2021: string;
}

export interface CalculatorSubmission {
  id?: string;
  year: ElectionYear;
  mode: 'standard' | 'expanded';
  topPartyId: string;
  topPartyMatch: number;
  partyMatches: Record<string, number>;
  ageGroup: string;
  votedParty2021: string;
  answersCount: number;
  createdAt?: string;
}

export interface DailyMetricDoc {
  date: string;
  pageViews: number;
  quizStarts?: number;
  quizCompletions?: number;
  updatedAt?: string;
}

export interface AnalyticsSummary {
  totalPageViews: number;
  totalSubmissions: number;
  submissionsByYear: Record<ElectionYear, number>;
  submissionsByMode: { standard: number; expanded: number };
  ageDistribution: Record<string, number>;
  voted2021Distribution: Record<string, number>;
  topMatchesByYear: Record<ElectionYear, Record<string, number>>;
  correlations: {
    // 2021 voted party -> top historic party count
    [voted2021: string]: Record<string, number>;
  };
  recentSubmissions: CalculatorSubmission[];
}

