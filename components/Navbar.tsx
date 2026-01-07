"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

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
            <Image
              src="/logo.png"
              alt="InterviewPro Logo"
              width={180}
              height={60}
              className="h-16 w-auto object-contain cursor-pointer"
            />
          </Link>

          {/* Desktop */}
          <nav className="hidden lg:flex gap-8 font-medium">
            {links.map((link) => (
              <motion.div
                key={link.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={link.href} className="hover:text-[#8E81FC]">
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="tel:+94701134650"
              className="hidden lg:block rounded-lg bg-[#8E81FC] px-5 py-2 text-white text-sm"
            >
              Call Now
            </Link>
          </motion.div>

          {/* Mobile toggle */}
          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <motion.div
            className="lg:hidden bg-white border-t px-6 py-6 space-y-5"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {links.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block font-medium"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </header>

      {/* Spacer */}
      <div style={{ height: NAV_HEIGHT }} />
    </>
  );
}
