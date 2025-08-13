// src/app/page.tsx
export default function Page() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">EduPulse AI Tracker</h1>
      <p className="text-gray-700 mb-6">
        Welcome — monitor student attentiveness in real-time.
      </p>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        <div className="p-4 bg-white rounded shadow">
          <h3 className="font-semibold">Live classes</h3>
          <p className="text-sm text-gray-600">3 ongoing</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h3 className="font-semibold">Average attention</h3>
          <p className="text-sm text-gray-600">87%</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h3 className="font-semibold">Reports this week</h3>
          <p className="text-sm text-gray-600">12</p>
        </div>
      </div>
    </div>
  )
}
