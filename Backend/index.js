/// Importing some Modules
const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

//Creating our app
const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Request-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

// Setting up EJS
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));

//Setting up bodyParser
//Remember to use bodyparser for the passage of the data in ejs
app.use(bodyParser.urlencoded({ extended: true }));

//Getting date
app.get("/", (req, res) => {
  res.send("Hello User");
});

date = "";
data_link = "";

//Getting date
app.post("/getting-data", (req, res) => {
  date = req.body.date;
  console.log(date);
  data_link =
    "https://api.nasa.gov/planetary/apod?api_key=Km6f1Ncywdj70Jp5LlCxhtDnZFjdMor21h5OC7Ef&date=" +
    date;
  console.log(data_link);
});

app.get("/date", (req, res) => {
  https.get(data_link, (data) => {
    data.on("data", (mainData) => {
      formattedData = JSON.parse(mainData);

      console.log(formattedData);

      console.log(formattedData.hdurl);
      image_url = formattedData.hdurl;

      console.log(image_url);

      res.send(image_url);
    });
  });
});

app.listen(3000, console.log("Server Up"));
