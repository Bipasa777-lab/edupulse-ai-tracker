// src/components/JoinForm.tsx
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function JoinForm() {
  const [name, setName] = useState("");
  const router = useRouter();

  const handleJoin = () => {
    if (name.trim()) {
      sessionStorage.setItem("studentName", name);
      router.push("/classroom");
    }
  };

  return (
    <div className="w-full max-w-md space-y-4">
      <Input
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button onClick={handleJoin} className="w-full">
        Join Class
      </Button>
    </div>
  );
}
