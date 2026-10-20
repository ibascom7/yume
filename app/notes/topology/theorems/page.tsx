import TheoremCard from "../components/TheoremCard";
import { filterByChapter, filterLabel, type NotesFilterParams } from "@/app/components/notesFilter";
import { theorems } from "./data";
import LinkPreviewPopup from "@/app/components/LinkPreviewPopup";
import { linkPreviews } from "../linkPreviews";
import Image from "next/image";

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
          Catalog of theorems from Topology alongside proofs for each.
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
          examples={theorem.examples}
          chapter={theorem.chapter}
          section={theorem.section}
          id={`theorem-${theorem.number}`}
        />
      ))}
      <figure className="mt-8 flex flex-col items-center">
        {/* unoptimized: Next's optimizer would flatten the GIF to one frame */}
        <Image
          src="/Spot_the_cow.gif"
          alt="Spot the cow, a 3D model, morphing into a sphere"
          width={500}
          height={500}
          unoptimized
          className="w-full max-w-[500px] h-auto rounded-lg"
        />
        <figcaption className="mt-2 text-center text-xs sm:text-sm text-gray-600">
          Cows are easy to round up
        </figcaption>
      </figure>
    </div>
  );
}
