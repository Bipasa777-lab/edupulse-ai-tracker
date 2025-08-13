// src/components/StudentCard.tsx
'use client'
export default function StudentCard({ name, status }: { name: string, status: string }) {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h4 className="font-semibold">{name}</h4>
      <p className="text-sm">{status}</p>
    </div>
  )
}
