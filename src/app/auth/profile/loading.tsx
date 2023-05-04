import React from "react";

// ::
export default function Loading() {
  return (
    <div className="animate-leftSlide w-full">
      <div className="flex sm:flex-nowrap flex-wrap gap-2 ">
        <div className="mb-5 bg-zinc-300 animate-pulse min-w-[115px] min-h-[115px] rounded-sm shaodw-md border-4 border-zinc-300 border-b-8" />
        <div className="flex flex-col w-full">
          {Array.from(Array(3)).map((item, key) => (
            <div
              key={`${item}-${key}`}
              className="border-t border-t-zinc-200 h-10 w-full"
            >
              <div className="h-full w-full bg-zinc-100 animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
