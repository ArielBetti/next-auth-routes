import Link from "next/link";
import CardRoutes from "./components/CardRoutes";

// ::
export default function IndexPage() {
  return (
    <div>
      <div className="flex flex-col gap-2 mb-5 prose">
        <h1 className="m-0">👻 Welcome!</h1>
        <p>
          This is an example site to demonstrate how to use{" "}
          <a
            className="decoration-2 decoration-teal-500 transition-colors font-semibold  bg-zinc-100 px-2 hover:bg-zinc-300"
            href="https://next-auth.js.org"
          >
            NextAuth.js
          </a>{" "}
          for authentication routes.
        </p>
      </div>
      <div className="max-w-[200px] mt-5 mb-10 ">
        <Link
          target="_blank"
          className="font-semibold flex items-center justify-center gap-2 p-2 rounded-md border-b-4 text-black bg-yellow-400 border-b-yellow-600"
          href="https://github.com/ArielBetti/next-auth-routes"
        >
          💾 Show me the code
        </Link>
      </div>
      {/** @ts-expect-error */}
      <CardRoutes />
    </div>
  );
}
