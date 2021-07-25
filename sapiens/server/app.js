const express = require("express");
const http = require("http");
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();
let user = require("./routes/user");

let app = express();
const server = http.createServer(app);
let bodyParser = require("body-parser");

// mongoose
//   .connect(process.env.MONGO_URI,
// { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//       console.log('mongoDB connected...');
      
//   }).catch(err => {
//       console.log(err);
//   });

app.set("port", process.env.SERVER_PORT);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "../client/build")));


app.use("/userApi", user);


server.listen(process.env.SERVER_PORT, () => {
  console.log(`server started at port ${app.get("port")}`);
});




