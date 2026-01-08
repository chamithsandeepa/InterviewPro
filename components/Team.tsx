"use client";

import Image from "next/image";
import { Linkedin, Globe, X } from "lucide-react";
import { motion } from "motion/react";

export default function Team() {
  return (
    <section id="team" className="bg-white py-24 font-inter">
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
          <motion.span
            className="text-sm font-bold text-[#0C0801]"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Team
          </motion.span>

          <motion.h2
            className="mt-3 font-sora text-[32px] md:text-[44px] font-bold text-black"
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Meet Our Verified Career Professionals
          </motion.h2>

          <motion.p
            className="mt-4 text-gray-800"
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Real industry experts who understand your path forward
          </motion.p>
        </motion.div>

        {/* TEAM GRID */}
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* MEMBER 1 - Lahiru */}
          <motion.div
            className="bg-white border border-gray-100 rounded-xl p-8 text-center shadow-sm"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -6, boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}
          >
            <motion.div
              className="mx-auto h-24 w-24 overflow-hidden rounded-full mb-6"
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Image
                src="/team1.png"
                alt="Lahiru Sandeepa"
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </motion.div>

            <h3 className="font-sora text-xl font-bold text-black">
              Lahiru Sandeepa
            </h3>

            <p className="mt-1 text-sm font-medium text-gray-900">
              CEO & Co Founder @ Cenzios
            </p>

            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Ten years building products. Guides students through technical
              interviews with clarity.
            </p>

            <div className="mt-6 flex justify-center gap-4">
              <motion.a 
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-black hover:text-gray-600 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-black hover:text-gray-600 transition-colors"
              >
                <X className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* MEMBER 2 - Ruwinda */}
          <motion.div
            className="bg-white border border-gray-100 rounded-xl p-8 text-center shadow-sm"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            whileHover={{ y: -6, boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}
          >
            <motion.div
              className="mx-auto h-24 w-24 overflow-hidden rounded-full mb-6"
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Image
                src="/team2.png"
                alt="Ruwinda Tharaka"
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </motion.div>

            <h3 className="font-sora text-xl font-bold text-black">
              Ruwinda Tharaka
            </h3>

            <p className="mt-1 text-sm font-medium text-gray-900">
              Solution Architect and Co founder <br/> @ cenzios
            </p>

            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Specializes in entry-level hiring. Knows what recruiters look for
              in your first role.
            </p>

            <div className="mt-6 flex justify-center gap-4">
              <motion.a 
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-black hover:text-gray-600 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-black hover:text-gray-600 transition-colors"
              >
                <X className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* MEMBER 3 - James */}
          <motion.div
            className="bg-white border border-gray-100 rounded-xl p-8 text-center shadow-sm"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            whileHover={{ y: -6, boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}
          >
            <motion.div
              className="mx-auto h-24 w-24 overflow-hidden rounded-full mb-6"
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Image
                src="/user3.png"
                alt="James Rivera"
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </motion.div>

            <h3 className="font-sora text-xl font-bold text-black">
              James Rivera
            </h3>

            <p className="mt-1 text-sm font-medium text-gray-900">
              UI/UX designer
            </p>

            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Portfolio expert. Helps students present their work in ways that
              land interviews.
            </p>

            <div className="mt-6 flex justify-center gap-4">
              <motion.a 
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-black hover:text-gray-600 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-black hover:text-gray-600 transition-colors"
              >
                <X className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-black hover:text-gray-600 transition-colors"
              >
                <Globe className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
