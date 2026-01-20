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
            className="text-[30px] lg:text-5xl font-sora font-semibold leading-tight text-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Your next opportunity starts with preparation
          </motion.h2>
          <motion.p
            className="text-[13px] lg:text-lg text-[#65636E] font-inter leading-relaxed"
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
        {/* Desktop Cards Grid */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

        {/* Mobile View Cards (Specific Order & Layout) */}
        <div className="flex flex-col gap-4 lg:hidden">
          {/* 1. Communication */}
          <MobileCard
            icon={<Mic className="h-6 w-6 text-[#3B82F6]" />}
            bg="bg-[#DBEAFE]"
            title="Communication"
            desc="Improve clarity, confidence, and interview communication skills."
            delay={0}
          />
          {/* 2. Expert-led feedback */}
          <MobileCard
            icon={<MessageSquare className="h-6 w-6 text-[#8B5CF6]" />}
            bg="bg-[#EDE9FE]"
            title="Expert-led feedback"
            desc="You’ll understand exactly what to work on before the real thing."
            delay={0.1}
          />
          {/* 3. Boost your confidence */}
          <MobileCard
            icon={<Zap className="h-6 w-6 text-[#EAB308]" />}
            bg="bg-[#FEF9C3]"
            title="Boost your confidence"
            desc="Practice with your prepared to confidently interview"
            delay={0.2}
          />
           {/* 4. Practice matter */}
           <MobileCard
            icon={<Wrench className="h-6 w-6 text-[#FF69B4]" />}
            bg="bg-[#FFE4F0]"
            title="Practice matter"
            desc="Each mock interview builds your ability to think on your feet."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}

function MobileCard({
  icon,
  bg,
  title,
  desc,
  delay,
}: {
  icon: React.ReactNode;
  bg: string;
  title: string;
  desc: string;
  delay: number;
}) {
  return (
    <motion.div
      className="bg-white p-5 rounded-[30px] border border-[#BFDBFE] flex items-center gap-5 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div
        className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center shrink-0`}
      >
        {icon}
      </div>
      <div>
        <h3 className="text-[16px] font-bold font-sora text-black mb-1">
          {title}
        </h3>
        <p className="text-[15px] font-inter text-gray-600 leading-snug">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}
