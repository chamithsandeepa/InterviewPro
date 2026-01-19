"use client";

import Image from "next/image";
import { MessageSquare, CreditCard } from "lucide-react";
import { motion } from "motion/react";

export default function Benefits() {
  const cards = [
    {
      type: "image",
      image: "/benefits1.png",
      title: "Build Unshakeable Confidence",
      titleColor: "text-[#FFB020]",
      desc: "Real-world practice without pressure.",
    },
    {
      type: "icon",
      bg: "bg-[#E6F4EA]",
      icon: <MessageSquare className="h-10 w-10 text-[#34A853]" />,
      title: "Instant Coordination",
      titleColor: "text-[#34A853]",
      desc: "Fast, familiar communication via WhatsApp.",
    },
    {
      type: "image",
      image: "/benefits2.png",
      title: "Actionable Insights",
      titleColor: "text-[#FFB020]",
      desc: "Feedback that actually gets you hired.",
    },
    {
      type: "icon",
      bg: "bg-[#F1ECFF]",
      icon: <CreditCard className="h-10 w-10 text-[#7C6CFF]" />,
      title: "Transparent Pricing",
      titleColor: "text-[#7C6CFF]",
      desc: "No hidden fees, simple payments.",
    },
  ];

  return (
    <section id="benefits" className="bg-[#FAFDF7] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            className="font-sora text-4xl lg:text-5xl font-semibold text-black mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Your Competitive Edge
          </motion.h2>

          <motion.p
            className="text-gray-600 text-[17px] font-inter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            What makes this platform different for your career
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {/* Top Section */}
              {card.type === "image" ? (
                <div className="relative h-70 w-full">
                  <Image
                    src={card.image!}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div
                  className={`h-70 w-full flex items-center justify-center ${card.bg}`}
                >
                  {card.icon}
                </div>
              )}

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3
                  className={`font-sora text-2xl font-semibold ${card.titleColor} mb-4 leading-snug`}
                >
                  {card.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mt-auto">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
