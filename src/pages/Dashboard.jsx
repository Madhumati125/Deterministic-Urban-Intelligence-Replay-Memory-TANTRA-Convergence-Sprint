import { useState } from "react";

import ZoneCard from "../components/ZoneCard";
import ZoneMap from "../components/ZoneMap";
import RiskChart from "../components/RiskChart";
import Timeline from "../components/Timeline";
import ExecutionLog from "../components/ExecutionLog";

import { zones as initialZones } from "../utils/mockData";

export default function Dashboard() {
  const [zones] = useState(initialZones);
  const [activeZone, setActiveZone] = useState(null);
  const [logs, setLogs] = useState([]);

  // 🧠 RUN ALL ZONES ENGINE
  const runAllZones = () => {
    const results = zones.map((z) => {
      const risk = z.risk_score;

      let state = "LOW";
      if (risk > 70) state = "HIGH";
      else if (risk > 40) state = "MEDIUM";

      return {
        zone_id: z.zone_id,
        risk_score: risk,
        current_state: state,
        timestamp: new Date().toLocaleTimeString()
      };
    });

    setLogs(results);
  };

  return (
    <div className="container">

      <h1>UCCIS Intelligence Control Center</h1>

      {/* 🌍 MAP + BUTTON SECTION */}
      <div className="mapHeader">

        <button onClick={runAllZones}>
          Run All Zones
        </button>

      </div>

      <ZoneMap zones={zones} activeZone={activeZone} />

      {/* ZONE GRID */}
      <div className="grid">
        {zones.map((z, i) => (
          <div
            key={i}
            onMouseEnter={() => setActiveZone(z)}
            onMouseLeave={() => setActiveZone(null)}
          >
            <ZoneCard data={z} />
          </div>
        ))}
      </div>

      {/* ACTIVE ZONE */}
      {activeZone && (
        <div className="card">
          <h3>Active Zone</h3>
          <p>{activeZone.zone_id}</p>
        </div>
      )}

      {/* CHART */}
      <RiskChart zones={zones} />

      {/* TIMELINE */}
      <Timeline zones={zones} />

      {/* 📟 EXECUTION LOG */}
      <ExecutionLog logs={logs} />

    </div>
  );
}