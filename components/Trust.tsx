"use client";

import { HandCoins, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

export default function Trust() {
  return (
    <section id="features" className="bg-[#FAFDF7] py-24 font-inter">
      <motion.div
        className="mx-auto max-w-7xl px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              ease: "easeOut",
              staggerChildren: 0.12,
            },
          },
        }}
      >
        {/* HEADER */}
        <motion.div
          className="text-center max-w-2xl mx-auto"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <motion.p
            className="text-sm font-semibold text-[#0C0801]"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Trust
          </motion.p>

          <motion.h2
            className="mt-3 font-sora text-[32px] font-semibold text-black lg:text-[44px]"
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Safe, Secure and Transparent
          </motion.h2>

          <motion.p
            className="mt-4 text-gray-800"
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Your privacy and peace of mind matter to us
          </motion.p>
        </motion.div>

        {/* CARDS */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 items-start">
          {/* CARD 1 – Tall */}
          <motion.div
            className="bg-[#9EE2E4] p-8 rounded-[15px]"
            style={{
              borderBottomRightRadius: "70px",
              animationDuration: "6s",
            }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -6, rotate: -0.5 }}
            animate={{ y: [0, -6, 0] }}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <HandCoins className="h-9 w-9 text-black stroke-[2.5]" />
            </motion.div>

            <p className="mt-8 text-sm font-medium text-black">
              No hidden costs, ever.
            </p>

            <h3 className="mt-3 font-sora text-[26px] font-bold text-black leading-[1.2]">
              CV review costs nothing
            </h3>

            <p className="mt-4 text-[15px] text-black/80 leading-relaxed">
              Upload and get honest feedback without any payment required
              upfront.
            </p>
          </motion.div>

          {/* CARD 2 – Short */}
          <motion.div
            className="bg-[#FCDA91] p-8 rounded-[15px]"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
            whileHover={{ y: -6, rotate: 0.5 }}
          >
            <p className="text-sm font-medium text-black">
              WhatsApp keeps it simple
            </p>

            <h3 className="mt-3 font-sora text-[26px] font-bold text-black leading-[1.2]">
              No complicated platforms.
            </h3>

            <p className="mt-4 text-[15px] text-black/80 leading-relaxed">
              We connect through WhatsApp, so you can talk and share files
              comfortably.
            </p>
          </motion.div>

          {/* CARD 3 – Tall */}
          <motion.div
            className="bg-[#BCB2FE] p-8 rounded-[15px]"
            style={{
              borderBottomRightRadius: "70px",
              animationDuration: "7s",
            }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            whileHover={{ y: -6, rotate: -0.5 }}
            animate={{ y: [0, -6, 0] }}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <ShieldCheck className="h-9 w-9 text-black stroke-[2.5]" />
            </motion.div>

            <p className="mt-8 text-sm font-medium text-black">
              Privacy Guaranteed
            </p>

            <h3 className="mt-3 font-sora text-[26px] font-bold text-black leading-[1.2]">
              Your CV stays private always
            </h3>

            <p className="mt-4 text-[15px] text-black/80 leading-relaxed">
              We never share your information without your explicit permission.
            </p>
          </motion.div>

          {/* CARD 4 – Short */}
          <motion.div
            className="bg-[#F99D83] p-8 rounded-[15px]"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            whileHover={{ y: -6, rotate: 0.5 }}
          >
            <p className="text-sm font-medium text-black">
              Verified Professionals
            </p>

            <h3 className="mt-3 font-sora text-[26px] font-bold text-black leading-[1.2]">
              Trusted experts only.
            </h3>

            <p className="mt-4 text-[15px] text-black/80 leading-relaxed">
              Every mentor is checked. You're working with real industry
              experience.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
