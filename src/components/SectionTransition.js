"use client";

export function SectionTransition({ height = "h-24" }) {
  return (
    <div className={`w-full ${height} bg-gradient-transition`}>
      <div className="w-full h-full opacity-50" />
    </div>
  );
}
