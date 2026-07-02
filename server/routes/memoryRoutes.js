const express = require("express");
const router = express.Router();
const controller = require("../controllers/memoryController");
console.log(controller);
const { createMemory } = (controller)

//const { createMemory } = controller;
//const { createMemory } = require("..//controllers/memoryController");

router.post("/", createMemory);
module.exports = router;
