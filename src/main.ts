import { loadCsv } from "./csv";
import { rankTeams } from "./ranker";
import { printLeagueTable } from "./printer";

if (require.main === module) {
  const csv = loadCsv(process.argv[2]);

  const table = rankTeams(csv);

  printLeagueTable(table);
}
