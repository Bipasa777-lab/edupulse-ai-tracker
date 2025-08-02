import React from "react";
import type { StudentStatus } from "@/app/instructor";

interface StudentCardProps {
  name: string;
  status: StudentStatus;
}

const statusColors: Record<StudentStatus, string> = {
  live: "bg-green-100 text-green-800 border-green-400",
  spoof: "bg-red-100 text-red-800 border-red-400",
  inactive: "bg-gray-100 text-gray-800 border-gray-400",
};

export default function StudentCard({ name, status }: StudentCardProps) {
  return (
    <div className={`border rounded p-4 shadow-sm flex flex-col items-start ${statusColors[status]}`}> 
      <div className="font-bold text-lg mb-2">{name}</div>
      <span className="text-sm px-2 py-1 rounded border" style={{ borderColor: "inherit" }}>
        Status: {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    </div>
  );
}
