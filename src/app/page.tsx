"use client";

import { run } from "@/app/action";
import React from "react";

export default function Home() {
  return (
    <div>
      Hello
      <button onClick={() => run()}>Run Effect FS</button>
    </div>
  );
}
