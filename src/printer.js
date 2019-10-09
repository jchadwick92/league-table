"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printLeagueTable(leagueTable) {
    // TODO: use console.table to print out a league table - see https://nodejs.org/api/console.html#console_console_table_tabulardata_properties
    // NB: There is no exact format or headings you need to use for this print-out
    console.table(leagueTable, ['teamName', 'played', 'wins', 'draws', 'losses', 'goalsFor', 'goalsAgainst', 'points']);
}
exports.printLeagueTable = printLeagueTable;
//# sourceMappingURL=printer.js.map