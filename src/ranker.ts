import { LeagueTable } from "./types";

export function rankTeams(csvLines: string[][]): LeagueTable {
  const leagueTable: LeagueTable = [];

  for (const line of csvLines) {
    const [homeTeam, awayTeam, homeTeamGoalsString, awayTeamGoalsString] = line;

    const homeTeamGoals = parseInt(homeTeamGoalsString, 10);
    const awayTeamGoals = parseInt(awayTeamGoalsString, 10);

    // TODO: Instead of printing these out, build up a league table
    console.log(homeTeam, homeTeamGoals, awayTeam, awayTeamGoals);
  }

  return sortLeagueTable(leagueTable);
}

/**
 * Sorts a league table so that the most successful teams are first in the array.
 * 
 * A team is more successful if it has more points.
 * 
 * If teams have the same number of points, the more successful team is the one with the largest goal difference (between the number of goals the team has scored vs. the number it has conceded).
 * 
 * If teams have the same goal difference, return 0 (we don't worry about those tie-breaks for the purposes of this exercise)
 */
export function sortLeagueTable(leagueTable: LeagueTable) {
  return leagueTable
    .sort((a, b) => {
      // TODO: If team a should be below team b, return -1, etc.

      return 0;
    })
    .reverse();
}
