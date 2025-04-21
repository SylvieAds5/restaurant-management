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
  
    const name = await ask("Enter the name of the table: ");
    const description = await ask(" Enter a description of the table: ");
  
    try {
      const newTable = await Table.create({
        name: name,
        description: description,

      });
  
      console.log(` Table "${newTable.name}" has been created.`);
    } catch (error) {
      console.log(` Error creating the table:`, error.message);
    }
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
