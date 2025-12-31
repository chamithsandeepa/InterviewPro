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
            Our Services
          </motion.span>

          <motion.h2
            className="mt-3 text-[32px] font-semibold lg:text-[44px]"
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
        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* LEFT CARD */}
          <motion.div
            className="overflow-hidden rounded-2xl border bg-white"
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="p-8">
              <span className="text-sm font-medium text-gray-500">Review</span>

              <h3
                className="mt-2 text-[32px] font-semibold"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                <span className="text-[#FFBD43]">Free</span> <br /> CV review
              </h3>

              <p className="mt-4 text-[#0C0801]">
                Upload your CV and receive personalized feedback at no cost.
                This service is designed for students, internship seekers, and
                fresh graduates who want to improve their CV before applying for
                jobs or internships. You can easily submit your CV via WhatsApp,
                and our team will guide you with practical tips to make your CV
                stand out to recruiters.
              </p>

              <motion.a
                href="https://wa.me/94701134650"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 inline-block rounded-lg border px-5 py-2 text-sm font-medium"
              >
                Get Free CV Feedback
              </motion.a>
            </div>

            <motion.div
              initial={{ scale: 1.05, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Image
                src="/service1.png"
                alt="CV Review"
                width={600}
                height={380}
                className="w-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            className="overflow-hidden rounded-2xl border bg-white"
            variants={{
              hidden: { opacity: 0, x: 40 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="p-8">
              <span className="text-sm font-medium text-gray-500">
                Interviews
              </span>

              <h3
                className="mt-2 text-[32px] font-semibold"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                Mock interviews with <br /> experts
              </h3>

              <p className="mt-4 text-[#0C0801]">
                Take the next step toward your dream job or internship by
                requesting a one-on-one mock interview with an experienced
                professional. Our team will help you schedule via WhatsApp,
                guide you through the process and payment details, and provide
                expert feedback so you can practice real questions and build
                confidence for your actual interviews.
              </p>

              <motion.a
                href="https://wa.me/94701134650"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 inline-block rounded-lg border px-5 py-2 text-sm font-medium"
              >
                Request Mock Interview
              </motion.a>
            </div>

            <motion.div
              initial={{ scale: 1.05, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Image
                src="/service2.png"
                alt="Mock Interview"
                width={600}
                height={380}
                className="w-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
