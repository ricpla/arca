import Image from "next/image";
import * as React from "react";

export function ClientLogo({ image, size }) {
  return (
    <div>
      <Image src={image} width={size} height={size} />
    </div>
  );
}
