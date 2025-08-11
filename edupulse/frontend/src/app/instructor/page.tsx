'use client'
import { useEffect, useState } from 'react'
import StudentCard from '@/components/StudentCard'

export default function InstructorPage() {
  const [students, setStudents] = useState<{id:number,name:string,status:string}[]>([])

  useEffect(() => {
    // simple poll for instructor dashboard
    const fetchStudents = async () => {
      const res = await fetch('http://127.0.0.1:5000/api/detect/all') // returns array of {id,name,status}
      setStudents(await res.json())
    }
    fetchStudents()
    const id = setInterval(fetchStudents, 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Instructor Dashboard</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {students.map(s => <StudentCard key={s.id} name={s.name} status={s.status} />)}
      </div>
    </div>
  )
}
