"use client";

import Link from "next/link";
import { Phone, Mail, Globe, Facebook, Linkedin } from "lucide-react";

const NAV_HEIGHT = 80; // same as navbar

export default function Footer() {
  // Links for smooth scroll
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
    <footer className="bg-white border-t border-gray-200 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 - Logo & Description */}
          <div>
            <h2
              className="text-2xl font-semibold text-black"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Logo
            </h2>

            <p className="mt-4 text-sm text-gray-700">
              Practice your interview with real career experts
            </p>
          </div>

          {/* Column 2 - Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-black" />
              <a
                href="tel:+94711186028"
                className="text-sm text-gray-700 hover:text-black transition"
              >
                +94 71 118 6028
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-black" />
              <a
                href="mailto:info@cenzios.com"
                className="text-sm text-gray-700 hover:text-black transition"
              >
                info@cenzios.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Globe className="h-5 w-5 text-black" />
              <a
                href="https://www.cenzios.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-700 hover:text-black transition"
              >
                www.cenzios.com
              </a>
            </div>
          </div>

          {/* Column 3 - Navigation */}
          <nav className="space-y-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-sm text-gray-700 hover:text-black transition"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Column 4 - Social Media */}
          <div className="flex lg:justify-end">
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6 text-black hover:text-gray-600 transition" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6 text-black hover:text-gray-600 transition" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center md:text-left">
            © 2025 Cenzios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
