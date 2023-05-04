import { ROUTES } from "@/utils";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link
      href={ROUTES.home}
      className="text-xl font-thin flex items-baseline justify-center"
    >
      <div className="flex items-center justify-center border-b-2 border-amber-500">
        👻
      </div>
      <h1>
        <span className="border-b-2 border-b-teal-500">auth</span>
        <span className="border-b-2 border-b-red-500">Routes</span>
      </h1>
    </Link>
  );
}
