import NavBar from "@/components/NavBar";

export default function AttendancePage() {
  return (
    <div>
      <NavBar />
      <main className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Attendance Records</h2>
        <p>List of attendees and timestamps will be fetched and shown here.</p>
      </main>
    </div>
  );
}