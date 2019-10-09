import {LeagueTable, LeagueTableEntry} from "./types";

export function rankTeams(csvLines: string[][]): LeagueTable {
    let leagueTable: LeagueTable = [];

    for (const line of csvLines) {
        const [homeTeam, awayTeam, homeTeamGoalsString, awayTeamGoalsString] = line;

        const homeTeamGoals = parseInt(homeTeamGoalsString, 10);
        const awayTeamGoals = parseInt(awayTeamGoalsString, 10);

        const homeTeamLeagueEntry = createLeagueTableEntry(homeTeam, homeTeamGoals, awayTeamGoals);
        const awayTeamLeagueEntry = createLeagueTableEntry(awayTeam, awayTeamGoals, homeTeamGoals);

        leagueTable = addEntryToLeagueTable(leagueTable, homeTeamLeagueEntry);
        leagueTable = addEntryToLeagueTable(leagueTable, awayTeamLeagueEntry);
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
            if (a.points < b.points) {
                return -1
            }
            if (a.points > b.points) {
                return 1
            }
            const aGoalDiff = a.goalsFor - a.goalsAgainst;
            const bGoalDiff = b.goalsFor - b.goalsAgainst;

            if (aGoalDiff < bGoalDiff) {
                return -1
            }
            if (aGoalDiff > bGoalDiff) {
                return 1
            }
            return 0
        })
        .reverse();
}

export function getPointsFromResult(teamGoals: number, opponentGoals: number): number {
    if (teamGoals > opponentGoals) {
        return 3
    }
    if (teamGoals === opponentGoals) {
        return 1
    }
    return 0
}

export function createLeagueTableEntry(team: string, goalsFor: number, goalsAgainst: number): LeagueTableEntry {
    const points = getPointsFromResult(goalsFor, goalsAgainst);
    return {
        teamName: team,
        played: 1,
        wins: points === 3 ? 1 : 0,
        draws: points === 1 ? 1 : 0,
        losses: points === 0 ? 1 : 0,
        points: points,
        goalsFor: goalsFor,
        goalsAgainst: goalsAgainst
    }
}

export function addEntryToLeagueTable(leagueTable: LeagueTable, newEntry: LeagueTableEntry): LeagueTable {
    const teamExistsInLeague = leagueTable.filter(tableEntry => tableEntry.teamName === newEntry.teamName).length !== 0;

    if (teamExistsInLeague) {
        return leagueTable.map((tableEntry: LeagueTableEntry) => tableEntry.teamName === newEntry.teamName
            ? combineLeagueEntries(tableEntry, newEntry)
            : tableEntry
        )
    }
    return [...leagueTable, newEntry]
}

export function combineLeagueEntries(tableEntry: LeagueTableEntry, newEntry: LeagueTableEntry): LeagueTableEntry {
    return {
        teamName: tableEntry.teamName,
        played: tableEntry.played + newEntry.played,
        wins: tableEntry.wins + newEntry.wins,
        draws: tableEntry.draws + newEntry.draws,
        losses: tableEntry.losses + newEntry.losses,
        points: tableEntry.points + newEntry.points,
        goalsFor: tableEntry.goalsFor + newEntry.goalsFor,
        goalsAgainst: tableEntry.goalsAgainst + newEntry.goalsAgainst
    }
}
