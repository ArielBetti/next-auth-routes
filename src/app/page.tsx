import CardRoutes from "./components/CardRoutes";

// ::
export default function IndexPage() {
  return (
    <div>
      <div className="flex flex-col gap-2 mb-10 prose">
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
      {/** @ts-expect-error */}
      <CardRoutes />
    </div>
  );
}
