// Add the sequelize models

const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Customer = sequelize.define(
  "customer",
  {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
  },
  {
    timestamps: false, // 👈 disables createdAt & updatedAt
  }
);

const Table = sequelize.define(
  "table",
  {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
  },
  {
    timestamps: false, // 👈 disables createdAt & updatedAt
  }
);

const Product = sequelize.define(
  "product",
  {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
  },
  {
    timestamps: false, // 👈 disables createdAt & updatedAt
  }
);

const Menu = sequelize.define(
  "menu",
  {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    day: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
  },
  {
    timestamps: false, // 👈 disables createdAt & updatedAt
  }
);

const Reservation = sequelize.define(
  "reservation",
  {
    date: DataTypes.DATE,
  },
  {
    timestamps: false, // 👈 disables createdAt & updatedAt
  }
);

const MenuProduct = sequelize.define(
  "menuProduct",
  {
    menuId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
  },
  {
    timestamps: false, // 👈 disables createdAt & updatedAt
  }
);

const MenuCooked = sequelize.define(
  "menuCooked",
  {
    menuId: DataTypes.INTEGER,
    cookId: DataTypes.INTEGER,
    reservationId: DataTypes.INTEGER,
  },
  {
    tableName: "menuCooked",
    timestamps: false, // 👈 disables createdAt & updatedAt
  }
);

const Cook = sequelize.define("cook", {
  firstname: DataTypes.STRING,
  lastname: DataTypes.STRING,
  email: DataTypes.STRING,
  phoneNumber: DataTypes.STRING,
});

Customer.hasMany(Reservation);
Reservation.belongsTo(Customer);

Reservation.belongsTo(Table);
Table.hasMany(Reservation);

Menu.hasMany(Reservation);
Reservation.belongsTo(Menu);

Product.belongsToMany(Menu, { through: MenuProduct });
Menu.belongsToMany(Product, { through: MenuProduct });

Cook.belongsToMany(Menu, { through: MenuCooked });
Menu.belongsToMany(Cook, { through: MenuCooked });

Reservation.belongsTo(MenuCooked);

module.exports = {
  sequelize,
  Customer,
  Table,
  Product,
  Menu,
  Reservation,
};
