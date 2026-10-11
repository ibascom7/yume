import TheoremCard from "../components/TheoremCard";
import { filterByChapter, filterLabel, type NotesFilterParams } from "@/app/components/notesFilter";
import { theorems } from "./data";
import LinkPreviewPopup from "@/app/components/LinkPreviewPopup";
import { linkPreviews } from "../linkPreviews";

export default async function TheoremsPage({
  searchParams,
}: {
  searchParams: Promise<NotesFilterParams>;
}) {
  // Homework only applies to exercises, so ignore it when it carries over from that tab
  const { chapter, section } = await searchParams;
  const visible = filterByChapter(theorems, { chapter, section });
  const label = filterLabel({ chapter, section });

  return (
    <div>
      <LinkPreviewPopup previews={linkPreviews} />
      <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-gray-700 text-sm sm:text-base">
          Catalog of theorems from Algebraic Topology alongside proofs for each.
        </p>
      </div>
      {visible.length === 0 && label && (
        <p className="text-gray-500 text-sm sm:text-base">Nothing from {label} yet.</p>
      )}
      {visible.map((theorem) => (
        <TheoremCard
          key={theorem.number}
          kind={theorem.kind}
          number={theorem.number}
          title={theorem.title}
          statement={theorem.statement}
          description={theorem.description}
          proof={theorem.proof}
          chapter={theorem.chapter}
          section={theorem.section}
          id={`theorem-${theorem.number}`}
        />
      ))}
      <figure className="mt-8 flex flex-col items-center">
        {/* preload="none": nothing streams until play is pressed. Each browser takes the first source it can play:
            H.264 MP4 for Safari/iPhone and most others, VP9 WebM for browsers without H.264 (e.g. some Linux Chromium builds) */}
        <video
          poster="/sphere_eversion_poster.jpg"
          controls
          preload="none"
          playsInline
          loop
          className="w-full max-w-[600px] aspect-square rounded-lg bg-black"
        >
          <source src="/sphere_eversion.mp4" type='video/mp4; codecs="avc1.640028"' />
          <source src="/sphere_eversion.webm" type='video/webm; codecs="vp9"' />
        </video>
        <figcaption className="mt-2 text-center text-xs sm:text-sm text-gray-600">
          <a href="https://commons.wikimedia.org/wiki/File:Thurston_Sphere_Eversion.webm" className="underline">
            Thurston sphere eversion
          </a>{" "}
          via Wikimedia Commons
        </figcaption>
      </figure>
    </div>
  );
}
