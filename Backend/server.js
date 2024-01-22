const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
require("dotenv").config();
const app = express();
const { ConnectDB } = require("./utils/connection");

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

const PORT = 8070 || process.env.PORT;
app.listen(PORT, () => {
    console.log(`🚀 :: Server is up and running on PORT number: ${PORT}`);
    ConnectDB();
})