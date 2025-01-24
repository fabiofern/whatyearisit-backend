var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    console.log("yeah");
    res.render("index", { title: "Express" });
});

router.get("/year", function (req, res) {
    let date = new Date().getFullYear();
    res.json({ year: date.toString() });
});

module.exports = router;
