const sequelize = require("../config/config");
const { User, Post } = require("../models");

const userdata = [
  {
    username: "cady_heron",
    email: "cheron@gmail.com",
    password: "password123",
  },
  {
    username: "aaron_samuels",
    email: "asamuels@gmail.com",
    password: "password123",
  },
  {
    username: "regina_george",
    email: "rgeorge@gmail.com",
    password: "password123",
  },
  {
    username: "gretchen_wieners",
    email: "gwieners@gmail.com",
    password: "password123",
  },
  {
    username: "janis_ian",
    email: "jian@gmail.com",
    password: "password123",
  },
  {
    username: "karen_smith",
    email: "ksmith@gmail.com",
    password: "password123",
  },
  {
    username: "damian",
    email: "damian@gmail.com",
    password: "password123",
  },
  {
    username: "coach_carr",
    email: "coachcarr@gmail.com",
    password: "password123",
  },
  {
    username: "crying_girl",
    email: "cryinggirl@gmail.com",
    password: "password123",
  },
  {
    username: "testaccount",
    email: "test@test.com",
    password: "testtest",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
