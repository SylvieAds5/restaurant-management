// Add function to manage reservations
const { Model } = require("sequelize");
const { Reservation, Menu, Table, Customer } = require("../models");
const { ask } = require("./common");
const now = new Date();

async function manageReservations() {
  console.log("\n--- Manage Reservations ---");
  console.log("1. Create a Reservation");
  console.log("2. List Reservations");
  console.log("3. Detail of a reservation");
  console.log("4. Update a reservation");
  console.log("5. Delete a reservation");
  console.log("6. Back to main menu");

  const choice = await ask("Your choice: ");

  switch (choice) {
    case "1": {
      await createReservation();
      break;
    }
    case "2":
      await listReservations();
      break;
    case "3":
      await viewReservation();
      break;
    case "4":
      await updateReservation();
      break;
    case "5":
      await deleteReservation();
      break;
    case "6":
      return;
    default:
      console.log("❌ Invalid option.");
  }

  await manageReservations(); // Repeat submenu
}

async function createReservation() {
  console.log("\n Create resevation");
  const addReservation = await Reservation.create({
    date: now.toLocaleDateString("fr-FR"),
    menuId: 1,
    tableId: 1,
    customerId: 1,
  });
  console.log("\n✅ Reservation added:", addReservation.toJSON());
}
// sylvie part
async function listReservations() {
  console.log("\n List resevation");
}
// romuald part
async function viewReservation() {
  console.log("\n View resevation");
  const reservationView = await Reservation.findAll({
    attributes: ["date"],
    include: [
      { model: Menu, attributes: ["name"] },
      { model: Table, attributes: ["name"] },
      { model: Customer, attributes: ["firstname"] },
    ],
  });

  reservationView.forEach((cu) =>
    console.log(
      // @ts-ignore
      `${cu.date} | ${cu.menu?.name} | ${cu.table?.name} | ${cu.customer?.firstname}`
    )
  );
}
// sylvie part
async function updateReservation() {
  console.log("\n Update resevation");
}
// romuald part
async function deleteReservation() {
  console.log("\n Delete resevation");
  const remove = await Reservation.destroy({ where: { id: 1 } });
  remove
    ? console.log(`la reservation à été supprimée`)
    : console.log(`erreur lors de la suppression  de la reservation`);
}

module.exports = {
  manageReservations,
};
