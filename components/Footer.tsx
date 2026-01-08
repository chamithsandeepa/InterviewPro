"use client";

import { motion } from "motion/react";
import { Phone, Mail, Globe, Facebook, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
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
    <footer className="bg-gradient-to-b from-[#FFF0EC] to-[#C8BFFF] py-20 overflow-hidden font-inter">
      <div className="mx-auto max-w-7xl px-6">
        {/* DESKTOP VIEW */}
        <div className="hidden lg:grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Column 1 - Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-1 lg:col-span-1"
          >
            <Image
              src="/logo.png"
              alt="InterviewPro Logo"
              width={180}
              height={60}
              className="h-14 w-auto object-contain mb-6"
            />

            <p className="text-base font-medium text-[#0C0801] leading-relaxed max-w-xs">
              Practice your interview with real career experts
            </p>
          </motion.div>

          {/* Column 2 - Contact Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-black" fill="currentColor" />
              <a
                href="tel:+94701134650"
                className="text-sm font-medium text-[#0C0801] hover:text-gray-700 transition"
              >
                +94 70 113 4650
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-black" fill="currentColor" />
              <a
                href="mailto:info@cenzios.com"
                className="text-sm font-medium text-[#0C0801] hover:text-gray-700 transition"
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
                className="text-sm font-medium text-[#0C0801] hover:text-gray-700 transition"
                style={{ textDecoration: "underline" }}
              >
                www.cenzios.com
              </a>
            </div>
          </motion.div>

          {/* Column 3 - Links */}
          <motion.nav
            className="flex flex-col space-y-3"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#0C0801] hover:text-gray-700 transition"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>

          {/* Column 4 - Socials */}
          <motion.div
            className="flex gap-4 lg:justify-end items-start"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.55 }}
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
        <div className="block lg:hidden flex flex-col items-center text-center">
          {/* Logo & Description */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="mb-8 flex flex-col items-center"
          >
            <Image
              src="/logo.png"
              alt="InterviewPro Logo"
              width={200}
              height={70}
              className="h-16 w-auto object-contain mb-6"
            />
            <p className="text-[17px] font-medium text-[#0C0801] leading-snug px-4">
              Practice your interview with real career experts
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.nav
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="flex flex-col gap-4 mb-10"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[15px] font-medium text-[#0C0801]"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>

          {/* Contact Info */}
           <motion.div
            className="flex flex-col gap-4 items-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-black" fill="currentColor" />
              <a
                href="tel:+94701134650"
                className="text-[15px] font-medium text-[#0C0801]"
              >
                +94 70 113 4650
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-black" fill="currentColor" />
              <a
                href="mailto:info@cenzios.com"
                className="text-[15px] font-medium text-[#0C0801]"
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
                className="text-[15px] font-medium text-[#0C0801] underline decoration-1 underline-offset-4"
              >
                www.cenzios.com
              </a>
            </div>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex gap-8 justify-center items-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black"
            >
              <Facebook className="h-7 w-7" fill="currentColor" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black"
            >
              <Linkedin className="h-7 w-7" fill="currentColor" />
            </a>
          </motion.div>
        </div>

        {/* Bottom Copyright */}
        <motion.div
          className="mt-20 pt-8 border-t border-black/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <p className="text-sm font-medium text-[#0C0801] text-center">
            © 2025 Cenzios. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
