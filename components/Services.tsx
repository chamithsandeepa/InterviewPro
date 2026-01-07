"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function Services() {
  return (
    <section id="services" className="bg-white py-24">
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
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <motion.span
            className="text-sm font-bold text-[#0C0801]"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Our Services
          </motion.span>

          <motion.h2
            className="mt-3 text-[32px] font-sora font-bold lg:text-[44px] text-black"
            style={{ fontFamily: "var(--font-sora)" }}
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            How we support your career
          </motion.h2>

          <motion.p
            className="mt-3 text-gray-800"
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Two ways to get started on your path forward
          </motion.p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* LEFT CARD - Free CV Review */}
          <motion.div
            className="overflow-hidden rounded-3xl bg-white border h-full flex flex-col"
            style={{
              borderColor: "#FFBD43",
              boxShadow: "0 4px 25px rgba(255, 189, 67, 0.4)",
            }}
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{
              y: -8,
              boxShadow: "0 10px 40px rgba(255, 189, 67, 0.6)",
            }}
          >
            <div className="relative w-full p-4 pb-0">
              <div className="relative overflow-hidden rounded-2xl w-full h-75 lg:h-87.5">
                <Image
                  src="/service1.png"
                  alt="CV Review"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="p-8 pt-6 grow flex flex-col">
              <h3
                className="text-[28px] font-bold text-black"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                <span className="text-[#FFBD43]">Free</span> CV review
              </h3>

              <p className="mt-4 text-[#0C0801] leading-relaxed">
                Upload your CV via WhatsApp and get personalized feedback
                completely free. Ideal for students and fresh graduates
                preparing for job or internship applications.
              </p>
            </div>
          </motion.div>

          {/* RIGHT CARD - Mock Interviews */}
          <motion.div
            className="overflow-hidden rounded-3xl bg-white border h-full flex flex-col"
            style={{
              borderColor: "#917FFE",
              boxShadow: "0 4px 25px rgba(145, 127, 254, 0.4)",
            }}
            variants={{
              hidden: { opacity: 0, x: 40 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{
              y: -8,
              boxShadow: "0 10px 40px rgba(145, 127, 254, 0.6)",
            }}
          >
            <div className="relative w-full p-4 pb-0">
              <div className="relative overflow-hidden rounded-2xl w-full h-75 lg:h-87.5">
                <Image
                  src="/service2.png"
                  alt="Mock Interview"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="p-8 pt-6 grow flex flex-col">
              <h3
                className="text-[28px] font-bold text-black"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                Mock interviews
              </h3>

              <p className="mt-4 text-[#0C0801] leading-relaxed">
                Practice real interview questions with industry experts. Book a
                one-on-one mock interview via WhatsApp and gain confidence with
                expert feedback.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
