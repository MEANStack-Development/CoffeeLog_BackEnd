const express = require("express");
const nedb = require("nedb");
const rest = require("express-nedb-rest");
const cors = require("cors");

const app = express();
const datastore = new nedb({
    filename: "coffeelog.db",
    autoload: true
});

//Creating RestAPI variable
const restAPI = rest();
restAPI.addDatastore('coffees', datastore);

app.use(cors());
app.use("/", restAPI); //defining default path

//defining in which port server rub
app.listen(3000, () => {
    console.log("API ready at https://localhost:3000");
})