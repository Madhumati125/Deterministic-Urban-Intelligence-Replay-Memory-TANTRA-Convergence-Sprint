export default function ExecutionLog({ logs }) {
  return (
    <div className="card">
      <h3>Execution Log (Audit Trail)</h3>

      {logs.map((l, i) => (
        <pre key={i} className="log">
{JSON.stringify(l, null, 2)}
        </pre>
      ))}
    </div>
  );
}