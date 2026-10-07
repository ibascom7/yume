import ProofMethodCard from "../components/ProofMethodCard";
import { proofMethods } from "./data";
import LinkPreviewPopup from "@/app/components/LinkPreviewPopup";
import { linkPreviews } from "../linkPreviews";

export default function ProofMethodsPage() {
  return (
    <div>
      <LinkPreviewPopup previews={linkPreviews} />
      <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-gray-700 text-sm sm:text-base">
          Catalog of proof methods and techniques with examples.
        </p>
      </div>
      {proofMethods.map((method) => (
        <ProofMethodCard
          key={method.number}
          number={method.number}
          title={method.title}
          description={method.description}
          examples={method.examples}
          id={`proof-method-${method.number}`}
        />
      ))}
    </div>
  );
}
