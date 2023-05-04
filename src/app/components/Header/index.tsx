// next
import Link from "next/link";
import Image from "next/image";

// next auth
import { getServerSession } from "next-auth/next";

// server-side components
import ActionButton from "../ActionButton";

// general-components
import { Logo } from "@/components";

// utils
import { ROUTES } from "@/utils";

// ::
export default async function Header() {
  const session = await getServerSession();

  return (
    <header className="z-50 shadow-md fixed top-0 left-0 w-full bg-zinc-50/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 flex gap-2 items-center py-2 justify-between">
        {session?.user ? (
          <>
            <div className="flex gap-3">
              {session.user.image && (
                <Link href={ROUTES.home}>
                  <Image
                    width={60}
                    height={60}
                    src={session.user.image}
                    alt="User image"
                    className="w-12 h-12 rounded-full shadow-md object-cover"
                  />
                </Link>
              )}
              <div className="flex flex-col">
                <p className="text-sm m-0 p-0 font-thin">Signed in as</p>
                <p className="font-semibold">
                  {session.user.email ?? session.user.name}
                </p>
              </div>
            </div>
          </>
        ) : (
          <Logo />
        )}
        <ActionButton type={!!session?.user ? "signOut" : "signIn"} />
      </div>
    </header>
  );
}
