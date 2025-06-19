import NavBar from "@/components/NavBar";

export default function ReportsPage() {
  return (
    <div>
      <NavBar />
      <main className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Engagement Reports</h2>
        <p>Analytics and downloadable PDF/CSV summaries will be shown here.</p>
      </main>
    </div>
  );
}

// 7. app/settings/page.tsx (Settings)
import NavBar from "@/components/NavBar";

export default function SettingsPage() {
  return (
    <div>
      <NavBar />
      <main className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Classroom Settings</h2>
        <p>Settings for instructors, alert thresholds, detection intervals, etc.</p>
      </main>
    </div>
  );
}