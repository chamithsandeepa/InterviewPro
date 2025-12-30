import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FAFDF7]">
      <div className="mx-auto max-w-7xl px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h1
            className="font-sora font-semibold text-[42px] leading-tight lg:text-[68px]"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            Practice your <span className="text-[#FFBD43]">interview</span> with
            real career experts
          </h1>

          <p className="mt-6 max-w-lg text-lg text-gray-600">
            Upload your CV, receive expert guidance, and practice interviews
            with confidence. You're not alone in this journey.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-lg bg-[#8E81FC] px-6 py-3 text-white text-sm font-medium">
              Send CV on WhatsApp
            </button>

            <button className="rounded-lg border border-[#8E81FC] px-6 py-3 text-[#8E81FC] text-sm font-medium">
              Request Mock Interview
            </button>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative flex justify-center">
          {/* Main Hero Image */}
          <Image
            src="/hero.png"
            alt="Hero"
            width={420}
            height={520}
            className="relative scale-110"
          />

          {/* Hat */}
          <Image
            src="/hat.png"
            alt="Hat"
            width={320}
            height={120}
            className="absolute -left-30 top-30"
          />

          {/* Box */}
          <Image
            src="/box.png"
            alt="Box"
            width={120}
            height={90}
            className="absolute -bottom-15 right-5"
          />
        </div>
      </div>
    </section>
  );
}
