import React from "react";

// ::
export default function loading() {
  return (
    <div className="animate-leftSlide flex flex-col gap-2">
      <div className="mb-5 bg-zinc-400 animate-pulse h-10 w-40" />
      {Array.from(Array(2)).map((item, key) => (
        <div
          key={`${item}-${key}`}
          className=" bg-zinc-300 animate-pulse h-5 w-full max-w-sm"
        />
      ))}
      <div className="mt-10 flex flex-col w-full">
        {Array.from(Array(3)).map((item, key) => (
          <div
            key={`${item}-${key}`}
            className="border-t border-t-zinc-200 h-10"
          >
            <div className="h-full w-full bg-zinc-100 animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
