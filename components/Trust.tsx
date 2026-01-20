"use client";

import { HandCoins, ShieldCheck, Mail, Users } from "lucide-react";
import { motion } from "motion/react";

export default function Trust() {
  const cards = [
    {
      bg: "bg-[#A3E4E6]", // Pastal Cyan/Teal
      icon: <HandCoins className="h-8 w-8 text-black stroke-[1.5]" />,
      preTitle: "No hidden costs, ever.",
      title: "CV review costs nothing",
      desc: "Upload and get honest feedback without any payment required upfront.",
      radius: "rounded-[32px] rounded-br-[8px]", // Asymmetric based on previous, or simple rounded? User asked to "look like this given image". The image shows rounded-bl [large] for card 1. Let's stick to uniform simple 'rounded-3xl' first as it fits "look like this". Actually let's just use standard rounded-3xl for all.
    },
    {
      bg: "bg-[#FDE49E]", // Pastel Yellow
      icon: <Mail className="h-8 w-8 text-black stroke-[1.5]" />, // Using Mail icon for "WhatsApp" concept/simple msg
      preTitle: "WhatsApp keeps it simple",
      title: "No complicated platforms.",
      desc: "We connect through WhatsApp, so you can talk and share files comfortably.",
    },
    {
      bg: "bg-[#C8C2FC]", // Pastel Purple
      icon: <ShieldCheck className="h-8 w-8 text-black stroke-[1.5]" />,
      preTitle: "Privacy Guaranteed",
      title: "Your CV stays private always",
      desc: "We never share your information without your explicit permission.",
    },
    {
      bg: "bg-[#FCAE95]", // Pastel Coral
      icon: <Users className="h-8 w-8 text-black stroke-[1.5]" />,
      preTitle: "Verified Professionals",
      title: "Trusted experts only.",
      desc: "Every mentor is checked. You're working with real industry experience.",
    },
  ];

  return (
    <section id="features" className="bg-[#FAFDF7] py-24 font-inter">
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* <motion.h2
            className="font-sora text-4xl lg:text-5xl font-bold text-black mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Safe, Secure and Transparent
          </motion.h2> */}

          <motion.h2
            className="text-[30px] lg:text-[44px] font-sora font-semibold text-black mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Safe, Secure and Transparent
          </motion.h2>

          <motion.p
            className="text-gray-600 text-[13px] lg:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Your privacy and peace of mind matter to us
          </motion.p>
        </div>

        {/* CARDS GRID */}
        {/* DESKTOP VIEW */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              className={`${card.bg} p-8 rounded-2xl rounded-br-[80px] flex flex-col items-start h-full`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className="mb-6">{card.icon}</div>

              <p className="text-sm font-bold text-black mb-2">
                {card.preTitle}
              </p>

              <h3 className="font-sora text-2xl font-bold text-black leading-tight mb-4">
                {card.title}
              </h3>

              <p className="text-black/80 text-[15px] leading-relaxed mt-auto">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* MOBILE VIEW */}
        <div className="lg:hidden flex flex-col gap-4">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`${card.bg} p-6 rounded-2xl flex flex-col items-start`}
            >
              <div className="mb-4 text-black">{card.icon}</div>

              <h3 className="font-sora text-[18px] font-bold text-black leading-tight mb-2">
                {card.title}
              </h3>

              <p className="text-black/80 text-[12px] leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
