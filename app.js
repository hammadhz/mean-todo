const express = require("express");
const app =  express();
const path = require("path");
const port = process.env.PORT || 4090;
const dotenv = require("dotenv");

const route = require("./routes/route");
const mongodbConnect = require("./config/db");
const router = require("./routes/api-route");
const bodyParser = require("body-parser");

dotenv.config();

app.use(express.static(path.join(__dirname,"public")));
app.use(express.static(path.join(__dirname,"views")));

app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

mongodbConnect();

app.use(route);
app.use(router);

app.listen(port, ()=> {
    console.log("Server is running at port:", port);
});