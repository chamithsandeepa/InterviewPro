"use client";

import Image from "next/image";
import { Linkedin, Twitter, Globe } from "lucide-react";
import { motion } from "motion/react";

export default function Team() {
  return (
    <section id="team" className="bg-[#FAFDF7] py-24 font-inter">
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
            className="text-sm font-semibold text-[#0C0801]"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Team
          </motion.span>

          <motion.h2
            className="mt-3 font-sora text-[32px] font-semibold lg:text-[44px] text-black"
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
          {/* MEMBER 1 */}
          <motion.div
            className="text-center max-w-sm mx-auto"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -6 }}
          >
            <motion.div
              className="mx-auto h-20 w-20 overflow-hidden rounded-full"
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Image
                src="/user1.png"
                alt="Marcus Chen"
                width={80}
                height={80}
                className="object-cover"
              />
            </motion.div>

            <h3 className="mt-6 font-sora text-lg font-semibold text-black">
              Marcus Chen
            </h3>

            <p className="mt-1 text-sm text-gray-900">Software engineer</p>

            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Ten years building products. Guides students through technical
              interviews with clarity.
            </p>

            <div className="mt-6 flex justify-center gap-4">
              <motion.div whileHover={{ scale: 1.2 }}>
                <Linkedin className="h-5 w-5 text-black cursor-pointer" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }}>
                <Twitter className="h-5 w-5 text-black cursor-pointer" />
              </motion.div>
            </div>
          </motion.div>

          {/* MEMBER 2 */}
          <motion.div
            className="text-center max-w-sm mx-auto"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            whileHover={{ y: -6 }}
          >
            <motion.div
              className="mx-auto h-20 w-20 overflow-hidden rounded-full"
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Image
                src="/user2.png"
                alt="Priya Sharma"
                width={80}
                height={80}
                className="object-cover"
              />
            </motion.div>

            <h3 className="mt-6 font-sora text-lg font-semibold text-black">
              Priya Sharma
            </h3>

            <p className="mt-1 text-sm text-gray-900">HR manager</p>

            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Specializes in entry-level hiring. Knows what recruiters look for
              in your first role.
            </p>

            <div className="mt-6 flex justify-center gap-4">
              <motion.div whileHover={{ scale: 1.2 }}>
                <Linkedin className="h-5 w-5 text-black cursor-pointer" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }}>
                <Twitter className="h-5 w-5 text-black cursor-pointer" />
              </motion.div>
            </div>
          </motion.div>

          {/* MEMBER 3 */}
          <motion.div
            className="text-center max-w-sm mx-auto"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            whileHover={{ y: -6 }}
          >
            <motion.div
              className="mx-auto h-20 w-20 overflow-hidden rounded-full"
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Image
                src="/user3.png"
                alt="James Rivera"
                width={80}
                height={80}
                className="object-cover"
              />
            </motion.div>

            <h3 className="mt-6 font-sora text-lg font-semibold text-black">
              James Rivera
            </h3>

            <p className="mt-1 text-sm text-gray-900">UI/UX designer</p>

            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Portfolio expert. Helps students present their work in ways that
              land interviews.
            </p>

            <div className="mt-6 flex justify-center gap-4">
              <motion.div whileHover={{ scale: 1.2 }}>
                <Linkedin className="h-5 w-5 text-black cursor-pointer" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }}>
                <Twitter className="h-5 w-5 text-black cursor-pointer" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }}>
                <Globe className="h-5 w-5 text-black cursor-pointer" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
