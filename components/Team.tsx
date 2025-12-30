import Image from "next/image";
import { Linkedin, Twitter, Globe } from "lucide-react";

export default function Team() {
  return (
    <section id="team" className="bg-[#FAFDF7] py-24 font-inter">
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-[#0C0801]">Team</span>

          <h2 className="mt-3 font-sora text-[32px] font-semibold lg:text-[44px] text-black">
            Meet Our Verified Career Professionals
          </h2>

          <p className="mt-4 text-gray-800">
            Real industry experts who understand your path forward
          </p>
        </div>

        {/* TEAM GRID */}
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* MEMBER 1 */}
          <div className="text-center max-w-sm mx-auto">
            <div className="mx-auto h-20 w-20 overflow-hidden rounded-full">
              <Image
                src="/user1.png"
                alt="Marcus Chen"
                width={80}
                height={80}
                className="object-cover"
              />
            </div>

            <h3 className="mt-6 font-sora text-lg font-semibold text-black">
              Marcus Chen
            </h3>

            <p className="mt-1 text-sm text-gray-900">Software engineer</p>

            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Ten years building products. Guides students through technical
              interviews with clarity.
            </p>

            <div className="mt-6 flex justify-center gap-4">
              <Linkedin className="h-5 w-5 text-black cursor-pointer" />
              <Twitter className="h-5 w-5 text-black cursor-pointer" />
            </div>
          </div>

          {/* MEMBER 2 */}
          <div className="text-center max-w-sm mx-auto">
            <div className="mx-auto h-20 w-20 overflow-hidden rounded-full">
              <Image
                src="/user2.png"
                alt="Priya Sharma"
                width={80}
                height={80}
                className="object-cover"
              />
            </div>

            <h3 className="mt-6 font-sora text-lg font-semibold text-black">
              Priya Sharma
            </h3>

            <p className="mt-1 text-sm text-gray-900">HR manager</p>

            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Specializes in entry-level hiring. Knows what recruiters look for
              in your first role.
            </p>

            <div className="mt-6 flex justify-center gap-4">
              <Linkedin className="h-5 w-5 text-black cursor-pointer" />
              <Twitter className="h-5 w-5 text-black cursor-pointer" />
            </div>
          </div>

          {/* MEMBER 3 */}
          <div className="text-center max-w-sm mx-auto">
            <div className="mx-auto h-20 w-20 overflow-hidden rounded-full">
              <Image
                src="/user3.png"
                alt="James Rivera"
                width={80}
                height={80}
                className="object-cover"
              />
            </div>

            <h3 className="mt-6 font-sora text-lg font-semibold text-black">
              James Rivera
            </h3>

            <p className="mt-1 text-sm text-gray-900">UI/UX designer</p>

            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Portfolio expert. Helps students present their work in ways that
              land interviews.
            </p>

            <div className="mt-6 flex justify-center gap-4">
              <Linkedin className="h-5 w-5 text-black cursor-pointer" />
              <Twitter className="h-5 w-5 text-black cursor-pointer" />
              <Globe className="h-5 w-5 text-black cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
