import TheoremCard from "../components/TheoremCard";

interface Proof {
  title?: string;
  content: string;
}

interface Theorem {
  number: number;
  title: string;
  statement: string;
  description?: string;
  proof?: string | Proof[];
}

export default function TheoremsPage() {
  const theorems: Theorem[] = [
    // Template:
    // {
    //   number: 1,
    //   title: "1.1.1 Theorem Name",
    //   statement: `\\text{Statement...}`,
    //   proof: `\\text{Proof...}`,
    //   // or multiple proofs:
    //   // proof: [
    //   //   { title: "Proof of (a)", content: `\\text{...}` },
    //   //   { title: "Proof of (b)", content: `\\text{...}` },
    //   // ],
    // },
  ];

  return (
    <div>
      <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-gray-700 text-sm sm:text-base">
          Catalog of theorems from Linear Algebra alongside proofs for each.
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
          id={`theorem-${theorem.number}`}
        />
      ))}
    </div>
  );
}
