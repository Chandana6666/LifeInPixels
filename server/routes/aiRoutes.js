const express = require("express");

const router = express.Router();

const { generateTitle } = require("../controllers/aiController");

router.post("/title", generateTitle);

module.exports = router;