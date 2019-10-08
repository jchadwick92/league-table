"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
function loadCsv(filename) {
    var data = fs_1.readFileSync(filename, { encoding: "utf8" });
    return data.split("\n").map(function (line) { return line.split(","); });
}
exports.loadCsv = loadCsv;
//# sourceMappingURL=csv.js.map