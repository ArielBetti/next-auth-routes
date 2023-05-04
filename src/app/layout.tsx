import type { ReactNode } from "react";

// tailwind:css
import "./globals.css";

// server-side:components
import { Header, Footer } from "./components";

// providers
import { NextAuthProvider } from "./providers";

// ::
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head></head>
      <body className="bg-white container mx-auto px-4 py-24 min-h-screen min-w-screen">
        <NextAuthProvider>
          {/** @ts-expect-error */}
          <Header />
          <main>{children}</main>
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}
