const mongoose  = require("mongoose");

const studentSchema = new mongoose.Schema({
    name   : String,
    id     : String,
    phone  : String,
    address: String
});
mongoose.model("Student", studentSchema);