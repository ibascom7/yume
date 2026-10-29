import type { ChapterRef, HomeworkRef } from "@/app/components/notesFilter";

interface Solution {
  title?: string;
  content: string;
}

interface Exercise extends ChapterRef, HomeworkRef {
  number: number;
  title: string;
  problem: string;
  solution?: string | Solution[];
}

export const exercises: Exercise[] = [
  // Template:
  // {
  //   number: 1,
  //   chapter: 1,
  //   section: 1,
  //   homework: 1, // if it was assigned; a problem can have a homework, a chapter/section, or both
  //   title: "Exercise title",
  //   problem: `\\text{Problem...}`,
  //   solution: `\\text{Solution...}`,
  //   // or multiple parts:
  //   // solution: [
  //   //   { title: "Part (a)", content: `\\text{...}` },
  //   //   { title: "Part (b)", content: `\\text{...}` },
  //   // ],
  // },
  {
    number: 1,
    chapter: 4,
    section: 1,
    title: "A 2 × 2 determinant over ℂ (4.1.3b)",
    problem: `\\text{Evaluate } \\det\\begin{pmatrix} 5 - 2i & 6 + 4i \\\\ -3 + i & 7i \\end{pmatrix}.`,
    solution: `\\begin{aligned}
                 &\\det\\begin{pmatrix} 5 - 2i & 6 + 4i \\\\ -3 + i & 7i \\end{pmatrix} \\\\
                 &= (5 - 2i)(7i) - (6 + 4i)(-3 + i) \\\\
                 &= 35i + 14 + 18 + 12i - 6i + 4 \\\\
                 &= 36 + 41i.
               \\end{aligned}`,
  },
  {
    number: 2,
    chapter: 4,
    section: 2,
    title: "Scaling every row (4.2.2)",
    problem: `\\text{Find } k \\text{ that satisfies} \\\\[0.5em]
              \\det\\begin{pmatrix} 3a_1 & 3a_2 & 3a_3 \\\\ 3b_1 & 3b_2 & 3b_3 \\\\ 3c_1 & 3c_2 & 3c_3 \\end{pmatrix} = k\\det\\begin{pmatrix} a_1 & a_2 & a_3 \\\\ b_1 & b_2 & b_3 \\\\ c_1 & c_2 & c_3 \\end{pmatrix}.`,
    solution: `k = 3^3 = 27\\text{, because } \\det \\text{ is linear in each row,} \\\\
               \\text{so we can factor a } 3 \\text{ out of each of the three rows.}`,
  },
  {
    number: 3,
    chapter: 4,
    section: 2,
    title: "Sums of rows (4.2.4)",
    problem: `\\text{Find } k \\text{ that satisfies} \\\\[0.5em]
              \\begin{aligned}
                &\\det\\begin{pmatrix} b_1 + c_1 & b_2 + c_2 & b_3 + c_3 \\\\ a_1 + c_1 & a_2 + c_2 & a_3 + c_3 \\\\ a_1 + b_1 & a_2 + b_2 & a_3 + b_3 \\end{pmatrix} \\\\
                &= k\\det\\begin{pmatrix} a_1 & a_2 & a_3 \\\\ b_1 & b_2 & b_3 \\\\ c_1 & c_2 & c_3 \\end{pmatrix}.
              \\end{aligned}`,
    solution: `\\text{Adding a multiple of one row to another} \\\\
               \\text{does not change the determinant. So} \\\\
               \\begin{aligned}
                 &\\det\\begin{pmatrix} b_1 + c_1 & b_2 + c_2 & b_3 + c_3 \\\\ a_1 + c_1 & a_2 + c_2 & a_3 + c_3 \\\\ a_1 + b_1 & a_2 + b_2 & a_3 + b_3 \\end{pmatrix} \\\\
                 \\overset{R_1 + R_2}{=} &\\det\\begin{pmatrix} a_1 + b_1 + 2c_1 & a_2 + b_2 + 2c_2 & a_3 + b_3 + 2c_3 \\\\ a_1 + c_1 & a_2 + c_2 & a_3 + c_3 \\\\ a_1 + b_1 & a_2 + b_2 & a_3 + b_3 \\end{pmatrix} \\\\
                 \\overset{R_1 - R_3}{=} &\\det\\begin{pmatrix} 2c_1 & 2c_2 & 2c_3 \\\\ a_1 + c_1 & a_2 + c_2 & a_3 + c_3 \\\\ a_1 + b_1 & a_2 + b_2 & a_3 + b_3 \\end{pmatrix} \\\\
                 = \\ &2\\det\\begin{pmatrix} c_1 & c_2 & c_3 \\\\ a_1 + c_1 & a_2 + c_2 & a_3 + c_3 \\\\ a_1 + b_1 & a_2 + b_2 & a_3 + b_3 \\end{pmatrix} \\\\
                 \\overset{R_2 - R_1,\\ R_3 - R_2}{=} &2\\det\\begin{pmatrix} c_1 & c_2 & c_3 \\\\ a_1 & a_2 & a_3 \\\\ b_1 & b_2 & b_3 \\end{pmatrix} \\\\
                 \\overset{\\text{2 swaps}}{=} &2\\det\\begin{pmatrix} a_1 & a_2 & a_3 \\\\ b_1 & b_2 & b_3 \\\\ c_1 & c_2 & c_3 \\end{pmatrix}.
               \\end{aligned} \\\\
               \\text{The last step uses two row swaps, each of which} \\\\
               \\text{multiplies the determinant by } -1\\text{, so the sign is unchanged.} \\\\
               \\text{So } k = 2.`,
  },
  {
    number: 4,
    chapter: 4,
    section: 2,
    title: "Cofactor expansion along the 3rd row (4.2.8)",
    problem: `\\text{Evaluate } \\det(A) \\text{ by cofactor expansion along the 3rd row,} \\\\
              \\text{where } A = \\begin{pmatrix} 1 & 0 & 2 \\\\ 0 & 1 & 5 \\\\ -1 & 3 & 0 \\end{pmatrix}.`,
    solution: `\\begin{aligned}
                 C_{31} &= (-1)^4\\det(\\tilde{A}_{31}) = \\det\\begin{pmatrix} 0 & 2 \\\\ 1 & 5 \\end{pmatrix} = -2, \\\\
                 C_{32} &= (-1)^5\\det(\\tilde{A}_{32}) = -\\det\\begin{pmatrix} 1 & 2 \\\\ 0 & 5 \\end{pmatrix} = -5, \\\\
                 C_{33} &= (-1)^6\\det(\\tilde{A}_{33}) = \\det\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} = 1.
               \\end{aligned} \\\\
               \\text{So} \\\\
               \\begin{aligned}
                 \\det(A) &= (-1)(-2) + 3(-5) + 0(1) \\\\
                 &= 2 - 15 \\\\
                 &= -13.
               \\end{aligned}`,
  },
  {
    number: 5,
    chapter: 4,
    section: 2,
    title: "A 3 × 3 determinant by any method (4.2.14)",
    problem: `\\text{Evaluate } \\det\\begin{pmatrix} 2 & 3 & 4 \\\\ 5 & 6 & 0 \\\\ 7 & 0 & 0 \\end{pmatrix} \\text{ by any method.}`,
    solution: `\\text{Multiplying diagonally and adding together }([[definition 14|Definition 14]])\\text{,} \\\\
               \\begin{aligned}
                 \\det\\begin{pmatrix} 2 & 3 & 4 \\\\ 5 & 6 & 0 \\\\ 7 & 0 & 0 \\end{pmatrix}
                 &= 0 + 0 + 0 - 0 - 0 - 168 \\\\
                 &= -168.
               \\end{aligned}`,
  },
  {
    number: 6,
    chapter: 4,
    section: 2,
    title: "A complex 3 × 3 determinant (4.2.20)",
    problem: `\\text{Evaluate } \\det(A) \\text{ by any means necessary, where} \\\\[0.5em]
              A = \\begin{pmatrix} -1 & 2 + i & 3 \\\\ 1 - i & i & 1 \\\\ 3i & 2 & 1 - i \\end{pmatrix}.`,
    solution: `\\text{I will get } A \\text{ to upper triangular form using only row} \\\\
               \\text{operations that add a multiple of one row to another} \\\\
               \\text{(these do not change the determinant),} \\\\
               \\text{and then multiply the diagonal.} \\\\
               \\text{Adding } (1 - i)R_1 \\text{ to } R_2 \\text{ and } 3iR_1 \\text{ to } R_3\\text{,} \\\\[0.5em]
               \\begin{pmatrix} -1 & 2 + i & 3 \\\\ 0 & 3 & 4 - 3i \\\\ 0 & -1 + 6i & 1 + 8i \\end{pmatrix}. \\\\[0.5em]
               \\text{Adding } \\frac{1 - 6i}{3}R_2 \\text{ to } R_3\\text{,} \\\\
               \\text{and using } (1 - 6i)(4 - 3i) = -14 - 27i\\text{,} \\\\[0.5em]
               \\begin{pmatrix} -1 & 2 + i & 3 \\\\ 0 & 3 & 4 - 3i \\\\ 0 & 0 & -\\frac{11}{3} - i \\end{pmatrix}. \\\\[0.5em]
               \\text{So} \\\\
               \\begin{aligned}
                 \\det(A) &= (-1)(3)\\left(-\\tfrac{11}{3} - i\\right) \\\\
                 &= 11 + 3i.
               \\end{aligned}`,
  },
  {
    number: 7,
    chapter: 4,
    section: 3,
    title: "Cramer's rule (4.3.4)",
    problem: `\\text{Use Cramer's rule to solve} \\\\
              \\begin{aligned}
                x_1 - 2x_2 + x_3 &= 0 \\\\
                3x_1 + 4x_2 - 2x_3 &= -5 \\\\
                x_1 - x_2 + 4x_3 &= -4.
              \\end{aligned}`,
    solution: `\\text{We have } A = \\begin{pmatrix} 1 & -2 & 1 \\\\ 3 & 4 & -2 \\\\ 1 & -1 & 4 \\end{pmatrix} \\text{ and } b = \\begin{pmatrix} 0 \\\\ -5 \\\\ -4 \\end{pmatrix}\\text{. Then} \\\\
               \\begin{aligned}
                 \\det(A) &= 16 + 4 - 3 - 2 + 24 - 4 \\\\
                 &= 35 \\neq 0.
               \\end{aligned} \\\\
               \\text{So Cramer's rule applies.} \\\\
               \\text{Let } M_k \\text{ be } A \\text{ with column } k \\text{ replaced by } b\\text{. Then} \\\\
               \\begin{aligned}
                 \\det(M_1) &= \\det\\begin{pmatrix} 0 & -2 & 1 \\\\ -5 & 4 & -2 \\\\ -4 & -1 & 4 \\end{pmatrix} \\\\
                 &= 0 - 16 + 5 - 0 - 40 + 16 = -35, \\\\
                 \\det(M_2) &= \\det\\begin{pmatrix} 1 & 0 & 1 \\\\ 3 & -5 & -2 \\\\ 1 & -4 & 4 \\end{pmatrix} \\\\
                 &= -20 + 0 - 12 - 8 - 0 + 5 = -35, \\\\
                 \\det(M_3) &= \\det\\begin{pmatrix} 1 & -2 & 0 \\\\ 3 & 4 & -5 \\\\ 1 & -1 & -4 \\end{pmatrix} \\\\
                 &= -16 + 10 + 0 - 5 - 24 - 0 = -35.
               \\end{aligned} \\\\
               \\text{So} \\\\[0.5em]
               x_1 = \\frac{\\det(M_1)}{\\det(A)} = -1, \\quad
               x_2 = \\frac{\\det(M_2)}{\\det(A)} = -1, \\quad
               x_3 = \\frac{\\det(M_3)}{\\det(A)} = -1.`,
  },
  {
    number: 8,
    chapter: 4,
    section: 3,
    title: "Nilpotent matrices have determinant 0 (4.3.10)",
    problem: `\\text{A matrix } M \\in M_{n \\times n}(\\mathbb{F}) \\text{ is called } \\textbf{nilpotent} \\text{ if,} \\\\
              \\text{for some positive integer } k\\text{, } M^k = O\\text{,} \\\\
              \\text{where } O \\text{ is the } n \\times n \\text{ zero matrix.} \\\\
              \\text{Prove that if } M \\text{ is nilpotent, then } \\det(M) = 0.`,
    solution: `\\text{Let } M \\in M_{n \\times n}(\\mathbb{F}) \\text{ s.t. } \\exists\\, k > 0 \\text{ where } M^k = O. \\\\
               \\text{By Theorem 4.7 (applied } k - 1 \\text{ times), } \\det(M^k) = \\det(M)^k. \\\\
               \\text{But } M^k = O\\text{, so } \\det(M^k) = \\det(O) = 0. \\\\
               \\text{Thus } \\det(M)^k = 0 \\implies \\det(M) = 0\\text{,} \\\\
               \\text{since a field has no zero divisors.} \\ \\ \\blacksquare`,
  },
  {
    number: 9,
    chapter: 4,
    section: 3,
    title: "Orthogonal matrices have determinant ±1 (4.3.12)",
    problem: `\\text{A matrix } Q \\in M_{n \\times n}(\\mathbb{R}) \\text{ is called } \\textbf{orthogonal} \\text{ if } QQ^T = I. \\\\
              \\text{Prove that if } Q \\text{ is orthogonal, then } \\det(Q) = \\pm 1.`,
    solution: `\\text{Let } Q \\in M_{n \\times n}(\\mathbb{R}) \\text{ where } QQ^T = I\\text{. Then} \\\\
               \\begin{aligned}
                 1 = \\det(I) = \\det(QQ^T) &= \\det(Q)\\det(Q^T) \\\\
                 &= \\det(Q)\\det(Q) \\\\
                 &= \\det(Q)^2
               \\end{aligned} \\\\
               \\text{by Theorem 4.7 and Theorem 4.8.} \\\\
               \\text{Thus } \\det(Q)^2 = 1 \\implies \\det(Q) = \\pm 1. \\ \\ \\blacksquare`,
  },
  {
    number: 10,
    chapter: 4,
    section: 3,
    title: "Similar matrices have equal determinants (4.3.15)",
    problem: `\\text{Prove that if } A, B \\in M_{n \\times n}(\\mathbb{F}) \\text{ are similar,} \\\\
              \\text{then } \\det(A) = \\det(B).`,
    solution: `\\text{Let } A, B \\in M_{n \\times n}(\\mathbb{F}) \\text{ where } \\exists \\text{ invertible} \\\\
               Q \\in M_{n \\times n}(\\mathbb{F}) \\text{ s.t. } QAQ^{-1} = B\\text{. Then} \\\\
               \\begin{aligned}
                 \\det(B) = \\det(QAQ^{-1}) &= \\det(Q)\\det(A)\\det(Q^{-1}) \\\\
                 &= \\det(Q)\\det(Q^{-1})\\det(A) \\\\
                 &= \\det(QQ^{-1})\\det(A) \\\\
                 &= \\det(I)\\det(A) \\\\
                 &= \\det(A)
               \\end{aligned} \\\\
               \\text{by Theorem 4.7, since multiplication in } \\mathbb{F} \\text{ is commutative.} \\ \\ \\blacksquare`,
  },
];
