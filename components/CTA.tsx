"use client";

import { motion } from "motion/react";

export default function CTA() {
  return (
    <section
      id="contact"
      className="bg-white py-32 font-inter overflow-hidden"
    >
      <div className="mx-auto max-w-4xl px-6">
        {/* DESKTOP VIEW */}
        <div className="hidden lg:block text-center">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Heading */}
            {/* <motion.h2
              className="font-sora text-[40px] md:text-[54px] font-bold text-black tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Start preparing today
            </motion.h2> */}

            <motion.h2
            className="text-4xl lg:text-6xl font-sora font-semibold text-black mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Start preparing today
          </motion.h2>

            {/* Subtext */}
            <motion.p
              className="mt-6 text-gray-800 text-sm md:text-lg"
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
                className="rounded-lg bg-[#917FFE] px-10 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-200"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 15px 35px rgba(59, 70, 241, 0.35)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Try Now
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* MOBILE VIEW */}
        <div className="block lg:hidden text-center px-4">
          <motion.div
            className="bg-[#8E81FC] rounded-[30px] p-10 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Heading */}
            <h2 className="font-sora text-[26px] font-bold text-white leading-tight">
              Start preparing today
            </h2>

            {/* Subtext */}
            <p className="mt-4 text-white/90 text-[14px] leading-relaxed font-medium">
              Real interviews aren&apos;t for practice. That&apos;s what we&apos;re here for.
            </p>

            {/* Button */}
            <div className="mt-8 flex justify-center">
              <motion.a
                href="tel:+94701134650"
                className="rounded-full bg-white px-10 py-3.5 text-[14px] font-bold text-[#8B7CFF] shadow-lg w-fit"
                whileTap={{ scale: 0.95 }}
              >
                Try Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
