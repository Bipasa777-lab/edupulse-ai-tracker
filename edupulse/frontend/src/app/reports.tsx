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

