const express = require("express");
const router = express.Router();

router.get("/",(req,res) => {
    res.status(200).render("students/create&update"), {
        viewTitle: "Insert Your Info"
    }
})



module.exports = router;