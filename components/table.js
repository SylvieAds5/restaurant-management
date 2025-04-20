// Add function to manage tables
const { Table } = require("../models");
const { ask } = require("./common");

async function manageTables() {
  console.log("\n--- Manage Tables ---");
  console.log("1. Create a Table");
  console.log("2. List Tables");
  console.log("3. Back to main menu");

  const choice = await ask("Your choice: ");

  switch (choice) {
    case "1": {
      await createTable();
      break;
    }
    case "2":
      await listTables();
      break;
    case "3":
      return;
    default:
      console.log("❌ Invalid option.");
  }

  await manageTables(); // Repeat submenu
}
// sylvie
async function createTable() {
  console.log("\n Create table");
}
// romuald
async function listTables() {
  console.log("\n List tables");
  const tableList = await Table.findAll({});
  // @ts-ignore
  tableList.forEach((cu) => console.log(`${cu?.name} | ${cu?.description}`));
}

module.exports = {
  manageTables,
};
