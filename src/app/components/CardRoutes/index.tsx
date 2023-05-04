// next-auth
import { getServerSession } from "next-auth";

// general-components
import { CardLink } from "@/components";

// utils
import { ROUTES } from "@/utils";

// ::
export default async function CardRoutes() {
  const session = await getServerSession();

  if (!session?.user)
    return (
      <p className="animate-leftSlide transition-colors prose border-t border-t-zinc-200 py-2 hover:bg-zinc-100">
        🍃 To check out the hidden routes around here, you gotta sign in to the app
        first.
      </p>
    );

  return (
    <div className="animate-leftSlide flex flex-col">
      <CardLink href={ROUTES.profile}>
        <div className="flex gap-2">
          🦝 <p>Your profile</p>
        </div>
      </CardLink>
      <CardLink href={ROUTES.about}>
        <div className="flex gap-2">
          🐸 <p>About the developer</p>
        </div>
      </CardLink>
      <CardLink href={ROUTES.kitty}>
        <div className="flex gap-2">
          🐱 <p>A random kitten gif</p>
        </div>
      </CardLink>
    </div>
  );
}
