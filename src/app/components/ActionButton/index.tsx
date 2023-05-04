"use client";
import { useState } from "react";
import clsx from "clsx";

// next-auth
import { signIn, signOut } from "next-auth/react";

// general-components
import { LoadingStatus } from "@/components";

// types
type TActionProps = {
  type: "signIn" | "signOut";
};

// ::
export default function ActionButton({ type }: TActionProps) {
  const [hasLoading, setHasLoading] = useState(false);
  const handleClickActionButton = () => {
    setHasLoading(true);
    type === "signIn" ? signIn("github") : signOut();
  };

  return (
    <button
      onClick={handleClickActionButton}
      className={clsx(
        "flex items-center justify-center gap-2 p-2 rounded-md border-b-4 text-white",
        type === "signIn"
          ? "bg-teal-500 border-b-teal-700"
          : "bg-red-500 border-b-red-700"
      )}
    >
      {hasLoading && <LoadingStatus />}
      {type === "signIn" ? "Sign In" : "Sign out"}
    </button>
  );
}
