import Image from "next/image";
import * as React from "react";

export function GalleryComponent({ title, subtitle, paragraph, image, left }) {
  return left ? (
    <div className="relative z-10 bg-black">
      <div className="flex">
        <div className="w-[50%] p-16 flex flex-col gap-4">
          <div className="opacity-70 font-bold text-lg">{subtitle}</div>
          <div className="text-6xl font-black">{title}</div>
          <div className="text-lg">{paragraph}</div>
        </div>
        <div className="w-[50%] relative">
          <Image src={image} fill={true} style={{ objectFit: "cover" }} />
        </div>
      </div>
    </div>
  ) : (
    <div className="relative z-10 bg-black">
      <div className="flex">
        <div className="w-[50%] relative">
          <Image src={image} fill={true} style={{ objectFit: "cover" }} />
        </div>
        <div className="w-[50%] p-16 flex flex-col gap-4">
          <div className="opacity-70 font-bold text-lg">{subtitle}</div>
          <div className="text-6xl font-black">{title}</div>
          <div className="text-lg">{paragraph}</div>
        </div>
      </div>
    </div>
  );
}
