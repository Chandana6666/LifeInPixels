const express = require("express");

const router = express.Router();

const {
    createMemory,
    getMemories,
    deleteMemory
} = require("../controllers/memoryController");

router.post("/", createMemory);

router.get("/", getMemories);

router.delete("/:id", deleteMemory);

module.exports = router;