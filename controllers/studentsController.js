const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const Student = mongoose.model("Student");

router.get("/",(req,res) => {
    res.render("students/create&update", {
        viewTitle: "Insert Your Info",
    });
});


// Create & Update Data

router.post("/", (req, res) => {
    createData(req,res);
})

// Save Data

function createData(req ,res) {
    let student = new Student(req.body);
    student.save()
    .then(() => {
        res.redirect("/list");
    }).catch((err) => {
        console.log(`Data Has been denied to save ${err}`);
    })
}


// Find Data

router.get("/list",(req,res) => {
    Student.find()
    .then((data) => {
        res.render("students/list", {list: data});
    }).catch((err) => {
        console.log(`Data not retrive for ${err}`);
    })
});


module.exports = router;