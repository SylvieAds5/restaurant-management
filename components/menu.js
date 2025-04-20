// Add function to manage menus, products
const { Menu } = require("../models");
const { ask } = require("./common");
const { createProduct, listProducts } = require("./product");

async function manageMenus() {
  console.log("\n--- Manage Menus ---");
  console.log("1. Create a product");
  console.log("2. List products");
  console.log("3. Create a menu");
  console.log("4. List of menus");
  console.log("5. Detail of a menu");
  console.log("6. Back to main menu");

  const choice = await ask("Your choice: ");

  switch (choice) {
    case "1": {
      await createProduct();
      break;
    }
    case "2":
      await listProducts();
      break;
    case "3":
      await createMenu();
      break;
    case "4":
      await listMenus();
      break;
    case "5":
      await viewMenu();
      break;
    case "6":
      return;
    default:
      console.log("❌ Invalid option.");
  }

  await manageMenus(); // Repeat submenu
}

async function createMenu() {
  console.log("\n Create menu");
  const addMenu = await Menu.create({
    name: "samson",
    description: "",
    day: 1,
    price: 1000,
  });
  console.log("\n✅ Menu added:", addMenu.toJSON());
}

async function listMenus() {
  console.log("\n List menus");
  const menuList = await Menu.findAll({});
  // @ts-ignore
  menuList.forEach((cu) => console.log(`${cu.name}`));
}

async function viewMenu() {
  console.log("\n View menu");
  console.log("\n List menus");
  const menuList = await Menu.findAll({});
  menuList.forEach((cu) =>
    // @ts-ignore
    console.log(`${cu.name} | ${cu.description} | ${cu.day} | ${cu.price}`)
  );
}

module.exports = {
  manageMenus,
};
