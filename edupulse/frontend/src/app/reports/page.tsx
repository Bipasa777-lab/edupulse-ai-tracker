export default async function ReportsPage() {
  // server component is fine if you want SSR; here we use client-ish simple fetch
  // For now we can call a server endpoint via the client; keep as simple placeholder.
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Reports</h2>
      <p>Detailed analytics will appear here (avg attention, trends, CSV export).</p>
    </div>
  )
}
