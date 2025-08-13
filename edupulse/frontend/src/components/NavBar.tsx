// src/components/NavBar.tsx
'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavBar() {
  const path = usePathname() || '/'
  const active = (p: string) => path === p ? 'underline font-semibold' : ''

  return (
    <nav className="bg-blue-600 text-white px-6 py-3">
      <div className="max-w-6xl mx-auto flex gap-6">
        <Link href="/" className={active('/')}>Dashboard</Link>
        <Link href="/home" className={active('/home')}>Home</Link>
        <Link href="/classroom" className={active('/classroom')}>Classroom</Link>
        <Link href="/instructor" className={active('/instructor')}>Instructor</Link>
        <Link href="/attendance" className={active('/attendance')}>Attendance</Link>
        <Link href="/reports" className={active('/reports')}>Reports</Link>
        <Link href="/profile" className={active('/profile')}>Profile</Link>
      </div>
    </nav>
  )
}
