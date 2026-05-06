const router = require("express").Router();

let last = {};

router.post("/request", (req, res) => {
  const { zone_id, current_state, trace_id } = req.body;

  if (!trace_id) {
    return res.json({
      status: "error",
      error: "MISSING_TRACE_ID"
    });
  }

  if (last[zone_id] === current_state) {
    return res.json({
      status: "ignored",
      reason: "duplicate_state"
    });
  }

  last[zone_id] = current_state;

  res.json({
    status: "execution_created",
    trace_id,
    zone_id,
    state: current_state
  });
});

module.exports = router;