"use client";

import { FileText, MessageCircle, Laptop, MessagesSquare } from "lucide-react";
import { motion } from "motion/react";

export default function Process() {
  return (
    <section id="process" className="bg-[#FAFDF7] py-24">
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
        {/* Header */}
        <motion.div
          className="text-center"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <motion.span
            className="text-sm font-semibold text-[#0C0801]"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Our Process
          </motion.span>

          <motion.h2
            className="mt-3 text-[32px] font-semibold lg:text-[44px]"
            style={{ fontFamily: "var(--font-sora)" }}
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            How it works
          </motion.h2>

          <motion.p
            className="mt-3 text-gray-800"
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Three simple steps to interview readiness
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Step 1 */}
          <motion.div
            className="rounded-lg bg-linear-to-br from-[#FF7244] to-[#FF7D53] p-8 text-white"
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
              <MessagesSquare className="h-8 w-8" />
            </motion.div>

            <h3
              className="mt-6 text-[32px] font-semibold"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              Send <br />
              Your CV
            </h3>

            <p className="mt-3 text-white/90">
              Submit your CV through WhatsApp for a free initial review.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            className="rounded-lg bg-linear-to-br from-[#43AEC6] to-[#69D8E1] p-8 text-white"
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
              <MessageCircle className="h-8 w-8" />
            </motion.div>

            <h3
              className="mt-6 text-[32px] font-semibold"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              Connect via <br /> WhatsApp
            </h3>

            <p className="mt-3 text-white/90">
              Discuss interview requests and scheduling directly with our team.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            className="rounded-lg bg-linear-to-br from-[#6F5ED1] to-[#917FFE] p-8 text-white"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            whileHover={{ y: -6 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Laptop className="h-8 w-8" />
            </motion.div>

            <h3
              className="mt-6 text-[32px] font-semibold"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              Mock interview <br />
              and feedback
            </h3>

            <p className="mt-3 text-white/90">
              Attend your interview and receive clear, supportive guidance.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
