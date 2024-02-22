import Image from "next/image";
import * as React from "react";

export function QualityItem({ icon, title, paragraph }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="text-8xl flex items-center justify-center">{icon}</div>
      <div className="flex flex-col gap-4 text-center">
        <div className="text-2xl font-bold">{title}</div>
        <div className="">{paragraph}</div>
      </div>
    </div>
  );
}
