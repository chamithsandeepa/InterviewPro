"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_HEIGHT = 80;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Our Services", href: "#services" },
    { label: "Our Process", href: "#process" },
    { label: "Benefits", href: "#benefits" },
    { label: "Our Team", href: "#team" },
    { label: "Features", href: "#features" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <>
      <header
        className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b"
        style={{ height: NAV_HEIGHT }}
      >
        <div className="mx-auto max-w-7xl px-6 h-full flex items-center justify-between font-inter">
          <Link href="#home">
            <h1 className="text-xl font-semibold">INTERVIEW</h1>
          </Link>

          {/* Desktop */}
          <nav className="hidden lg:flex gap-8 font-medium">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-[#8E81FC]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link
            href="#contact"
            className="hidden lg:block rounded-lg bg-[#8E81FC] px-5 py-2 text-white text-sm"
          >
            Call Now
          </Link>

          {/* Mobile toggle */}
          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden bg-white border-t px-6 py-6 space-y-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Spacer */}
      <div style={{ height: NAV_HEIGHT }} />
    </>
  );
}
