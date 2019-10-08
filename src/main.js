"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var csv_1 = require("./csv");
var ranker_1 = require("./ranker");
var printer_1 = require("./printer");
if (require.main === module) {
    var csv = csv_1.loadCsv(process.argv[2]);
    var table = ranker_1.rankTeams(csv);
    printer_1.printLeagueTable(table);
}
//# sourceMappingURL=main.js.map