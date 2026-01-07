"use client";

import { MessageCircle, Laptop, MessagesSquare } from "lucide-react";
import { motion } from "motion/react";

export default function Process() {
  return (
    <section id="process" className="bg-[#FAFDF7] py-24 font-inter">
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
            Our Process
          </motion.span>

          <motion.h2
            className="mt-3 text-[32px] font-sora font-bold lg:text-[44px] text-black"
            style={{ fontFamily: "var(--font-sora)" }}
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            How it works
          </motion.h2>

          <motion.p
            className="mt-4 text-gray-700 font-medium"
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Three simple steps to interview readiness
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Step 1 - WhatsApp */}
          <motion.div
            className="bg-[#FF7F56] p-10 text-white min-h-85 flex flex-col justify-between"
            style={{
              borderTopLeftRadius: "120px",
              borderBottomRightRadius: "120px",
              borderTopRightRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -6, boxShadow: "0 10px 30px rgba(255, 127, 86, 0.4)" }}
          >
            <motion.div
               initial={{ scale: 0.8, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <MessageCircle className="h-10 w-10 text-white" strokeWidth={1.5} />
            </motion.div>

            <div>
              <h3
                className="text-[32px] leading-tight font-bold"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                Connect via <br /> WhatsApp
              </h3>
              <p className="mt-4 text-white/90 leading-relaxed font-medium">
                Submit your CV through WhatsApp for a free initial review.
              </p>
            </div>
          </motion.div>

           {/* Step 2 - CV */}
           <motion.div
            className="bg-[#4ECDC4] p-10 text-white min-h-85 rounded-xl flex flex-col justify-between"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            whileHover={{ y: -6, boxShadow: "0 10px 30px rgba(78, 205, 196, 0.4)" }}
          >
             <motion.div
               initial={{ scale: 0.8, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <MessagesSquare className="h-10 w-10 text-white" strokeWidth={1.5} />
            </motion.div>

            <div>
              <h3
                className="text-[32px] leading-tight font-bold"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                 Send Your cv <br />
                 Get Feedback
              </h3>
              <p className="mt-4 text-white/90 leading-relaxed font-medium">
                 Discuss interview requests and scheduling directly with our team
              </p>
            </div>
          </motion.div>

           {/* Step 3 - Mock */}
           <motion.div
            className="bg-[#9d8df1] p-10 text-white min-h-85 flex flex-col justify-between"
             style={{
              borderTopRightRadius: "120px",
              borderBottomLeftRadius: "120px",
              borderTopLeftRadius: "10px",
              borderBottomRightRadius: "10px",
            }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            whileHover={{ y: -6, boxShadow: "0 10px 30px rgba(157, 141, 241, 0.4)" }}
          >
             <motion.div
               initial={{ scale: 0.8, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Laptop className="h-10 w-10 text-white" strokeWidth={1.5} />
            </motion.div>

            <div>
              <h3
                className="text-[32px] leading-tight font-bold"
                 style={{ fontFamily: "var(--font-sora)" }}
              >
                Mock interview
              </h3>
              <p className="mt-4 text-white/90 leading-relaxed font-medium">
                Attend your interview and receive clear, supportive guidance
              </p>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
