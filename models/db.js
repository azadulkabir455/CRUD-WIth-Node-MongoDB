const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/studentDB', {useNewUrlParser: true})
                .then(() => {
                    console.log("Database is succesfully conneted");
                }).catch((err) => {
                    console.log("Database is connection failed");
                });

require("./student.model");