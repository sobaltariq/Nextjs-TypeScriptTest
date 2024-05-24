import Script from "next/script";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="dashboard-layout">{children}</div>
      <Script src="https://example.com/script.js" />
    </>
  );
}
