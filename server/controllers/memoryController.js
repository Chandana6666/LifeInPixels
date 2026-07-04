const Memory = require("../models/Memory");
const createMemory = async (req, res) => {
  try {
    const memory = await Memory.create(req.body);
    res.status(201).json({ success: true, message: 'Memory created successfully', data: memory });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
  };
  const getMemories = async (req, res) => {
    try {

        const memories = await Memory.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: memories.length,
            data: memories
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};
const deleteMemory = async (req, res) => {

    try {

        const memory = await Memory.findByIdAndDelete(req.params.id);

        if (!memory) {

            return res.status(404).json({
                success:false,
                message:"Memory not found"
            });

        }

        res.status(200).json({

            success:true,

            message:"Memory deleted successfully"

        });

    } catch(error){

        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};
module.exports = { createMemory, getMemories, deleteMemory };