"use client";
import type { ReactNode } from "react";

// next
import { useRouter } from "next/navigation";

// ::
export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();

  return (
    <>
      <button
        className="animate-leftSlide decoration-2 decoration-blue-500 mb-5 font-thin text-sm border-b-2 border-b-red-500"
        onClick={() => router.back()}
      >
        Go back page
      </button>{" "}
      {children}
    </>
  );
}
