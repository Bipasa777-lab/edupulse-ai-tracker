import React from "react";

interface AlertBannerProps {
  message: string;
  type?: "success" | "error" | "info" | "warning";
}

const typeStyles: Record<string, string> = {
  success: "bg-green-100 text-green-800 border-green-400",
  error: "bg-red-100 text-red-800 border-red-400",
  info: "bg-blue-100 text-blue-800 border-blue-400",
  warning: "bg-yellow-100 text-yellow-800 border-yellow-400",
};

export default function AlertBanner({ message, type = "info" }: AlertBannerProps) {
  return (
    <div
      className={`border-l-4 p-4 mb-4 rounded ${typeStyles[type] || typeStyles.info}`}
      role="alert"
    >
      <span className="font-medium">{type.charAt(0).toUpperCase() + type.slice(1)}: </span>
      {message}
    </div>
  );
}