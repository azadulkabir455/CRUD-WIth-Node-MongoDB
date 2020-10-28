require('./models/db');
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const studentsController = require("./controllers/studentsController");


const app = express();
const port = 3000;

app.use(express.urlencoded({extended : true}));
app.use("/", studentsController);

app.set("views",path.join(__dirname,"views"));
app.engine("hbs",exphbs({
    extname: "hbs",
    defaultLayout: "mainlayout",
    lauoutDir: __dirname + "/viwes/layouts"
}))
app.set("view engine", "hbs");


app.listen(port,(req,res) => {
    console.log(`Server Start at localhost:${port}`);
})