import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

interface RoutingObj {
  locales: string[];
  defaultLocale: string;
}

export const routing: RoutingObj = defineRouting({
  locales: ["en", "fa"] as const,
  defaultLocale: "en",
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
