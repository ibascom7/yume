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
          <span className="text-lg sm:text-xl font-bold">NASC-RTG</span>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-1 p-3 sm:p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">NASC-RTG Poster</h1>

          {/* Poster: put the file in public/ and replace this box with
                <Image src="/nasc-rtg-poster.png" alt="NASC-RTG poster" width={1600} height={1200}
                       className="w-full h-auto rounded-lg border border-gray-300" />
              or, for a PDF,
                <iframe src="/nasc-rtg-poster.pdf" className="w-full h-[80vh] rounded-lg border border-gray-300" /> */}
          <div className="aspect-[4/3] w-full mb-6 rounded-lg border border-dashed border-gray-300 bg-gray-50 flex items-center justify-center text-gray-400">
            Poster goes here
          </div>

          <div className="space-y-4 text-gray-700 text-sm sm:text-base">
            <p>Write a little about the project here.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
