import Image from "next/image";
import { Wrench, MessageSquareText, MessageSquareWarning } from "lucide-react";

export default function Hope() {
  return (
    <section className="bg-[#FAFDF7] py-24 font-inter">
      <div className="mx-auto max-w-7xl px-6">
        {/* TOP CONTENT */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* LEFT */}
          <div>
            <p className="text-sm font-medium text-gray-700">Hope</p>

            <h2 className="mt-4 font-sora text-[36px] font-semibold leading-tight text-black lg:text-[52px]">
              Your next opportunity <br />
              starts with <br />
              preparation
            </h2>
          </div>

          {/* RIGHT */}
          <div>
            <p className="text-gray-700 max-w-md">
              Feeling nervous before interviews is normal. With the right
              guidance and practice, you can turn uncertainty into confidence.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* FEATURE 1 */}
              
              <div className="flex flex-col gap-3">
                <Wrench className="h-8 w-8 text-black" />

                <div>
                  <h4 className="font-sora text-lg font-semibold text-black">
                    Practice matters
                  </h4>
                  <p className="mt-1 text-sm text-gray-600">
                    Each mock interview builds your ability to think on your
                    feet.
                  </p>
                </div>
              </div>

              {/* FEATURE 2 */}
              <div className="flex flex-col gap-3">
                <MessageSquareWarning className="h-8 w-8 text-black" />
                <div>
                  <h4 className="font-sora text-lg font-semibold text-black">
                    Feedback guides you
                  </h4>
                  <p className="mt-1 text-sm text-gray-600">
                    You'll understand exactly what to work on before the real
                    thing.
                  </p>
                </div>
              </div>
            </div>

            <button className="mt-10 rounded-md border border-gray-300 px-6 py-3 text-sm font-medium text-black hover:bg-black hover:text-white transition">
              Send CV &amp; Get Feedback
            </button>
          </div>
        </div>

        {/* IMAGE */}
        <div className="mt-20 flex justify-center">
          <Image
            src="/bro.png"
            alt="Interview illustration"
            width={620}
            height={420}
            className="w-full max-w-2xl object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
