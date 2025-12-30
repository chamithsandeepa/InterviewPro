import Image from "next/image";
import { Users, ArrowLeftRight, MoveHorizontal, Speech } from "lucide-react";

export default function Benefits() {
  return (
    <section id="benefits" className="bg-white py-24 font-inter">
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-[#0C0801]">Benefits</p>

          <h2 className="mt-3 font-sora text-4xl lg:text-5xl font-semibold text-black">
            Why This Helps You
          </h2>

          <p className="mt-4 text-gray-800">
            What makes this platform different for your career
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT TALL CARD */}
          <div className="lg:row-span-2 border rounded-lg overflow-hidden">
            <div className="p-8">
              <p className="text-[16px] font-semibold text-[#0C0801]">
                Confidence
              </p>

              <h3 className="mt-3 font-sora text-[32px] font-semibold text-black leading-tight">
                Boost your <br /> confidence
              </h3>

              <p className="mt-3 text-sm text-[#0C0801]">
                Practice without pressure in a friendly environment
              </p>
            </div>

            <div className="relative h-100 w-full mt-10">
              <Image
                src="/benefits1.png"
                alt="Confidence"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT TOP WIDE CARD */}
          <div className="lg:col-span-2 border rounded-lg overflow-hidden relative">
            <div className="p-8 max-w-md">
              <p className="text-[16px] font-semibold text-[#0C0801]">
                Expertise
              </p>

              <h3 className="mt-3 font-sora text-[32px] font-semibold text-black">
                Expert-led <br /> feedback
              </h3>

              <p className="mt-3 text-sm text-[#0C0801]">
                Understand what interviewers really expect
              </p>
            </div>

            <div className="absolute right-0 bottom-0 h-full w-1/2">
              <Image
                src="/benefits2.png"
                alt="Expert feedback"
                fill
                className="object-cover object-right"
              />
            </div>
          </div>

          {/* BOTTOM LEFT BOX */}
          <div className="border rounded-lg p-8">
            <Speech className="h-8 w-8 text-black" />

            <h4 className="mt-4 font-sora text-[32px] font-semibold text-black">
              Communication
            </h4>

            <p className="mt-3 text-sm text-gray-500">
              Easy WhatsApp communication
            </p>

            <p className="mt-4 text-sm text-[#0C0801]">
              No complicated systems, just simple, fast, and familiar.
            </p>
          </div>

          {/* BOTTOM RIGHT BOX */}
          <div className="border rounded-lg p-8">
            <MoveHorizontal className="h-8 w-8 text-black" />

            <h4 className="mt-4 font-sora text-[32px] font-semibold text-black">
              Affordable
            </h4>

            <p className="mt-3 text-sm text-gray-500">
              Affordable & Transparent
            </p>

            <p className="mt-4 text-sm text-[#0C0801]">
              Payment details for mock interviews are clearly discussed via
              WhatsApp before confirmation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
