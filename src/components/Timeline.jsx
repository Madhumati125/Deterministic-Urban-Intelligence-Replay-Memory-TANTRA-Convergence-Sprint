export default function Timeline({ zones }) {
  return (
    <div className="card">
      <h2>Zone Snapshot Timeline</h2>

      {zones.map((z, i) => (
        <div key={i}>
          {z.zone_id} → Risk {z.risk_score}
        </div>
      ))}
    </div>
  );
}