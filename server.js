const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const { readdirSync } = require("fs");
require("dotenv").config();
const path = require("path");

//app
const app = express();

//db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected !"))
  .catch((err) => console.log("Database connection error : ", err));

//middleware
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());

//route middleware
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

//heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

//port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
