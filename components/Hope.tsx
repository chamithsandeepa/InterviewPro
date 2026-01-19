"use client";

import { Wrench, MessageSquare, Mic, Zap } from "lucide-react";
import { motion } from "motion/react";

export default function Hope() {
  const cards = [
    {
      icon: <Wrench className="h-6 w-6 text-[#FF69B4]" />, // Pink Wrench
      bg: "bg-[#FFE4F0]", // distinct pink bg
      title: "Practice matter",
      desc: "Each mock interview builds your ability to think on your feet.",
    },
    {
      icon: <Mic className="h-6 w-6 text-[#3B82F6]" />, // Blue Mic
      bg: "bg-[#DBEAFE]", // blue bg
      title: "Communication",
      desc: "Improve clarity, confidence, and interview communication skills.",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-[#8B5CF6]" />, // Purple Message
      bg: "bg-[#EDE9FE]", // purple bg
      title: "Expert-led feedback",
      desc: "You'll understand exactly what to work on before the real thing.",
    },
    {
      icon: <Zap className="h-6 w-6 text-[#EAB308]" />, // Yellow Zap
      bg: "bg-[#FEF9C3]", // yellow bg
      title: "Boost your confidence",
      desc: "Practice with your prepared to confidently interview",
    },
  ];

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 244, 179, 0.05) 0%, rgba(188, 178, 254, 0.5) 85%, rgba(145, 127, 254, 0.5) 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            className="text-4xl md:text-5xl font-sora font-semibold leading-tight text-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Your next opportunity starts with preparation
          </motion.h2>
          <motion.p
            className="text-lg text-[#65636E] font-inter leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Expert mock interviews, CV feedback, and personalized guidance to
            help you communicate confidently and succeed.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-blue-100/50 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col items-start text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 + 0.3 }}
            >
              <div
                className={`w-12 h-12 rounded-xl ${card.bg} flex items-center justify-center mb-15 shrink-0`}
              >
                {card.icon}
              </div>
              <h3 className="text-xl font-bold font-sora text-black mb-3">
                {card.title}
              </h3>
              <p className="text-[15px] font-inter text-gray-600 leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
