"use client";

import Image from "next/image";
import { Speech, MoveHorizontal } from "lucide-react";
import { motion } from "motion/react";

export default function Benefits() {
  return (
    <section id="benefits" className="bg-white py-24 font-inter">
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
            className="text-sm font-semibold text-[#0C0801]"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Benefits
          </motion.p>

          <motion.h2
            className="mt-3 font-sora text-4xl lg:text-5xl font-semibold text-black"
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
          {/* LEFT TALL CARD */}
          <motion.div
            className="lg:row-span-2 border rounded-lg overflow-hidden"
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ y: -4 }}
          >
            <div className="p-8">
              <p className="text-[16px] font-semibold text-[#0C0801]">
                Confidence
              </p>

              <h3 className="mt-3 font-sora text-[32px] font-semibold text-black leading-tight">
                Boost your <br /> confidence
              </h3>

              <p className="mt-3 text-sm text-[#0C0801]">
                Practice without pressure in a friendly environment
              </p>
            </div>

            <motion.div
              className="relative h-100 w-full mt-10"
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

          {/* RIGHT TOP WIDE CARD */}
          <motion.div
            className="lg:col-span-2 border rounded-lg overflow-hidden relative"
            variants={{
              hidden: { opacity: 0, x: 40 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ y: -4 }}
          >
            <div className="p-8 max-w-md">
              <p className="text-[16px] font-semibold text-[#0C0801]">
                Expertise
              </p>

              <h3 className="mt-3 font-sora text-[32px] font-semibold text-black">
                Expert-led <br /> feedback
              </h3>

              <p className="mt-3 text-sm text-[#0C0801]">
                Understand what interviewers really expect
              </p>
            </div>

            <motion.div
              className="absolute right-0 bottom-0 h-full w-1/2"
              initial={{ scale: 1.05, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Image
                src="/benefits2.png"
                alt="Expert feedback"
                fill
                className="object-cover object-right"
              />
            </motion.div>
          </motion.div>

          {/* BOTTOM LEFT BOX */}
          <motion.div
            className="border rounded-lg p-8"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -6 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Speech className="h-8 w-8 text-black" />
            </motion.div>

            <h4 className="mt-4 font-sora text-[32px] font-semibold text-black">
              Communication
            </h4>

            <p className="mt-3 text-sm text-gray-500">
              Easy WhatsApp communication
            </p>

            <p className="mt-4 text-sm text-[#0C0801]">
              No complicated systems, just simple, fast, and familiar.
            </p>
          </motion.div>

          {/* BOTTOM RIGHT BOX */}
          <motion.div
            className="border rounded-lg p-8"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            whileHover={{ y: -6 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <MoveHorizontal className="h-8 w-8 text-black" />
            </motion.div>

            <h4 className="mt-4 font-sora text-[32px] font-semibold text-black">
              Affordable
            </h4>

            <p className="mt-3 text-sm text-gray-500">
              Affordable & Transparent
            </p>

            <p className="mt-4 text-sm text-[#0C0801]">
              Payment details for mock interviews are clearly discussed via
              WhatsApp before confirmation.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
