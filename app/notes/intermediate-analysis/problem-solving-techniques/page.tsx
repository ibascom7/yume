import ProblemSolvingTechniqueCard from "../components/ProblemSolvingTechniqueCard";
import { techniques } from "./data";
import LinkPreviewPopup from "@/app/components/LinkPreviewPopup";
import { linkPreviews } from "../linkPreviews";

export default function ProblemSolvingTechniquesPage() {
  return (
    <div>
      <LinkPreviewPopup previews={linkPreviews} />
      <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-gray-700 text-sm sm:text-base">
          Catalog of problem solving techniques with examples.
        </p>
      </div>
      {techniques.map((technique) => (
        <ProblemSolvingTechniqueCard
          key={technique.number}
          number={technique.number}
          title={technique.title}
          description={technique.description}
          examples={technique.examples}
          id={`technique-${technique.number}`}
        />
      ))}
    </div>
  );
}
