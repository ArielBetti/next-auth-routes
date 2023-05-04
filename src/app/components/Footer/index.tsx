import { Logo } from "@/components";

// ::
export default function Footer() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-zinc-50 flex items-center">
      <div className="py-2 container px-4 mx-auto flex items-center justify-start">
        <Logo />
      </div>
    </div>
  );
}
