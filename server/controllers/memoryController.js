const Memory = require("../models/Memory");
const createMemory = async (req, res) => {
  try {
    const memory = await Memory.create(req.body);
    res.status(201).json({ success: true, message: 'Memory created successfully', data: memory });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
  };
module.exports = { createMemory };