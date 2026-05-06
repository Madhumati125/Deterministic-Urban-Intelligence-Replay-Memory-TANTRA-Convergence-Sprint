const router = require("express").Router();
const fs = require("fs");

const { computeRisk, getState } = require("../core/deterministicEngine");

const FILE = "./data/state_history.json";

router.post("/evaluate", (req, res) => {
  const d = req.body;

  const risk = computeRisk(d);
  const state = getState(risk);

  const result = {
    zone_id: d.zone_id,
    risk_score: risk,
    current_state: state,
    timestamp: Date.now()
  };

  // 🔥 SAFE WRITE LOGIC
  let data = [];

  try {
    if (fs.existsSync(FILE)) {
      const raw = fs.readFileSync(FILE, "utf-8");
      data = raw ? JSON.parse(raw) : [];
    }
  } catch (e) {
    data = [];
  }

  data.push(result);
  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));

  res.json(result);
});

module.exports = router;