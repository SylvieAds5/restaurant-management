// Add function to manage customers
const { Reservation, Product } = require("../models");
const { ask } = require("./common");

async function createProduct() {
  console.log("\n Create product");
  const addProduct = await Product.create({
    name: "ayimolou",
    description: "",
  });
  console.log("\n✅ product added:", addProduct.toJSON());
}

async function listProducts() {
  console.log("\n List products");
  const productList = await Product.findAll({});
  // @ts-ignore
  productList.forEach((cu) => console.log(`${cu.name} | ${cu.description}`));
}

module.exports = {
  createProduct,
  listProducts,
};
