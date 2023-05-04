"use client";
import React, { AnchorHTMLAttributes, ReactNode, forwardRef } from "react";
import { ROUTES } from "@/utils";
import Link from "next/link";

type TCardLinkProps = {
  href: ROUTES | string;
  children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const CardLink = forwardRef<HTMLAnchorElement, TCardLinkProps>(
  ({ href, children, ...rest }, ref) => (
    <Link
      ref={ref}
      {...rest}
      className="border-t border-t-zinc-200 py-2 hover:bg-zinc-100 transition-colors"
      href={href}
    >
      {children}
    </Link>
  )
);

CardLink.displayName = 'CardLink';

export default CardLink;
