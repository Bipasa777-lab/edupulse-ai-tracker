
"use client";

import React, { useState } from "react";
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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleJoin();
    }
  };

  return (
    <div className="w-full max-w-md space-y-4">
      <Input
        placeholder="Enter your name"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        onKeyDown={handleKeyDown}
        aria-label="Enter your name"
      />
      <Button onClick={handleJoin} className="w-full" disabled={!name.trim()}>
        Join Class
      </Button>
    </div>
  );
}
