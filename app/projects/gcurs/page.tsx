import Link from "next/link";
import Image from "next/image";

export default function GcursPage() {
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
          <span className="text-lg sm:text-xl font-bold">GCURS Talk</span>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-1 p-3 sm:p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            Brief Stops, More Vortices
          </h1>
          <p className="text-gray-500 mb-6">
            Isaiah Bascom, Min Wang, Yuhe Wang &middot; talk at the Gulf Coast
            Undergraduate Research Symposium (GCURS), Rice University, October
            2026
          </p>

          <a href="/gcurs-talk.pdf" target="_blank" rel="noopener noreferrer">
            <Image
              src="/gcurs-talk.png"
              alt="Title slide: Brief stops, more vortices. Steady rotation gives 4 Taylor cells; pulsed rotation gives 8."
              width={1890}
              height={1063}
              priority
              className="w-full h-auto mb-2 rounded-lg border border-gray-300 hover:opacity-90 transition-opacity"
            />
          </a>
          <p className="text-sm text-gray-500 mb-6">
            <a
              href="/gcurs-talk.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-700"
            >
              Open the slides (PDF)
            </a>
          </p>

          <div className="space-y-4 text-gray-700 text-sm sm:text-base">
            <p>
              In a catalytic-wall Taylor-Couette reactor, liquid fills the gap
              between a spinning inner cylinder and a catalyst-coated outer
              wall. The reaction only happens at that wall, so performance
              depends on how fast the Taylor vortices in the gap carry reactant
              to it. The question: with the average speed held fixed, how should
              the inner cylinder be spun over time?
            </p>
            <p>
              A TD3 reinforcement learning agent, coupled to an OpenFOAM
              simulation and given no physics, learned the same strategy in all
              five training runs: run a little above 300 rpm for about four and
              a half seconds, then stop completely for about half a second. An
              independent Bayesian optimization over 220 fixed waveforms found
              the same thing. The policy transferred with no retraining to a
              reactor five times taller, reaching 0.90 conversion against 0.79
              for steady rotation at the same power, while the previously
              published recipe of long idles and short bursts lost to steady
              rotation.
            </p>
            <p>
              The second half of the talk explains why. A short Taylor-Couette
              annulus is multistable: at the same speed it can settle into
              different numbers of vortex cells. Steady rotation gives four
              cells. Each brief stop lets the vortices die, and the restart from
              rest builds eight narrower cells, which carry reactant to the
              wall faster. Under steady rotation the extra cells merge back to
              four within 10 to 15 seconds, so the stops have to keep coming,
              and they have to be full stops: slowing to 100 rpm or more instead
              of stopping loses the gain entirely.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
