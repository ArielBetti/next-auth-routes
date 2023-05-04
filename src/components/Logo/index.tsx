import { ROUTES } from "@/utils";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link
      href={ROUTES.home}
      className="animate-leftSlide text-xl font-thin flex items-start justify-center"
    >
      <div className="border-b-2 border-amber-500">👻</div>
      <span className="border-b-2 border-b-teal-500">auth</span>
      <span className="border-b-2 border-b-red-500">Routes</span>
    </Link>
  );
}
