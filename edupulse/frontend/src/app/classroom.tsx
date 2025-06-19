import VideoFeed from "@/components/VideoFeed";
import AlertBanner from "@/components/AlertBanner";
import NavBar from "@/components/NavBar";

export default function ClassroomPage() {
  return (
    <div>
      <NavBar />
      <main className="p-6 space-y-4">
        <AlertBanner message="Liveness Detected" type="success" />
        <VideoFeed />
      </main>
    </div>
  );
}