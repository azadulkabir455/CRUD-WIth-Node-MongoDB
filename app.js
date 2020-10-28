require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const studentsController = require("./controllers/studentsController");
const Handlebars = require('handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');


const app = express();
const port = 4000;

app.use(express.urlencoded({extended : true}));
app.use("/", studentsController);

app.set("views",path.join(__dirname,"views"));
app.engine("hbs",exphbs({
    extname: "hbs",
    defaultLayout: "mainlayout",
    lauoutDir: __dirname + "/viwes/layouts",
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}))
app.set("view engine", "hbs");


app.listen(port,(req,res) => {
    console.log(`Server Start at localhost:${port}`);
})