import NavBar from "@/components/NavBar";

export default function ProfilePage() {
  return (
    <div>
      <NavBar />
      <main className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Your Engagement Profile</h2>
        <p>Live session attendance, alert logs, and facial engagement summaries go here.</p>
      </main>
    </div>
  );
}