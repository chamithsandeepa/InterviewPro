"use client";

import { motion } from "motion/react";
import { Facebook, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const linkscol1 = [
    { label: "Home", href: "#home" },
    { label: "Our Services", href: "#services" },
    { label: "Our Process", href: "#process" },
    { label: "Benefits", href: "#benefits" },
  ];

  const linkscol2 = [
    { label: "Our Team", href: "#team" },
    { label: "Features", href: "#features" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <footer className="bg-white py-20 font-inter">
      <div className="mx-auto max-w-7xl px-6">
        {/* DESKTOP VIEW */}
        <div className="hidden lg:grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Column 1 - Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-1"
          >
            <Image
              src="/logo.png"
              alt="InterviewPro Logo"
              width={180}
              height={60}
              className="h-10 w-auto object-contain mb-6"
            />

            <p className="text-[15px] font-medium text-[#0C0801] leading-relaxed max-w-xs">
              Practice your interview with real career experts
            </p>
          </motion.div>

          {/* Column 2 - Links Group 1 */}
          <motion.nav
            className="flex flex-col space-y-4 pt-2"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {linkscol1.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-[#0C0801] hover:text-gray-600 transition"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>

          {/* Column 3 - Links Group 2 */}
          <motion.nav
            className="flex flex-col space-y-4 pt-2"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {linkscol2.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-[#0C0801] hover:text-gray-600 transition"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>

          {/* Column 4 - Socials */}
          <motion.div
            className="flex gap-6 lg:justify-end items-start pt-2"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Facebook className="h-6 w-6 text-black" fill="currentColor" />
            </motion.a>

            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="h-6 w-6 text-black" fill="currentColor" />
            </motion.a>
          </motion.div>
        </div>

        {/* MOBILE VIEW */}
        <div className="block lg:hidden flex flex-col gap-10">
          {/* Logo & Description */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/logo.png"
              alt="InterviewPro Logo"
              width={160}
              height={60}
              className="h-10 w-auto object-contain mb-4"
            />
            <p className="text-[16px] text-gray-600 font-normal mt-2 max-w-xs mx-auto">
              Practice your interview with real career experts
            </p>
          </div>

          <div className="flex justify-between px-6">
             {/* Links Col 1 */}
             <div className="flex flex-col gap-3">
                 {linkscol1.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm font-semibold text-[#0C0801]"
                  >
                    {link.label}
                  </a>
                ))}
             </div>

              {/* Links Col 2 */}
             <div className="flex flex-col gap-3">
                 {linkscol2.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm font-semibold text-[#0C0801]"
                  >
                    {link.label}
                  </a>
                ))}
             </div>
          </div>

          {/* Socials */}
          <div className="flex justify-center gap-6">
            <a href="#" className="text-black">
               <Facebook className="h-6 w-6" fill="currentColor" />
            </a>
            <a href="#" className="text-black">
               <Linkedin className="h-6 w-6" fill="currentColor" />
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-[13px] text-gray-900 text-center font-medium">
            © 2025 Cenzios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
