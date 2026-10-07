import TheoremCard from "../components/TheoremCard";
import { theorems } from "./data";
import Image from "next/image";

export default function TheoremsPage() {
  return (
    <div>
      <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-gray-700 text-sm sm:text-base">
          This is a catalog of results I have learned in my Abstract Algebra course,
          alongside proofs for each. <br />
          Apologies in advance as all statements are presented as theorems for my sake. <br />
          My favorites got a tombstone for how well they've been put to rest.
        </p>
      </div>
      {theorems.map((theorem) => (
        <TheoremCard
          key={theorem.number}
          number={theorem.number}
          title={theorem.title}
          statement={theorem.statement}
          description={theorem.description}
          proof={theorem.proof}
        />
      ))}
      <div className="mt-8 flex justify-center">
        <Image
          src="/algebra/fun.avif"
          alt="Fun times in algebra"
          width={800}
          height={600}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
