require("dotenv").config();

const app = require("./app");

// const PORT = 3000;
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server's running at http://localhost:${PORT}`);
});
