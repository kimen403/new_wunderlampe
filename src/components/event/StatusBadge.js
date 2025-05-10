"use client";

export default function StatusBadge({ isActive }) {
  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${
        isActive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
      }`}
    >
      {isActive ? "Active" : "Inactive"}
    </span>
  );
}
