import { LeagueTableEntry } from "./types";

export function printLeagueTable(leagueTable: LeagueTableEntry[]) {
    console.table(leagueTable, ['teamName', 'played', 'wins', 'draws', 'losses', 'goalsFor', 'goalsAgainst', 'points'])
}
