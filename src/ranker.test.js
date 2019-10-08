"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ranker_1 = require("./ranker");
var expectedTable = [
    {
        teamName: "x",
        played: 1,
        wins: 1,
        draws: 0,
        losses: 0,
        points: 3,
        goalsFor: 4,
        goalsAgainst: 1
    },
    {
        teamName: "z",
        played: 1,
        wins: 0,
        draws: 1,
        losses: 0,
        points: 1,
        goalsFor: 0,
        goalsAgainst: 0
    },
    {
        teamName: "y",
        played: 2,
        wins: 0,
        draws: 1,
        losses: 1,
        points: 1,
        goalsFor: 1,
        goalsAgainst: 4
    }
];
describe(ranker_1.rankTeams.name, function () {
    var testData = [["x", "y", "4", "1"], ["y", "z", "0", "0"]];
    it("calculates ranks correctly", function () {
        var table = ranker_1.rankTeams(testData);
        expect(table).toMatchObject(expectedTable);
    });
});
describe(ranker_1.sortLeagueTable.name, function () {
    it("sorts a league table array correctly", function () {
        var clone = JSON.parse(JSON.stringify(expectedTable));
        expect(ranker_1.sortLeagueTable(clone)).toMatchObject(expectedTable);
    });
});
//# sourceMappingURL=ranker.test.js.map