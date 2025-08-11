// src/components/VideoFeed.tsx
'use client'
import { useEffect, useRef, useState } from 'react'

export default function VideoFeed({ studentId }: { studentId: string }) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [status, setStatus] = useState<'attentive'|'distracted'|'unknown'>('unknown')

  useEffect(() => {
    async function setup() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        if (videoRef.current) videoRef.current.srcObject = stream
        videoRef.current!.play()

        // every 4s send a "frame check" to backend (you can send image later)
        const interval = setInterval(async () => {
          try {
            const res = await fetch('http://127.0.0.1:5000/api/detect/status', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ student_id: studentId })
            })
            const json = await res.json()
            setStatus(json.status)
          } catch (e) {
            setStatus('unknown')
          }
        }, 4000)
        return () => {
          clearInterval(interval)
          const tracks = (videoRef.current?.srcObject as MediaStream)?.getTracks()
          tracks?.forEach(t => t.stop())
        }
      } catch (err) {
        console.error('camera error', err)
      }
    }
    setup()
  }, [studentId])

  return (
    <div className="bg-white rounded p-4 shadow">
      <video ref={videoRef} className="w-full h-64 bg-black rounded" />
      <div className="mt-2">
        <span className={`px-3 py-1 rounded ${status === 'attentive' ? 'bg-green-100 text-green-700' : status === 'distracted' ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700'}`}>
          {status}
        </span>
      </div>
    </div>
  )
}

