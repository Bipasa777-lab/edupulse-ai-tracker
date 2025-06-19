import NavBar from "@/components/NavBar";

export default function NotAllowedPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <NavBar />
      <main className="p-8">
        <h1 className="text-3xl font-bold text-red-600">⚠️ Access Blocked</h1>
        <p className="mt-4">Tab switch or spoofing attempt detected. Please stay focused on class.</p>
      </main>
    </div>
  );
}