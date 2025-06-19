import JoinForm from "@/components/JoinForm";
import NavBar from "@/components/NavBar";

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <main className="flex flex-col items-center justify-center min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-6">Welcome to EduPulse</h1>
        <JoinForm />
      </main>
    </div>
  );
}