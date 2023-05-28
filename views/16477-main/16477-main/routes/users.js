// fileName: users.js
// Student Name:Sina Pazhwak
// Student ID:301033560
// Date:2021-10-03

var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("Placeholder");
});

module.exports = router;
