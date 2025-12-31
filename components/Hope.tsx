"use client";

import Image from "next/image";
import { Wrench, MessageSquareWarning } from "lucide-react";
import { motion } from "motion/react";

export default function Hope() {
  return (
    <section className="bg-[#FAFDF7] py-24 font-inter overflow-hidden">
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
        {/* TOP CONTENT */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* LEFT */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <motion.p
              className="text-sm font-medium text-gray-700"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Hope
            </motion.p>

            <motion.h2
              className="mt-4 font-sora text-[36px] font-semibold leading-tight text-black lg:text-[52px]"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Your next opportunity <br />
              starts with <br />
              preparation
            </motion.h2>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 40 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <motion.p
              className="text-gray-700 max-w-md"
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Feeling nervous before interviews is normal. With the right
              guidance and practice, you can turn uncertainty into confidence.
            </motion.p>

            {/* FEATURES */}
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* FEATURE 1 */}
              <motion.div
                className="flex flex-col gap-3"
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <Wrench className="h-8 w-8 text-black" />
                </motion.div>

                <div>
                  <h4 className="font-sora text-lg font-semibold text-black">
                    Practice matters
                  </h4>
                  <p className="mt-1 text-sm text-gray-600">
                    Each mock interview builds your ability to think on your
                    feet.
                  </p>
                </div>
              </motion.div>

              {/* FEATURE 2 */}
              <motion.div
                className="flex flex-col gap-3"
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, delay: 0.05 }}
              >
                <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <MessageSquareWarning className="h-8 w-8 text-black" />
                </motion.div>

                <div>
                  <h4 className="font-sora text-lg font-semibold text-black">
                    Feedback guides you
                  </h4>
                  <p className="mt-1 text-sm text-gray-600">
                    You'll understand exactly what to work on before the real
                    thing.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.a
              href="https://wa.me/94701134650"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block rounded-md border border-gray-300 px-6 py-3 text-sm font-medium text-black hover:bg-black hover:text-white transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Send CV &amp; Get Feedback
            </motion.a>
          </motion.div>
        </div>

        {/* IMAGE */}
        <motion.div
          className="mt-20 flex justify-center"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          animate={{ y: [0, -8, 0] }}
        >
          <Image
            src="/bro.png"
            alt="Interview illustration"
            width={620}
            height={420}
            className="w-full max-w-2xl object-contain"
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
