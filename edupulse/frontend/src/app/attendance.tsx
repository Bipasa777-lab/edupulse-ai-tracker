import React, { useEffect, useState } from "react";
import NavBar from "@/components/NavBar";

interface AttendanceRecord {
  id: number;
  name: string;
  timestamp: string;
}

export default function AttendancePage() {
  const [records, setRecords] = useState<AttendanceRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/attendance")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch attendance");
        return res.json();
      })
      .then((data) => {
        setRecords(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <main className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Attendance Records</h2>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : records.length === 0 ? (
          <p>No attendance records found.</p>
        ) : (
          <table className="min-w-full border border-gray-200">
            <thead>
              <tr>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record) => (
                <tr key={record.id}>
                  <td className="border px-4 py-2">{record.name}</td>
                  <td className="border px-4 py-2">{new Date(record.timestamp).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </main>
    </div>
  );
}