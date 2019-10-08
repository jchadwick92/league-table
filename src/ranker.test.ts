import { rankTeams, sortLeagueTable } from "./ranker";

const expectedTable = [
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

describe(rankTeams.name, function() {
  const testData = [["x", "y", "4", "1"], ["y", "z", "0", "0"]];

  it("calculates ranks correctly", function() {
    const table = rankTeams(testData);

    expect(table).toMatchObject(expectedTable);
  });
});

describe(sortLeagueTable.name, function() {
  it("sorts a league table array correctly", function() {
    const clone = JSON.parse(JSON.stringify(expectedTable));

    expect(sortLeagueTable(clone)).toMatchObject(expectedTable);
  });
});
