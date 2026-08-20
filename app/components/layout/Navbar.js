"use client";

import {useState} from "react";
import Link from "next/link";

const NAV_LINKS = [
  {label: "Home", href: "/"},
  {label: "About", href: "/about"},
  {label: "Academics", href: "/academics"},
  {label: "Admissions", href: "/admissions"},
  {label: "Research", href: "/research"},
  {label: "Student Life", href: "/student-life"},
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="border-b border-black/10 bg-white dark:border-white/10 dark:bg-black">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <Link href="/" className="text-lg font-bold text-zinc-900">
            AUE
          </Link>
          {/* desktop links -hidden on small screens */}
          <ul className="hidden gap-6 text-zinc-700 sm:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-blue-500">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
{/*Mobile menu button - hidden on large screens */}
            <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-sm font-medium text-zinc-700 sm:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </nav>
        {/* Mobile menu -only rendered when isMenuOpen is true */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <ul className="flex flex-col gap-4 p-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-blue-500">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    
  );
}