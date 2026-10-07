import Link from "next/link";
import Image from "next/image";

export default function NascRtgPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      {/* Top Navigation Bar */}
      <nav className="border-b border-gray-300 px-2 sm:px-4 py-2 sm:py-3">
        <div className="flex items-center gap-2 sm:gap-6">
          <Link href="/" className="hover:opacity-70 transition-opacity">
            <Image
              src="/icon.png"
              alt="Home"
              width={24}
              height={24}
              className="rounded sm:w-7 sm:h-7"
            />
          </Link>
          <Link
            href="/projects"
            className="text-lg sm:text-xl font-bold hover:opacity-70 transition-opacity"
          >
            Projects
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-lg sm:text-xl font-bold">Taylor-Couette RL</span>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-1 p-3 sm:p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            Taylor-Couette RL Poster
          </h1>
          <p className="text-gray-500 mb-6">
            Isaiah Bascom, Min Wang, Yuhe Wang &middot; presented at NASC-RTG
          </p>

          <a href="/nasc-rtg-poster.pdf" target="_blank" rel="noopener noreferrer">
            <Image
              src="/nasc-rtg-poster.png"
              alt="Poster: Reinforcement learning discovered a better way to run a catalytic-wall Taylor-Couette reactor"
              width={2400}
              height={1800}
              priority
              className="w-full h-auto mb-2 rounded-lg border border-gray-300 hover:opacity-90 transition-opacity"
            />
          </a>
          <p className="text-sm text-gray-500 mb-6">
            <a
              href="/nasc-rtg-poster.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-700"
            >
              Open the full-resolution PDF
            </a>
          </p>

          <div className="space-y-4 text-gray-700 text-sm sm:text-base">
            <p>
              In a catalytic-wall Taylor-Couette reactor, a reactant-laden liquid
              flows between a spinning inner cylinder and a stationary catalytic
              shell. The question: how should the inner cylinder be spun to get
              the most conversion for the least motor power?
            </p>
            <p>
              We coupled an OpenFOAM simulation of the reactor to a TD3
              reinforcement learning agent through Gymnasium. Every 10 seconds
              the agent picks the next pulse (duty, period, and low speed) with
              the average held at 300 rpm, and is rewarded for conversion minus
              motor power. Trained on a reactor &#8533; the full height, the
              policy transferred zero-shot to the full-height reactor, where it
              beat constant-speed operation: brief stops are better than
              constant operation.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
