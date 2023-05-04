import React from "react";

// next
import Image from "next/image";

// ::
export default function page() {
  return (
    <div className="animate-fadeIn flex flex-col items-center  justify-center">
      <div className="overflow-hidden relative bg-yellow-400 rounded-md shadow-md border-4 border-b-[20px] border-yellow-400">
        <Image
          width={120}
          height={120}
          src="https://cataas.com/cat/gif"
          alt="Random cat gif"
          loading="lazy"
          className="absolute top-0 left-0 h-96 w-96 z-20 rounded-md"
        />
        <div className="w-96 h-96 bg-yellow-800 rounded-md animate-pulse"></div>
      </div>
    </div>
  );
}
