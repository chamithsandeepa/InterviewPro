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
          {/* <motion.span
            className="text-sm font-bold text-[#3B46F1] lg:text-[#0C0801]"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Our Process
          </motion.span> */}

          <motion.h2
            className="mt-3 text-[30px] font-sora font-semibold lg:text-[44px] text-black"
            style={{ fontFamily: "var(--font-sora)" }}
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            How it works
          </motion.h2>

          <motion.p
            className="mt-4 text-[13px] lg:text-base text-gray-700 font-medium"
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Three simple steps to interview readiness
          </motion.p>
        </motion.div>

        {/* DESKTOP VIEW */}
        <div className="hidden lg:grid grid-cols-1 gap-8 md:grid-cols-3">
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
                Connect for a <br /> Free Initial Review.
              </h3>
              <p className="mt-4 text-white/90 leading-relaxed font-medium">
                Submit your CV via WhatsApp for a complimentary, expert-led initial assessment.
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
                 Receive <br />
                 Actionable CV <br />
                 Feedback.
              </h3>
              <p className="mt-4 text-white/90 leading-relaxed font-medium">
                 Gain insights into what&apos;s missing. Optimize your CV to start securing more interview calls.
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
                Master the <br />
                Interview with a <br />
                Mock Session.
              </h3>
              <p className="mt-4 text-white/90 leading-relaxed font-medium">
                Identify areas for improvement through a realistic simulation. Learn the exact steps to get hired.
              </p>
            </div>
          </motion.div>
        </div>

        {/* MOBILE VIEW */}
        {/* MOBILE VIEW */}
        <div className="lg:hidden flex flex-col gap-4">
          {/* Step 1 - Connect */}
          <motion.div
            className="bg-gradient-to-r from-[#FF9A63] to-[#FFC853] p-6 text-white rounded-3xl flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-start gap-4 mb-3">
                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm shrink-0">
                  <MessageCircle className="h-6 w-6 text-white" strokeWidth={2} />
                </div>
                <h3
                  className="text-[18px] font-bold leading-tight pt-1"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  Connect for a Free <br/> Initial Review.
                </h3>
            </div>
            
            <p className="text-white/90 text-[12px] leading-relaxed font-medium">
              Submit your CV via WhatsApp for a complimentary, expert-led initial assessment.
            </p>
          </motion.div>

           {/* Step 2 - CV */}
           <motion.div
            className="bg-gradient-to-r from-[#4ECDC4] to-[#55E6D8] p-6 text-white rounded-3xl flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
             <div className="flex items-start gap-4 mb-3">
                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm shrink-0">
                  <MessagesSquare className="h-6 w-6 text-white" strokeWidth={2} />
                </div>

                <h3
                  className="text-[18px] font-bold leading-tight pt-1"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  Receive Actionable <br/> CV Feedback.
                </h3>
            </div>

            <p className="text-white/90 text-[12px] leading-relaxed font-medium">
               Gain insights into what&apos;s missing. Optimize your CV to start securing more interview calls.
            </p>
          </motion.div>

           {/* Step 3 - Mock */}
           <motion.div
            className="bg-gradient-to-r from-[#8B7CFF] to-[#B0A6FF] p-6 text-white rounded-3xl flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
             <div className="flex items-start gap-4 mb-3">
                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm shrink-0">
                  <Laptop className="h-6 w-6 text-white" strokeWidth={2} />
                </div>

                <h3
                  className="text-[18px] font-bold leading-tight pt-1"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  Master the Interview <br/> with a Mock Session.
                </h3>
            </div>

            <p className="text-white/90 text-[12px] leading-relaxed font-medium">
               Identify areas for improvement through a realistic simulation. Learn the exact steps to get hired.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
