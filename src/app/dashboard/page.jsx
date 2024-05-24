import React, { Suspense } from "react";

export default function page() {
  return (
    <div>
      <Suspense fallback={<p>Loading feed...</p>}>
        <h2>dashboard</h2>
      </Suspense>
      <Suspense fallback={<p>Loading weather...</p>}>
        <h2>dashboard</h2>
      </Suspense>
    </div>
  );
}
