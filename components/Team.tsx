"use client";

import Image from "next/image";
import { Linkedin, Globe, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export default function Team() {
  const [activeIndex, setActiveIndex] = useState(0);

  const teamMembers = [
    {
      name: "Lahiru Sandeepa",
      role: "CEO & Co Founder @ Cenzios",
      desc: "Ten years building products. Guides students through technical interviews with clarity.",
      image: "/team1.png",
      linkedin: "#",
      x: "#",
      web: null,
    },
    {
      name: "Ruwinda Tharaka",
      role: "Solution Architect and Co founder @ cenzios",
      desc: "Specializes in entry-level hiring. Knows what recruiters look for in your first role.",
      image: "/team2.png",
      linkedin: "#",
      x: "#",
      web: null,
    },
    {
      name: "James Rivera",
      role: "UI/UX designer",
      desc: "Portfolio expert. Helps students present their work in ways that land interviews.",
      image: "/user3.png",
      linkedin: "#",
      x: "#",
      web: "#",
    },
  ];

  const handleDragEnd = (event: any, info: any) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -50 || velocity < -500) {
      // Swipe Left -> Next
      if (activeIndex < teamMembers.length - 1) {
        setActiveIndex(activeIndex + 1);
      }
    } else if (offset > 50 || velocity > 500) {
      // Swipe Right -> Prev
      if (activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
      }
    }
  };

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
          <motion.h2
            className="text-4xl lg:text-[44px] font-sora font-semibold text-black mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Meet Our Verified Career Professionals
          </motion.h2>

          {/* <motion.h2
            className="mt-3 font-sora text-[32px] md:text-[44px] font-bold text-black"
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Meet Our Verified Career Professionals
          </motion.h2> */}

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

        {/* DESKTOP GRID */}
        <div className="hidden lg:grid mt-16 grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              className="bg-white border border-gray-100 rounded-xl p-8 text-center shadow-sm"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
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
                  src={member.image}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </motion.div>

              <h3 className="font-sora text-xl font-bold text-black">
                {member.name}
              </h3>

              <p className="mt-1 text-sm font-medium text-gray-900">
                {member.role.includes("@") ? (
                  <>
                    {member.role.split("@")[0]} <br /> @{" "}
                    {member.role.split("@")[1]}
                  </>
                ) : (
                  member.role
                )}
              </p>

              <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                {member.desc}
              </p>

              <div className="mt-6 flex justify-center gap-4">
                {member.linkedin && (
                  <motion.a
                    href={member.linkedin}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-black hover:text-gray-600 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </motion.a>
                )}
                {member.x && (
                  <motion.a
                    href={member.x}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-black hover:text-gray-600 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </motion.a>
                )}
                {member.web && (
                  <motion.a
                    href={member.web}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-black hover:text-gray-600 transition-colors"
                  >
                    <Globe className="h-5 w-5" />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* MOBILE CAROUSEL */}
        <div className="block lg:hidden mt-12 overflow-hidden">
          <div className="relative min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                className="bg-white border text-center border-gray-200 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] mx-4 touch-pan-y"
              >
                <div className="mx-auto h-24 w-24 overflow-hidden rounded-full mb-4 pointer-events-none">
                  <Image
                    src={teamMembers[activeIndex].image}
                    alt={teamMembers[activeIndex].name}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>

                <h3 className="font-sora text-[20px] font-bold text-black mb-1">
                  {teamMembers[activeIndex].name}
                </h3>

                <p className="text-[14px] font-normal text-gray-900 mb-4">
                  {teamMembers[activeIndex].role}
                </p>

                <p className="text-[13px] text-gray-800 leading-relaxed mb-8">
                  {teamMembers[activeIndex].desc}
                </p>

                <div className="flex justify-center gap-6">
                  {teamMembers[activeIndex].linkedin && (
                    <a
                      href={teamMembers[activeIndex].linkedin}
                      className="text-black"
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                  )}
                  {teamMembers[activeIndex].x && (
                    <a href={teamMembers[activeIndex].x} className="text-black">
                      <X className="h-6 w-6" />
                    </a>
                  )}
                  {teamMembers[activeIndex].web && (
                    <a
                      href={teamMembers[activeIndex].web}
                      className="text-black"
                    >
                      <Globe className="h-6 w-6" />
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-6">
            {teamMembers.map((_, idx) => (
              <div
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-colors cursor-pointer ${
                  idx === activeIndex ? "bg-black" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
