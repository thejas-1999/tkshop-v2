import bcrypt from "bcryptjs";

const users = [
  {
    name: "Thejas",
    email: "thejas@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Arun",
    email: "arun@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "Amal",
    email: "amal@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
];

export default users;
