import { FileText, MessageCircle, Laptop, MessagesSquare } from "lucide-react";

export default function Process() {
  return (
    <section id="process" className="bg-[#FAFDF7] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <span className="text-sm font-semibold text-[#0C0801]">Our Process</span>

          <h2
            className="mt-3 text-[32px] font-semibold lg:text-[44px]"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            How it works
          </h2>

          <p className="mt-3 text-gray-800">
            Three simple steps to interview readiness
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Step 1 */}
          <div className="rounded-lg bg-linear-to-br from-[#FF7244] to-[#FF7D53] p-8 text-white">
            <MessagesSquare className="h-8 w-8" />

            <h3
              className="mt-6 text-[32px] font-semibold"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              Send <br />
              Your CV
            </h3>

            <p className="mt-3 text-white/90">
              Submit your CV through WhatsApp for a free initial review.
            </p>
          </div>

          {/* Step 2 */}
          <div className="rounded-lg bg-linear-to-br from-[#43AEC6] to-[#69D8E1] p-8 text-white">
            <MessageCircle className="h-8 w-8" />

            <h3
              className="mt-6 text-[32px] font-semibold"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              Connect via <br /> WhatsApp
            </h3>

            <p className="mt-3 text-white/90">
              Discuss interview requests and scheduling directly with our team.
            </p>
          </div>

          {/* Step 3 */}
          <div className="rounded-lg bg-linear-to-br from-[#6F5ED1] to-[#917FFE] p-8 text-white">
            <Laptop className="h-8 w-8" />

            <h3
              className="mt-6 text-[32px] font-semibold"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              Mock interview <br />
              and feedback
            </h3>

            <p className="mt-3 text-white/90">
              Attend your interview and receive clear, supportive guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
