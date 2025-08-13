"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * Classroom page
 * - Paste your Daily.co room URL or set NEXT_PUBLIC_DAILY_ROOM in .env.local
 * - Layout.tsx should already render NavBar, so we DON'T render it here (avoids duplicates)
 */

export default function ClassroomPage() {
  const envRoom = process.env.NEXT_PUBLIC_DAILY_ROOM || "";
  const [roomUrl, setRoomUrl] = useState<string>(envRoom);
  const [inputUrl, setInputUrl] = useState<string>(envRoom);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [joined, setJoined] = useState<boolean>(Boolean(envRoom));

  // When a roomUrl is set we load it into the iframe
  useEffect(() => {
    if (iframeRef.current && roomUrl) {
      iframeRef.current.src = roomUrl;
    }
  }, [roomUrl]);

  function handleJoin(e?: React.FormEvent) {
    if (e) e.preventDefault();
    if (!inputUrl.trim()) return;
    // Basic validation - must be an http(s) url
    try {
      const parsed = new URL(inputUrl.trim());
      setRoomUrl(parsed.toString());
      setJoined(true);
    } catch {
      alert("Please enter a valid room URL (https://...)");
    }
  }

  function handleLeave() {
    // Clear iframe src to stop media in the background
    if (iframeRef.current) {
      iframeRef.current.src = "about:blank";
    }
    setJoined(false);
    // keep inputUrl so user can rejoin easily
  }

  return (
    <main className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Live Classroom</h2>

      {/* Join controls */}
      <form onSubmit={handleJoin} className="mb-4 flex gap-2 items-center">
        <input
          type="url"
          placeholder="Paste Daily.co room URL (e.g. https://your-team.daily.co/testroom)"
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
          className="flex-1 rounded border px-3 py-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Join
        </button>

        {joined && (
          <button
            type="button"
            onClick={handleLeave}
            className="ml-2 bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
          >
            Leave
          </button>
        )}
      </form>

      {/* Helpful hint */}
      {!roomUrl && (
        <p className="text-sm text-gray-600 mb-4">
          Tip: create a free room at daily.co and paste the room link here (or set
          <code className="mx-1 rounded bg-gray-100 px-1">NEXT_PUBLIC_DAILY_ROOM</code>
          in <code className="mx-1 rounded bg-gray-100 px-1">.env.local</code>).
        </p>
      )}

      {/* Video iframe */}
      <div className="w-full h-[70vh] bg-black rounded overflow-hidden border">
        {roomUrl ? (
          <iframe
            ref={iframeRef}
            title="Live Classroom"
            src={roomUrl}
            allow="camera; microphone; fullscreen; speaker; display-capture"
            style={{ width: "100%", height: "100%", border: "none" }}
            sandbox="allow-same-origin allow-scripts allow-presentation allow-forms allow-popups"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            Classroom not joined — paste a room URL and click Join.
          </div>
        )}
      </div>
    </main>
  );
}
