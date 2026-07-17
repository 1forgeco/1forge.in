"use client";

import Link, { type LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

type TransitionLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    children: ReactNode;
  };

export function TransitionLink({ href, children, onClick, target, ...props }: TransitionLinkProps) {
  const router = useRouter();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented || target === "_blank" || event.metaKey || event.ctrlKey || event.shiftKey) return;

    const destination = typeof href === "string" ? href : href.pathname ?? "";
    if (!destination.startsWith("/") || destination.startsWith("//")) return;

    event.preventDefault();
    document.documentElement.classList.add("forge-route-leaving");
    window.setTimeout(() => {
      router.push(destination);
      window.setTimeout(() => document.documentElement.classList.remove("forge-route-leaving"), 320);
    }, 150);
  };

  return (
    <Link href={href} target={target} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
