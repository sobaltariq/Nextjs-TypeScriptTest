"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between px-12 py-4">
      <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
        Home
      </Link>

      <Link
        className={`link ${pathname === "/about" ? "active" : ""}`}
        href="/about"
      >
        About
      </Link>

      <Link
        className={`link ${pathname === "/dashboard" ? "active" : ""}`}
        href="/dashboard"
      >
        Dashboard
      </Link>

      <Link
        className={`link ${pathname === "/contact" ? "active" : ""}`}
        href="/contact"
      >
        Contact
      </Link>

      <Link
        className={`link ${pathname === "/blogs" ? "active" : ""}`}
        href="/blogs"
      >
        Blogs
      </Link>
    </nav>
  );
}
