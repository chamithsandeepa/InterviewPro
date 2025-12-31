"use client";

import { motion } from "motion/react";

export default function CTA() {
  return (
    <section
      id="contact"
      className="bg-[#FAFDF7] py-28 font-inter overflow-hidden"
    >
      <motion.div
        className="mx-auto max-w-4xl px-6 text-center"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Heading */}
        <motion.h2
          className="font-sora text-[32px] font-semibold text-black lg:text-[44px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Start preparing today
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="mt-4 text-gray-700"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Your future self will thank you for taking this step now
        </motion.p>

        {/* Button */}
        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <motion.a
            href="tel:+94701134650"
            className="rounded-md bg-[#8E81FC] px-8 py-3 text-sm font-medium text-white shadow-md"
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 12px 30px rgba(142,129,252,0.45)",
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Contact Us
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
