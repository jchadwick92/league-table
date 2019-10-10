"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function rankTeams(csvLines) {
    var leagueTable = [];
    for (var _i = 0, csvLines_1 = csvLines; _i < csvLines_1.length; _i++) {
        var line = csvLines_1[_i];
        var homeTeam = line[0], awayTeam = line[1], homeTeamGoalsString = line[2], awayTeamGoalsString = line[3];
        var homeTeamGoals = parseInt(homeTeamGoalsString, 10);
        var awayTeamGoals = parseInt(awayTeamGoalsString, 10);
        var homeTeamLeagueEntry = createLeagueTableEntry(homeTeam, homeTeamGoals, awayTeamGoals);
        var awayTeamLeagueEntry = createLeagueTableEntry(awayTeam, awayTeamGoals, homeTeamGoals);
        leagueTable = addEntryToLeagueTable(leagueTable, homeTeamLeagueEntry);
        leagueTable = addEntryToLeagueTable(leagueTable, awayTeamLeagueEntry);
    }
    return sortLeagueTable(leagueTable);
}
exports.rankTeams = rankTeams;
/**
 * Sorts a league table so that the most successful teams are first in the array.
 *
 * A team is more successful if it has more points.
 *
 * If teams have the same number of points, the more successful team is the one with the largest goal difference (between the number of goals the team has scored vs. the number it has conceded).
 *
 * If teams have the same goal difference, return 0 (we don't worry about those tie-breaks for the purposes of this exercise)
 */
function sortLeagueTable(leagueTable) {
    return leagueTable
        .sort(function (a, b) {
        if (a.points < b.points) {
            return -1;
        }
        if (a.points > b.points) {
            return 1;
        }
        var aGoalDiff = a.goalsFor - a.goalsAgainst;
        var bGoalDiff = b.goalsFor - b.goalsAgainst;
        if (aGoalDiff < bGoalDiff) {
            return -1;
        }
        if (aGoalDiff > bGoalDiff) {
            return 1;
        }
        return 0;
    })
        .reverse();
}
exports.sortLeagueTable = sortLeagueTable;
function getPointsFromResult(teamGoals, opponentGoals) {
    if (teamGoals > opponentGoals) {
        return 3;
    }
    if (teamGoals === opponentGoals) {
        return 1;
    }
    return 0;
}
exports.getPointsFromResult = getPointsFromResult;
function createLeagueTableEntry(team, goalsFor, goalsAgainst) {
    var points = getPointsFromResult(goalsFor, goalsAgainst);
    return {
        teamName: team,
        played: 1,
        wins: points === 3 ? 1 : 0,
        draws: points === 1 ? 1 : 0,
        losses: points === 0 ? 1 : 0,
        points: points,
        goalsFor: goalsFor,
        goalsAgainst: goalsAgainst
    };
}
exports.createLeagueTableEntry = createLeagueTableEntry;
function addEntryToLeagueTable(leagueTable, newEntry) {
    var teamExistsInLeague = leagueTable.some(function (tableEntry) { return tableEntry.teamName === newEntry.teamName; });
    if (teamExistsInLeague) {
        return leagueTable.map(function (tableEntry) { return tableEntry.teamName === newEntry.teamName
            ? combineLeagueEntries(tableEntry, newEntry)
            : tableEntry; });
    }
    return __spreadArrays(leagueTable, [newEntry]);
}
exports.addEntryToLeagueTable = addEntryToLeagueTable;
function combineLeagueEntries(tableEntry, newEntry) {
    return {
        teamName: tableEntry.teamName,
        played: tableEntry.played + newEntry.played,
        wins: tableEntry.wins + newEntry.wins,
        draws: tableEntry.draws + newEntry.draws,
        losses: tableEntry.losses + newEntry.losses,
        points: tableEntry.points + newEntry.points,
        goalsFor: tableEntry.goalsFor + newEntry.goalsFor,
        goalsAgainst: tableEntry.goalsAgainst + newEntry.goalsAgainst
    };
}
exports.combineLeagueEntries = combineLeagueEntries;
//# sourceMappingURL=ranker.js.map