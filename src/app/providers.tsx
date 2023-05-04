"use client";
// next-auth
import { SessionProvider } from "next-auth/react";

// types
type Props = {
  children?: React.ReactNode;
};

// ::
export const NextAuthProvider = ({ children }: Props) => {
  return (
    <SessionProvider
      // Re-fetch session every 5 minutes
      refetchInterval={5 * 60}
      // Re-fetches session when window is focused
      refetchOnWindowFocus={false}
    >
      {children}
    </SessionProvider>
  );
};
