
const express = require("express");
const accountsRoutes = require("./api/accounts/accounts.routes");
const connection = require("./data");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(express.json());
app.use("/accounts", accountsRoutes);

connection();
const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
  console.log(`The application is running on localhost:${PORT}`);
});
