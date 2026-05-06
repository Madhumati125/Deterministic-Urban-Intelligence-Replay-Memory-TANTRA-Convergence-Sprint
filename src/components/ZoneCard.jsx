export default function ZoneCard({ data }) {
  return (
    <div className="card">
      <h3>{data.zone_id}</h3>

      <p>
        Risk:
        <b
          style={{
            color:
              data.risk_score > 70
                ? "red"
                : data.risk_score > 40
                ? "orange"
                : "green"
          }}
        >
          {" "}{data.risk_score}
        </b>
      </p>
    </div>
  );
}