require("dotenv").config();

const DB = require("../");

const users = [
  {
    name: process.env.ADMIN_NAME,
    email: process.env.ADMIN_EMAIL,
    password: process.env.ADMIN_PASSWORD,
    permissions: {
      ACCESS: true,
      WRITE: true,
      DELETE: true,
    },
  },
];

users.forEach(user => new DB.User(user).save());

console.log("done");
