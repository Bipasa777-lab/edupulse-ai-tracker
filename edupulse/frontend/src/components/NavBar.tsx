// src/components/NavBar.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white border-b">
      <Link href="/" className="text-xl font-bold text-indigo-600">
        EduPulse
      </Link>
      <div className="space-x-2">
        <Link href="/classroom">
          <Button className="bg-transparent hover:bg-gray-100 text-indigo-600 shadow-none">Classroom</Button>
        </Link>
        <Link href="/instructor">
          <Button className="bg-transparent hover:bg-gray-100 text-indigo-600 shadow-none">Instructor</Button>
        </Link>
        <Link href="/profile">
          <Button className="bg-transparent hover:bg-gray-100 text-indigo-600 shadow-none">Profile</Button>
        </Link>
      </div>
    </nav>
  );
}
