export interface LeagueTableEntry {
  teamName: string;
  played: number;
  wins: number;
  draws: number;
  losses: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
}

export type LeagueTable = LeagueTableEntry[];
