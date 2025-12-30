import { HandCoins, ShieldCheck } from "lucide-react";

export default function Trust() {
  return (
    <section id="features" className="bg-white py-24 font-inter">
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-[#0C0801]">Trust</p>

          <h2 className="mt-3 font-sora text-[32px] font-semibold text-black lg:text-[44px]">
            Safe, Secure and Transparent
          </h2>

          <p className="mt-4 text-gray-800">
            Your privacy and peace of mind matter to us
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 items-start">
          {/* CARD 1 – Taller */}
          <div
            className="bg-[#9EE2E4] p-8 rounded-[15px]"
            style={{ borderBottomRightRadius: "70px" }}
          >
            <HandCoins className="h-9 w-9 text-black stroke-[2.5]" />

            <p className="mt-8 text-sm font-medium text-black">
              No hidden costs, ever.
            </p>

            <h3 className="mt-3 font-sora text-[26px] font-bold text-black leading-[1.2]">
              CV review costs nothing
            </h3>

            <p className="mt-4 text-[15px] text-black/80 leading-relaxed">
              Upload and get honest feedback without any payment required
              upfront.
            </p>
          </div>

          {/* CARD 2 – Shorter */}
          <div className="bg-[#FCDA91] p-8 rounded-[15px]">
            <p className="text-sm font-medium text-black">
              WhatsApp keeps it simple
            </p>

            <h3 className="mt-3 font-sora text-[26px] font-bold text-black leading-[1.2]">
              No complicated platforms.
            </h3>

            <p className="mt-4 text-[15px] text-black/80 leading-relaxed">
              We connect through WhatsApp, so you can talk and share files
              comfortably.
            </p>
          </div>

          {/* CARD 3 – Taller */}
          <div
            className="bg-[#BCB2FE] p-8 rounded-[15px]"
            style={{ borderBottomRightRadius: "70px" }}
          >
            <ShieldCheck className="h-9 w-9 text-black stroke-[2.5]" />

            <p className="mt-8 text-sm font-medium text-black">
              Privacy Guaranteed
            </p>

            <h3 className="mt-3 font-sora text-[26px] font-bold text-black leading-[1.2]">
              Your CV stays private always
            </h3>

            <p className="mt-4 text-[15px] text-black/80 leading-relaxed">
              We never share your information without your explicit permission.
            </p>
          </div>

          {/* CARD 4 – Shorter */}
          <div className="bg-[#F99D83] p-8 rounded-[15px]">
            <p className="text-sm font-medium text-black">
              Verified Professionals
            </p>

            <h3 className="mt-3 font-sora text-[26px] font-bold text-black leading-[1.2]">
              Trusted experts only.
            </h3>

            <p className="mt-4 text-[15px] text-black/80 leading-relaxed">
              Every mentor is checked. You're working with real industry
              experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
