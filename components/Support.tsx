"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function Support() {
  return (
    <section className="py-24 bg-[radial-gradient(circle_at_center,_#E6F4FE_0%,_#ffffff_60%)]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-sora font-semibold text-black mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            How we support your career
          </motion.h2>

          <motion.p
            className="text-gray-600 text-lg font-inter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Two ways to get started on your path forward
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* CV Review */}
          <motion.div
            className="relative bg-white rounded-3xl p-8 border border-blue-100 shadow-sm hover:shadow-md transition flex flex-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Free Badge */}
            <span className="absolute top-6 left-6 bg-[#FFB224] text-black font-bold px-4 py-1.5 rounded-lg text-base">
              Free
            </span>

            {/* Content Row */}
            <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
              {/* Image */}
              <div className="w-48 h-48 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                <Image
                  src="/sup1.png"
                  alt="CV Review"
                  width={170}
                  height={170}
                  className="object-contain"
                />
              </div>

              {/* Text */}
              <div className="text-left">
                <h3 className="text-2xl font-sora font-semibold text-black mb-6">
                  CV Review
                </h3>

                <p className="text-gray-600 font-inter leading-relaxed">
                  Upload your CV via WhatsApp and get personalized feedback
                  completely free. Ideal for students and fresh graduates
                  preparing for job or internship applications.
                </p>
              </div>
            </div>

            {/* Button at bottom */}
            <button className="mt-auto w-full border-2 border-[#10B981] text-[#10B981] font-semibold py-3 rounded-xl hover:bg-green-50 transition">
              Submit Your CV Now
            </button>
          </motion.div>

          {/* Master Interviews */}
          <motion.div
            className="bg-white rounded-3xl p-8 border border-blue-100 shadow-sm hover:shadow-md transition flex flex-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Content Row */}
            <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
              {/* Image */}
              <div className="w-48 h-48 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                <Image
                  src="/sup2.png"
                  alt="Master Interviews"
                  width={170}
                  height={170}
                  className="object-contain"
                />
              </div>

              {/* Text */}
              <div className="text-left">
                <h3 className="text-2xl font-sora font-semibold text-black mb-6">
                  Master your <br /> Interviews
                </h3>

                <p className="text-gray-600 font-inter leading-relaxed">
                  Practice real interview questions with industry experts. Book a
                  one-on-one mock interview via WhatsApp and gain confidence with
                  expert feedback.
                </p>
              </div>
            </div>

            {/* Button at bottom */}
            <button className="mt-auto w-full bg-[#10A37F] text-white font-semibold py-3 rounded-xl hover:bg-[#0D8A6A] transition shadow-lg shadow-green-200">
              Get Started
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
