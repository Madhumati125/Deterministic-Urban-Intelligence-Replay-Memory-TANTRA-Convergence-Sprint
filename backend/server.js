const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// STATIC TEST UI (IMPORTANT)
app.use(express.static(path.join(__dirname, "public")));

const intelligenceRoutes = require("./routes/intelligenceRoutes");
const executionRoutes = require("./routes/executionRoutes");
const memoryRoutes = require("./routes/memoryRoutes");

app.use("/intelligence", intelligenceRoutes);
app.use("/execute", executionRoutes);
app.use("/memory", memoryRoutes);

app.listen(5000, () => {
  console.log("UCCIS running at http://localhost:5000");
  console.log("Open http://localhost:5000/test.html for testing");
});