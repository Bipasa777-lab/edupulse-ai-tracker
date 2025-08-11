// src/app/layout.tsx
"use client";

import "./globals.css";
import NavBar from "@/components/NavBar";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const noNavBarRoutes = ["/auth/login", "/auth/signup"];
  const hideNavBar = noNavBarRoutes.includes(pathname);

  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">
        {!hideNavBar && <NavBar />}
        <main className="max-w-6xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
