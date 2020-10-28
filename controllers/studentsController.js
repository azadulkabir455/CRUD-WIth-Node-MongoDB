const e = require("express");
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
    if(req.body._id == ""){
        createData(req ,res);
    }else {
        updateData(req,res);
    }
    // createData(req ,res);
});

// Save Data
function createData(req ,res) {
    let student = new Student(req.body);
    console.log(student)
    student.save()
    .then(() => {
        res.redirect("/list");
    }).catch((err) => {
        console.log(`Data Has been denied to save ${err}`);
    })
}

//Update Data 

function updateData(req,res) {
    Student.findOneAndUpdate({_id: req.body._id}, req.body, {new: true})
    .then(()=> {
        res.redirect("/list");
    }).catch((err) => {
        console.log(`Error to update: ${err}`);
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
// Find Data By Specific id

router.get("/:id",(req,res) => {
    Student.findById(req.params.id)
    .then((data) => {
        res.render("students/create&update",{
            viewTitle: "Update Your info",
            student: data
        });
    }).catch((err) => {
        console.log(`Data not found for ${err}`);
    })
})

router.get("/delete/:id", (req,res) => {
    Student.findOneAndRemove(req.params.id)
    .then(()=> {
        res.redirect("/list");
    }).catch((err)=> {
        console.log(`Error to Delete for: ${err}`);
    })
})


module.exports = router;