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
            className="text-[30px] lg:text-5xl font-sora font-semibold text-black mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Your Competitive Edge
          </motion.h2>

          <motion.p
            className="text-gray-600 text-[13px] lg:text-[17px] font-inter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            What makes this platform different for your career
          </motion.p>
        </div>

        {/* Cards Grid */}
        {/* Desktop Cards Grid - Hidden on mobile */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

        {/* Mobile View - 2 Column Grid */}
        <div className="lg:hidden grid grid-cols-2 gap-4">
           {[cards[0], cards[1], cards[3], cards[2]].map((card, idx) => (
             <div key={idx} className="rounded-2xl overflow-hidden bg-white border border-gray-100 flex flex-col h-full shadow-sm">
                {/* Top Section */}
                {card.type === "image" ? (
                  <div className="relative h-32 w-full">
                    <Image
                      src={card.image!}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                   <div className={`h-32 w-full flex items-center justify-center ${card.bg}`}>
                      {/* Scale icon down for mobile */}
                      <div className="scale-75 transform">
                        {card.icon}
                      </div>
                   </div>
                )}
                
                {/* Content */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className={`font-sora text-[14px] font-bold ${card.titleColor} mb-2 leading-tight`}>
                    {card.title}
                  </h3>
                   <p className="text-[#6B7280] text-[10px] leading-relaxed mt-auto">
                    {card.desc}
                   </p>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
