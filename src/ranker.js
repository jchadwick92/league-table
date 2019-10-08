"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function rankTeams(csvLines) {
    var leagueTable = [];
    for (var _i = 0, csvLines_1 = csvLines; _i < csvLines_1.length; _i++) {
        var line = csvLines_1[_i];
        var homeTeam = line[0], awayTeam = line[1], homeTeamGoalsString = line[2], awayTeamGoalsString = line[3];
        var homeTeamGoals = parseInt(homeTeamGoalsString, 10);
        var awayTeamGoals = parseInt(awayTeamGoalsString, 10);
        // TODO: Instead of printing these out, build up a league table
        console.log(homeTeam, homeTeamGoals, awayTeam, awayTeamGoals);
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
        // TODO: If team a should be below team b, return -1, etc.
        return 0;
    })
        .reverse();
}
exports.sortLeagueTable = sortLeagueTable;
//# sourceMappingURL=ranker.js.map