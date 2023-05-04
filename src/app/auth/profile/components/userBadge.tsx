"use client";
// next
import Image from "next/image";

// next-auth
import { useSession } from "next-auth/react";

// ::
export default async function UserBadge() {
  const { data: session } = useSession();

  return (
    <div className="flex gap-5 w-full sm:flex-nowrap flex-wrap">
      <div className="min-w-fit">
        <Image
          width={115}
          height={115}
          className="h-28 w-28 rounded-sm shadow-md border-4 border-yellow-400 border-b-8"
          src={session?.user?.image || ""}
          alt="User avatar image"
        />
      </div>
      <div className="flex flex-col w-full">
        <div className="p-2 border-t border-t-zinc-200 flex items-center justify-start">
          Name: {session?.user?.name}
        </div>
        <div className="p-2 border-t border-t-zinc-200 flex items-center justify-start">
          Email: {session?.user?.email}
        </div>
        <div className="p-2 border-t border-t-zinc-200 flex items-center justify-start">
          SessionId: {session?.user?.id}
        </div>
      </div>
    </div>
  );
}
