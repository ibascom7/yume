import TheoremCard from "../components/TheoremCard";
import { theorems } from "./data";
import Image from "next/image";

export default function TheoremsPage() {
  return (
    <div>
      <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-gray-700 text-sm sm:text-base">
          This is a catalog of theorems from Intermediate Analysis,
          alongside proofs for each.
        </p>
      </div>
      {theorems.map((theorem) => (
        <TheoremCard
          key={theorem.number}
          number={theorem.number}
          title={theorem.title}
          statement={theorem.statement}
          proof={theorem.proof}
          id={`theorem-${theorem.number}`}
        />
      ))}
      <div className="mt-8 flex justify-center">
        <Image
          src="/lulu_lubbie.jpg"
          alt="I miss my baby"
          width={450}
          height={600}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
