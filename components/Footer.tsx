"use client";

import { motion } from "motion/react";
import { Phone, Mail, Globe, Facebook, Linkedin } from "lucide-react";

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
    <footer className="bg-white border-t border-gray-200 py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2
              className="text-2xl font-semibold text-black"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Logo
            </h2>

            <p className="mt-4 text-sm text-gray-700">
              Practice your interview with real career experts
            </p>
          </motion.div>

          {/* Column 2 */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-black" />
              <a
                href="tel:+94701134650"
                className="text-sm text-gray-700 hover:text-black transition"
              >
                +94 70 113 4650
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
          </motion.div>

          {/* Column 3 */}
          <motion.nav
            className="space-y-3"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-sm text-gray-700 hover:text-black transition"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>

          {/* Column 4 */}
          <motion.div
            className="flex lg:justify-end"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            <div className="flex gap-4">
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook className="h-6 w-6 text-black" />
              </motion.a>

              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="h-6 w-6 text-black" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Copyright */}
        <motion.div
          className="mt-16 pt-8 border-t border-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <p className="text-sm text-gray-600 text-center md:text-left">
            © 2025 Cenzios. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
