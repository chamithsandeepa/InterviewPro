"use client";

import Image from "next/image";
import { Users, ArrowLeftRight } from "lucide-react";
import { motion } from "motion/react";

export default function Benefits() {
  return (
    <section id="benefits" className="bg-[#FAFDF7] py-24 font-inter">
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
              staggerChildren: 0.15,
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
            className="text-sm font-bold text-[#0C0801]"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Benefits
          </motion.p>

          <motion.h2
            className="mt-3 font-sora text-4xl lg:text-[44px] font-bold text-black"
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Why This Helps You
          </motion.h2>

          <motion.p
            className="mt-4 text-gray-800"
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            What makes this platform different for your career
          </motion.p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT TALL CARD - Confidence */}
          <motion.div
            className="lg:row-span-2 bg-white border border-gray-300 rounded-xl overflow-hidden flex flex-col justify-between"
            style={{ boxShadow: "0 10px 40px -10px rgba(0,0,0,0.4)" }}
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ y: -4, boxShadow: "0 20px 50px -10px rgba(0,0,0,0.6)" }}
          >
            <div className="p-8">
              <p className="text-[16px] font-bold text-[#0C0801]">
                Confidence
              </p>

              <h3 className="mt-2 font-sora text-[32px] font-bold text-[#FFBD43] leading-tight">
                Boost your <br /> confidence
              </h3>

              <p className="mt-4 text-sm text-[#0C0801] leading-relaxed">
                Practice without pressure in a friendly environment
              </p>
            </div>

            <motion.div
              className="relative w-full aspect-4/3 mt-auto"
              initial={{ scale: 1.05, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Image
                src="/benefits1.png"
                alt="Confidence"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* RIGHT TOP WIDE CARD - Expertise */}
          <motion.div
            className="lg:col-span-2 bg-white border border-gray-300 rounded-xl overflow-hidden relative flex flex-col md:flex-row"
            style={{ boxShadow: "0 10px 40px -10px rgba(0,0,0,0.5)" }}
            variants={{
              hidden: { opacity: 0, x: 40 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ y: -4, boxShadow: "0 20px 50px -10px rgba(0,0,0,0.6)" }}
          >
            <div className="p-8 w-full md:w-1/2 z-10">
              <p className="text-[16px] font-bold text-[#0C0801]">
                Expertise
              </p>

              <h3 className="mt-2 font-sora text-[32px] font-bold text-[#FFBD43] leading-tight">
                Expert-led <br /> feedback
              </h3>

              <p className="mt-4 text-sm text-[#0C0801] leading-relaxed">
                Understand what interviewers really expect
              </p>
            </div>

            <motion.div
              className="relative w-full md:w-1/2 h-64 md:h-auto"
              initial={{ scale: 1.05, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Image
                src="/benefits2.png"
                alt="Expert feedback"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* BOTTOM LEFT BOX - Communication */}
          <motion.div
            className="bg-white border border-gray-300 rounded-xl p-8"
            style={{ boxShadow: "0 10px 40px -10px rgba(0,0,0,0.5)" }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -6, boxShadow: "0 20px 50px -10px rgba(0,0,0,0.6)" }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Users className="h-8 w-8 text-black" />
            </motion.div>

            <h4 className="mt-4 font-sora text-[28px] font-bold text-[#FFBD43]">
              Communication
            </h4>

            <p className="mt-2 text-sm font-semibold text-black">
              Easy WhatsApp communication
            </p>

            <p className="mt-3 text-sm text-[#0C0801] leading-relaxed">
              No complicated systems, just simple, fast, and familiar.
            </p>
          </motion.div>

          {/* BOTTOM RIGHT BOX - Affordable */}
          <motion.div
            className="bg-white border border-gray-300 rounded-xl p-8"
            style={{ boxShadow: "0 10px 40px -10px rgba(0,0,0,0.5)" }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            whileHover={{ y: -6, boxShadow: "0 20px 50px -10px rgba(0,0,0,0.6)" }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <ArrowLeftRight className="h-8 w-8 text-black" />
            </motion.div>

            <h4 className="mt-4 font-sora text-[28px] font-bold text-[#FFBD43]">
              Affordable
            </h4>

            <p className="mt-2 text-sm font-semibold text-black">
              Affordable & Transparent
            </p>

            <p className="mt-3 text-sm text-[#0C0801] leading-relaxed">
              Payment details for mock interviews are clearly discussed via
              WhatsApp before confirmation.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
