const express = require("express");
const cors = require("cors");
const memoryRoutes = require("./routes/memoryRoutes"); //connect route to expres
require("dotenv").config();
const connectDB = require("./config/db");
console.log(connectDB);
const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/memories", memoryRoutes); //connect route to express

app.get("/", (req, res) => {
  res.send("Hello from the server!");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
const aiRoutes = require("./routes/aiRoutes");
app.use("/api/ai", aiRoutes);