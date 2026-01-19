"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#FAFDF7]">
      {/* CENTER ARROW */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-40 z-10 hidden lg:flex justify-center"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image src="/arrow.png" alt="Arrow" width={100} height={100} />
      </motion.div>

      <motion.div
        className="mx-auto max-w-7xl px-6 py-20" // Adjusted className for the main motion.div
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
        {/* DESKTOP VIEW */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
            >Practice your 
              <span className="text-[#FFBD43]"> interview</span>  with Us before the <span className="text-[#C6AAFF]"> interview</span>
            </motion.h1>

            <motion.p
              className="mt-6 max-w-xl text-[18px] text-black"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              For years, we’ve watched brilliant students fail job interviews, not
              because they weren't smart, but because they weren't prepared.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <motion.a
                href="https://wa.me/94701134650?text=I%20need%20to%20review%20my%20CV"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-lg bg-[#8E81FC] px-6 py-3 text-white text-sm font-medium"
              >
                Get a Free CV Review
              </motion.a>

              <motion.a
                href="https://wa.me/94701134650"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-lg border border-[#8E81FC] px-6 py-3 text-[#8E81FC] text-sm font-medium"
              >
                Book a Mock Interview
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
        </div>

        {/* MOBILE VIEW */}
        <div className="lg:hidden flex flex-col items-center text-left">
          {/* Header Text */}
          <motion.div
            className="w-full mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h1
               className="font-sora text-[32px] font-bold text-black leading-tight"
               style={{ fontFamily: "var(--font-sora)" }}
            >
              Practice your <br/>
              <span className="text-[#FFBD43]">interview</span> with real <br/>
              career experts
            </h1>
            <p className="mt-4 text-[14px] text-gray-600 leading-relaxed">
              Upload your CV, receive expert guidance, and practice interviews with confidence. You&apos;re not alone in this journey.
            </p>
          </motion.div>

          {/* Circular Image Section */}
          <div className="relative w-full aspect-square max-w-85 flex items-center justify-center mb-10">
            

            {/* Student Image */}
            <div className="absolute bottom-0 w-[85%] flex justify-center items-end overflow-hidden rounded-b-full h-[95%]">
               <Image
                src="/hero.png"
                alt="Hero Student"
                width={300}
                height={300}
                className="object-cover object-top h-full w-auto"
              />
            </div>

            {/* Floating Badge */}
            <motion.div
              className="absolute top-[20%] -left-2 bg-white rounded-xl shadow-lg p-3 flex items-center gap-3 z-20"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-[#00C2FF] p-2 rounded-lg">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <div className="text-left leading-tight">
                <p className="text-[14px] font-bold text-black">50+</p>
                <p className="text-[10px] text-gray-500 font-medium">Assisted Student</p>
              </div>
            </motion.div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col w-full gap-4 items-center">
            <motion.a
                href="https://wa.me/94701134650?text=I%20need%20to%20review%20my%20CV"
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.95 }}
                className="rounded-lg bg-[#8E81FC] px-8 py-3.5 text-white text-[15px] font-medium w-fit shadow-md shadow-indigo-200"
              >
                Get a Free CV Review
            </motion.a>

             <motion.a
                href="https://wa.me/94701134650"
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.95 }}
                className="rounded-lg border-[1.5px] border-[#8E81FC] px-8 py-3.5 text-[#8E81FC] text-[15px] font-medium w-fit"
              >
                Book a Mock Interview
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
