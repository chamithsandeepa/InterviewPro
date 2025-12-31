"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#FAFDF7]">
      <motion.div
        className="mx-auto max-w-7xl px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
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
        {/* LEFT CONTENT */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <motion.h1
            className="font-sora font-semibold text-[42px] leading-tight lg:text-[68px]"
            style={{ fontFamily: "var(--font-sora)" }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Practice your <span className="text-[#FFBD43]">interview</span> with
            real career experts
          </motion.h1>

          <motion.p
            className="mt-6 max-w-lg text-lg text-gray-600"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Upload your CV, receive expert guidance, and practice interviews
            with confidence. You're not alone in this journey.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <motion.a
              href="https://wa.me/94701134650"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg bg-[#8E81FC] px-6 py-3 text-white text-sm font-medium"
            >
              Send CV on WhatsApp
            </motion.a>

            <motion.a
              href="https://wa.me/94701134650"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg border border-[#8E81FC] px-6 py-3 text-[#8E81FC] text-sm font-medium"
            >
              Request Mock Interview
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="relative flex justify-center">
          {/* Main Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/hero.png"
              alt="Hero"
              width={420}
              height={520}
              className="relative scale-110"
            />
          </motion.div>

          {/* Hat */}
          <motion.div
            className="absolute -left-30 top-30"
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image src="/hat.png" alt="Hat" width={320} height={120} />
          </motion.div>

          {/* Box */}
          <motion.div
            className="absolute -bottom-15 right-5"
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image src="/box.png" alt="Box" width={120} height={90} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
