// Add function to manage customers
const { Customer } = require("../models");
const { ask } = require("./common");

async function manageCustomers() {
  console.log("\n--- Manage Customers ---");
  console.log("1. Create a customer");
  console.log("2. List customers");
  console.log("3. Back to main menu");

  const choice = await ask("Your choice: ");

  switch (choice) {
    case "1": {
      await createCustomer();
      break;
    }
    case "2":
      await listCustomers();
      break;
    case "3":
      return;
    default:
      console.log("❌ Invalid option.");
  }

  await manageCustomers(); // Repeat submenu
}

async function createCustomer() {
  console.log("\n Create customer");
  const addCustomer = await Customer.create({
    firstName: "john",
    lastName: "Doe",
    email: "john@example.com",
    phoneNumber: "90034563",
  });
  console.log("\n✅ customer added:", addCustomer.toJSON());
}

async function listCustomers() {
  console.log("\n📋 Customers list:");
  const Customers = await Customer.findAll({});
  Customers.forEach((cu) =>
    console.log(
      // @ts-ignore
      `${cu.firstName} | ${cu.lastName} | ${cu.email} | ${cu.phoneNumber}`
    )
  );
}

module.exports = {
  manageCustomers,
  createCustomer,
  listCustomers,
};
