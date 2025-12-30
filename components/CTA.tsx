export default function CTA() {
  return (
    <section id="contact" className="bg-[#FAFDF7] py-28 font-inter">
      <div className="mx-auto max-w-4xl px-6 text-center">
        {/* Heading */}
        <h2 className="font-sora text-[32px] font-semibold text-black lg:text-[44px]">
          Start preparing today
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-gray-700">
          Your future self will thank you for taking this step now
        </p>

        {/* Button */}
        <div className="mt-10">
          <a
            href="tel:+94711186028"
            className="rounded-md bg-[#8E81FC] px-8 py-3 text-sm font-medium text-white hover:bg-[#7A6CF5] transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
