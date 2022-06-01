const { v4: uuidv4 } = require("uuid");

const users = [
  {
    id: uuidv4(),
    username: "Al Mamun",
    email: "shamimalmamun.aiub@gmail.com",
  },
  {
    id: uuidv4(),
    username: "Shamim hasan",
    email: "shamimhasan.aiub@gmail.com",
  },
];

module.exports = users;
