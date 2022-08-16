/// Importing some Modules
const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
// const mongoose = require("mongoose");

//Creating our app
const app = express();



app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    next();
})


// Setting up EJS
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));

//Setting up bodyParser
//Remember to use bodyparser for the passage of the data in ejs
app.use(bodyParser.urlencoded({ extended: true }));
let image_url = "";

//Connecting with mongoose
// mongoose.connect("mongodb+srv://Tanmaydeep:tanmay@cluster1.vcm3w.mongodb.net/API-TEST", {useNewUrlParser:true});

//Creating a schema
// const userSchema= {
//     book:String,
//     quote:String,
// };
// const Data = new mongoose.model("Data", userSchema);




//Getting date
app.get("/", (req, res) => {
   
res.send("Hello User")  
  
  });



  

api_key_nasa_apod = "Km6f1Ncywdj70Jp5LlCxhtDnZFjdMor21h5OC7Ef";
url_apod = "https://api.nasa.gov/planetary/apod";

date = "";
data_link = ""

//Getting date
app.post("/getting-data", (req, res) => {
  date = req.body.date;
  console.log(date)
  data_link = "https://api.nasa.gov/planetary/apod?api_key=Km6f1Ncywdj70Jp5LlCxhtDnZFjdMor21h5OC7Ef&date=" + date;
  console.log(data_link)


});









app.get("/date", (req, res) => {


  https.get(data_link, (data) => {
    
    data.on("data", (mainData) => {


        formattedData = JSON.parse(mainData);

        console.log(formattedData)

        console.log(formattedData.hdurl);
      image_url = formattedData.hdurl;

      console.log(image_url)

      res.send(image_url);

    });
  });
});

// // SENDING DATA

// app.get("/get-data",(req,res)=>{
//         Data.find({}, function(err, newData){  //Selecting the collection to send to frontend
//             res.send( newData  //Sending data.
//             );
//         });

// })

app.listen(3000, console.log("Server Up"));
