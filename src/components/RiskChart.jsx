import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

export default function RiskChart({ zones }) {
  return (
    <div className="card">
      <h2>Zone Risk Comparison</h2>

      <BarChart width={600} height={250} data={zones}>
        <XAxis dataKey="zone_id" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="risk_score" fill="#3b82f6" />
      </BarChart>
    </div>
  );
}