"use client";

import Image from "next/image";
import { Wrench, MessageSquareWarning, Mic, Zap } from "lucide-react";
import { motion } from "motion/react";

export default function Hope() {
  const cards = [
    {
      icon: <Wrench className="h-6 w-6 text-[#3B82F6]" />,
      bg: "bg-[#DBEAFE]",
      title: "Practice matter",
      desc: "Each mock interview builds your ability to think on your feet.",
    },
    {
      icon: <Mic className="h-6 w-6 text-[#3B82F6]" />,
      bg: "bg-[#DBEAFE]",
      title: "Communication",
      desc: "Improve clarity, confidence, and interview communication skills.",
    },
    {
      icon: <MessageSquareWarning className="h-6 w-6 text-[#3B82F6]" />,
      bg: "bg-[#DBEAFE]",
      title: "Expert-led feedback",
      desc: "You'll understand exactly what to work on before the real thing.",
    },
    {
      icon: <Zap className="h-6 w-6 text-[#3B82F6]" />,
      bg: "bg-[#DBEAFE]",
      title: "Boost your confidence",
      desc: "Practice until you are prepared to confidently interview.",
    },
  ];

  return (
    <section className="bg-linear-to-b from-white to-[#E0D9FF] py-24 font-inter overflow-hidden relative">
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-gray-800 mb-2">Hope</p>
            <h2 className="text-4xl md:text-5xl font-sora font-bold leading-tight text-black">
              Your next opportunity starts with preparation
            </h2>
          </motion.div>
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-700 text-lg  leading-relaxed">
              Our service builds real interview confidence by connecting
              candidates with verified career experts for practical mock
              interviews, CV feedback, and personalized guidance helping them
              communicate better, reduce anxiety, and succeed in real job
              interviews
            </p>
          </motion.div>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT - ILLUSTRATION */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Floor Blob */}
            <div className="absolute bottom-0 w-[80%] h-12 bg-black/10 rounded-[100%] blur-xl" />
            <Image
              src="/hope.png"
              alt="Interview preparation illustration"
              width={600}
              height={500}
              className="relative z-10 w-full max-w-lg object-contain"
            />
          </motion.div>

          {/* RIGHT - CARDS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-300 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${card.bg} flex items-center justify-center mb-4`}
                >
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-black mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
