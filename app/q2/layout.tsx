import ResponsiveNavbar from "@/features/q2/components/responsive-navbar";
import React from "react";

export default function Q2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ResponsiveNavbar />
      {children}
    </div>
  );
}
