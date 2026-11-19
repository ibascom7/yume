import type { ChapterRef, HomeworkRef } from "@/app/components/notesFilter";
import type { Figure } from "../components/DefinitionCard";

interface Solution {
  title?: string;
  content: string;
  figure?: Figure;
}

interface Exercise extends ChapterRef, HomeworkRef {
  number: number;
  title: string;
  problem: string;
  solution?: string | Solution[];
}

export const exercises: Exercise[] = [
  {
    number: 1,
    chapter: 4,
    section: 1,
    homework: 1,
    title: "Question 4.1.A",
    problem: `\\text{Establish the Pythagorean formula: if $x$ and $y$ are} \\\\
              \\text{orthogonal vectors,} \\\\
             \\text{prove that $\\lVert x+y\\rVert = \\left(\\lVert x\\rVert^2+\\lVert y\\rVert^2\\right)^{1/2}$.}`,
    solution: [
      {
        title: "Recall",
        content: `\\text{1) Orthogonal: $\\langle x,y\\rangle=0$.} \\\\
                  \\text{2) [[definition 3|Inner product]]: $\\langle x,y\\rangle=\\sum_{i=1}^n x_iy_i$.} \\\\
                  \\text{3) [[definition 1|Norm]]: $\\lVert x\\rVert=\\left(\\sum_{i=1}^n |x_i|^2\\right)^{1/2}$.}`,
      },
      {
        title: "Solution",
        content: `\\text{Let $x,y\\in\\mathbb{R}^n$ be orthogonal. By the definition of the} \\\\
                  \\text{[[definition 1|Euclidean norm]],} \\\\
                  \\left(\\lVert x\\rVert^2+\\lVert y\\rVert^2\\right)^{1/2} \\\\
                  = \\left(\\left(\\Big(\\sum_{i=1}^n |x_i|^2\\Big)^{1/2}\\right)^{2} + \\left(\\Big(\\sum_{i=1}^n |y_i|^2\\Big)^{1/2}\\right)^{2}\\right)^{1/2}. \\\\
                  \\text{Simplifying,} \\\\
                  \\begin{aligned}
                    \\left(\\lVert x\\rVert^2+\\lVert y\\rVert^2\\right)^{1/2} &= \\left(\\sum_{i=1}^n x_i^2+\\sum_{i=1}^n y_i^2\\right)^{1/2} \\\\
                    &= \\left(\\sum_{i=1}^n x_i^2+y_i^2\\right)^{1/2}.
                  \\end{aligned} \\\\
                  \\text{Note that $\\sum_{i=1}^n x_iy_i=0$ because $x$ and $y$ are orthogonal.} \\\\
                  \\text{Therefore} \\\\
                  \\begin{aligned}
                    \\left(\\sum_{i=1}^n x_i^2+y_i^2\\right)^{1/2} &= \\left(\\sum_{i=1}^n x_i^2+2x_iy_i+y_i^2\\right)^{1/2} \\\\
                    &= \\left(\\sum_{i=1}^n (x_i+y_i)^2\\right)^{1/2} = \\lVert x+y\\rVert. \\ \\blacksquare
                  \\end{aligned}`,
      },
    ],
  },
  {
    number: 2,
    chapter: 4,
    section: 1,
    homework: 1,
    title: "Question 4.1.C",
    problem: `\\text{Show that $\\lVert x+y\\rVert^2+\\lVert x-y\\rVert^2 = 2\\lVert x\\rVert^2+2\\lVert y\\rVert^2$ for} \\\\
              \\text{all vectors $x,y\\in\\mathbb{R}^n$.} \\\\
             \\text{Geometric meaning?}`,
    solution: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 1|Norm]] \\\\
                  \\text{2) } [[definition 3|Inner product]]`,
      },
      {
        title: "Solution",
        content: `\\text{Let $x,y\\in\\mathbb{R}^n$ be arbitrary. First, observe} \\\\
                  \\begin{aligned}
                    \\lVert x+y\\rVert^2 &= \\langle x+y,x+y\\rangle \\\\
                    &= \\langle x,x+y\\rangle+\\langle y,x+y\\rangle \\\\
                    &= \\langle x,x\\rangle+\\langle x,y\\rangle+\\langle y,x\\rangle+\\langle y,y\\rangle \\\\
                    &= \\lVert x\\rVert^2+2\\langle x,y\\rangle+\\lVert y\\rVert^2 \\\\
                    &\\qquad (\\text{by [[definition 3|symmetry]], } \\langle x,y\\rangle=\\langle y,x\\rangle).
                  \\end{aligned} \\\\
                  \\text{Second, observe} \\\\
                  \\begin{aligned}
                    \\lVert x-y\\rVert^2 &= \\langle x-y,x-y\\rangle \\\\
                    &= \\langle x,x-y\\rangle-\\langle y,x-y\\rangle \\\\
                    &= \\langle x,x\\rangle-\\langle x,y\\rangle-\\langle y,x\\rangle+\\langle y,y\\rangle \\\\
                    &= \\lVert x\\rVert^2-2\\langle x,y\\rangle+\\lVert y\\rVert^2.
                  \\end{aligned} \\\\
                  \\text{Therefore} \\\\
                  \\begin{aligned}
                    \\lVert x+y\\rVert^2+\\lVert x-y\\rVert^2 &= \\left(\\lVert x\\rVert^2+2\\langle x,y\\rangle+\\lVert y\\rVert^2\\right) \\\\
                    &\\quad + \\left(\\lVert x\\rVert^2-2\\langle x,y\\rangle+\\lVert y\\rVert^2\\right) \\\\
                    &= 2\\lVert x\\rVert^2+2\\lVert y\\rVert^2. \\ \\blacksquare
                  \\end{aligned}`,
      },
      {
        title: "Geometric meaning",
        content: `\\text{Consider the parallelogram with edges $x$ and $y$; its} \\\\
                  \\text{diagonals are $x+y$ and $x-y$. The identity} \\\\
                  \\lVert x+y\\rVert^2+\\lVert x-y\\rVert^2 = 2\\lVert x\\rVert^2+2\\lVert y\\rVert^2 \\\\
                  \\text{says that the sum of the squares of the diagonals is equal to} \\\\
                  \\text{the sum of the squares} \\\\
                  \\text{of the edges (the parallelogram law).}`,
      },
    ],
  },
  {
    number: 3,
    chapter: 4,
    section: 1,
    homework: 1,
    title: "Question 4.1.D",
    problem: `\\text{Prove that if $x,y\\in\\mathbb{R}^n$ then $\\big|\\lVert x\\rVert-\\lVert y\\rVert\\big|\\le\\lVert x-y\\rVert$.}`,
    solution: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 1|Norm]] \\\\
                  \\text{2) } [[definition 3|Inner product]] \\\\
                  \\text{3) } [[theorem 1|Cauchy-Schwarz]]`,
      },
      {
        title: "Solution",
        content: `\\text{Let $x,y\\in\\mathbb{R}^n$. Observe that} \\\\
              \\begin{aligned}
                \\lVert x-y\\rVert^2 &= \\langle x-y,x-y\\rangle \\\\
                &= \\langle x,x-y\\rangle-\\langle y,x-y\\rangle \\\\
                &= \\langle x,x\\rangle-\\langle x,y\\rangle-\\langle y,x\\rangle+\\langle y,y\\rangle \\\\
                &= \\lVert x\\rVert^2-2\\langle x,y\\rangle+\\lVert y\\rVert^2 \\\\
                &\\ge \\lVert x\\rVert^2-2\\,|\\langle x,y\\rangle|+\\lVert y\\rVert^2 \\\\
                &\\ge \\lVert x\\rVert^2-2\\lVert x\\rVert\\lVert y\\rVert+\\lVert y\\rVert^2 \\\\
                &\\qquad (\\text{by [[theorem 1|Cauchy-Schwarz]]}) \\\\
                &= \\big(\\lVert x\\rVert-\\lVert y\\rVert\\big)^2 \\\\
                &= \\big|\\lVert x\\rVert-\\lVert y\\rVert\\big|^2.
              \\end{aligned} \\\\
              \\text{Taking square roots gives $\\lVert x-y\\rVert\\ge\\big|\\lVert x\\rVert-\\lVert y\\rVert\\big|$.} \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 4,
    chapter: 4,
    section: 1,
    homework: 1,
    title: "Question 4.1.E",
    problem: `\\text{Prove by induction that} \\\\
              \\text{$\\lVert x_1+\\cdots+x_k\\rVert\\le\\lVert x_1\\rVert+\\cdots+\\lVert x_k\\rVert$ for vectors} \\\\
              \\text{$x_i\\in\\mathbb{R}^n$.}`,
    solution: [
      {
        title: "Recall",
        content: `\\text{1) } [[theorem 3|Triangle inequality]]`,
      },
      {
        title: "Solution",
        content: `\\text{Let $x_i\\in\\mathbb{R}^n$ be arbitrary. We show $\\big\\lVert\\sum_{i=1}^k x_i\\big\\rVert\\le\\sum_{i=1}^k\\lVert x_i\\rVert$} \\\\
               \\text{by induction on $k\\in\\mathbb{N}$.} \\\\
              \\text{\\textit{Base case.} If $k=1$, then $\\lVert x_1\\rVert\\le\\lVert x_1\\rVert$.} \\\\
              \\text{\\textit{Inductive step.} Assume $\\big\\lVert\\sum_{i=1}^k x_i\\big\\rVert\\le\\sum_{i=1}^k\\lVert x_i\\rVert$.} \\\\
              \\text{We seek to show $\\big\\lVert\\sum_{i=1}^{k+1} x_i\\big\\rVert\\le\\sum_{i=1}^{k+1}\\lVert x_i\\rVert$. We have} \\\\
              \\Big\\lVert\\sum_{i=1}^{k+1}x_i\\Big\\rVert = \\Big\\lVert\\sum_{i=1}^{k}x_i+x_{k+1}\\Big\\rVert. \\\\
              \\text{By the [[theorem 3|triangle inequality]],} \\\\
              \\begin{aligned}
                \\Big\\lVert\\sum_{i=1}^{k}x_i+x_{k+1}\\Big\\rVert &\\le \\Big\\lVert\\sum_{i=1}^{k}x_i\\Big\\rVert+\\lVert x_{k+1}\\rVert \\\\
                &\\le \\sum_{i=1}^{k}\\lVert x_i\\rVert+\\lVert x_{k+1}\\rVert \\\\
                &\\qquad (\\text{by the inductive hypothesis}) \\\\
                &= \\sum_{i=1}^{k+1}\\lVert x_i\\rVert.
              \\end{aligned} \\\\
              \\text{Thus $\\big\\lVert\\sum_{i=1}^k x_i\\big\\rVert\\le\\sum_{i=1}^k\\lVert x_i\\rVert$ for all $k\\in\\mathbb{N}$.} \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 5,
    chapter: 4,
    section: 1,
    homework: 1,
    title: "Question 4.1.F",
    problem: `\\text{Suppose that $x$ and $y$ are unit vectors in $\\mathbb{R}^n$. Show} \\\\
              \\text{that if $\\big\\lVert\\frac{x+y}{2}\\big\\rVert=1$, then $x=y$.}`,
    solution: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 1|Norm]] \\\\
                  \\text{2) } [[definition 3|Inner product]] \\\\
                  \\text{3) } [[exercise 2|Question 4.1.C]]`,
      },
      {
        title: "Solution",
        content: `\\text{Let $x,y\\in\\mathbb{R}^n$ be unit vectors such that $\\big\\lVert\\frac{x+y}{2}\\big\\rVert=1$. Then} \\\\
               \\text{$\\big\\lVert\\frac{x+y}{2}\\big\\rVert^2=1^2$ as well.} \\\\
              \\text{Using $\\lVert v\\rVert^2=\\langle v,v\\rangle$,} \\\\
              \\begin{aligned}
                \\Big\\lVert\\frac{x+y}{2}\\Big\\rVert^2 &= \\Big\\langle\\frac{x+y}{2},\\frac{x+y}{2}\\Big\\rangle \\\\
                &= \\frac14\\langle x+y,x+y\\rangle \\\\
                &= \\frac14\\left(\\lVert x\\rVert^2+2\\langle x,y\\rangle+\\lVert y\\rVert^2\\right) \\\\
                &\\qquad (\\text{see [[exercise 2|(C)]] for the computation}) \\\\
                &= 1.
              \\end{aligned} \\\\
              \\text{This implies $\\lVert x\\rVert^2+2\\langle x,y\\rangle+\\lVert y\\rVert^2=4$.} \\\\
              \\text{Since $x$ and $y$ are unit vectors, $2\\langle x,y\\rangle+2=4$, so} \\\\
              \\text{$\\langle x,y\\rangle=1$. Now} \\\\
              \\lVert x-y\\rVert^2=\\lVert x\\rVert^2-2\\langle x,y\\rangle+\\lVert y\\rVert^2 = 1-2+1 = 0. \\\\
              \\text{Thus $x-y=0$, i.e. $x=y$.} \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 6,
    chapter: 4,
    section: 1,
    homework: 1,
    title: "Question 4.1.I",
    problem: `\\text{Suppose that $U$ is a linear transformation from $\\mathbb{R}^n$ to} \\\\
              \\text{$\\mathbb{R}^m$ that is \\textit{isometric},} \\\\
             \\text{meaning that $\\lVert Ux\\rVert=\\lVert x\\rVert$ for all $x\\in\\mathbb{R}^n$.} \\\\[0.5em]
             \\text{(a) Prove that $\\langle Ux,Uy\\rangle=\\langle x,y\\rangle$ for all $x,y\\in\\mathbb{R}^n$.} \\\\
             \\text{(b) If $\\{v_1,\\dots,v_n\\}$ is an orthonormal set in $\\mathbb{R}^m$, show} \\\\
             \\text{that the linear transformation} \\\\
             \\text{$Ux=\\sum_{i=1}^n x_iv_i$ is isometric.}`,
    solution: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 1|Norm]] \\\\
                  \\text{2) } [[definition 3|Inner product]] \\\\
                  \\text{3) } [[definition 5|Orthonormal]] \\\\
                  \\text{4) } [[theorem 2|Lemma 4.1.3]] \\\\
                  \\text{5) } [[exercise 2|Question 4.1.C]]`,
      },
      {
        title: "Part (a)",
        content: `\\text{Let $x,y\\in\\mathbb{R}^n$ be arbitrary and let $U:\\mathbb{R}^n\\to\\mathbb{R}^m$ be an} \\\\
                  \\text{isometric linear transformation. Then} \\\\
                  \\begin{aligned}
                    \\langle Ux,Uy\\rangle &= \\tfrac12\\left(\\lVert Ux+Uy\\rVert^2-\\lVert Ux\\rVert^2-\\lVert Uy\\rVert^2\\right) \\\\
                    &= \\tfrac12\\left(\\lVert U(x+y)\\rVert^2-\\lVert x\\rVert^2-\\lVert y\\rVert^2\\right) \\\\
                    &= \\tfrac12\\left(\\lVert x+y\\rVert^2-\\lVert x\\rVert^2-\\lVert y\\rVert^2\\right) \\\\
                    &= \\langle x,y\\rangle. \\ \\blacksquare
                  \\end{aligned}`,
      },
      {
        title: "Part (b)",
        content: `\\text{Suppose $\\{v_1,\\dots,v_n\\}$ is an [[definition 5|orthonormal]] set in $\\mathbb{R}^m$.} \\\\
                  \\text{Define the linear transformation $U:\\mathbb{R}^n\\to\\mathbb{R}^m$ by} \\\\
                  \\text{$Ux=\\sum_{i=1}^n x_iv_i$ for $x\\in\\mathbb{R}^n$.} \\\\
                  \\text{By [[theorem 2|Lemma 4.1.3]],} \\\\
                  \\lVert Ux\\rVert=\\Big\\lVert\\sum_{i=1}^n x_iv_i\\Big\\rVert=\\Big(\\sum_{i=1}^n x_i^2\\Big)^{1/2}=\\lVert x\\rVert. \\\\
                  \\text{Hence $U$ is isometric.} \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 7,
    chapter: 4,
    section: 1,
    homework: 1,
    title: "Question 4.1.K",
    problem: `\\text{Let $M$ be a subspace of $\\mathbb{R}^n$ with an orthonormal basis} \\\\
              \\text{$\\{v_1,\\dots,v_k\\}$.} \\\\
             \\text{Define a linear transformation on $\\mathbb{R}^n$ by} \\\\
             Px=\\sum_{i=1}^k\\langle x,v_i\\rangle v_i. \\\\[0.5em]
             \\text{(a) Show that $Px$ belongs to $M$, and $Py=y$ for all} \\\\
             \\text{$y\\in M$. Hence show that $P^2=P$.} \\\\
             \\text{(b) Show that $\\langle Px,x-Px\\rangle=0$.} \\\\
             \\text{(c) Hence show that $\\lVert x\\rVert^2=\\lVert Px\\rVert^2+\\lVert x-Px\\rVert^2$.} \\\\
             \\text{(d) If $y\\in M$, show that} \\\\
             \\text{$\\lVert x-y\\rVert^2=\\lVert y-Px\\rVert^2+\\lVert x-Px\\rVert^2$.} \\\\
             \\text{(e) Hence show that $Px$ is the closest point in $M$ to $x$.}`,
    solution: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 3|Inner product]] \\\\
                  \\text{2) } [[definition 1|Norm]] \\\\
                  \\text{3) } [[definition 5|Orthonormal]] \\\\
                  \\text{4) } [[definition 6|Orthonormal basis]] \\\\
                  \\text{5) } [[theorem 2|Lemma 4.1.3]]`,
      },
      {
        title: "Part (a)",
        content: `\\text{\\textit{Idea.} $P$ sends any vector in $\\mathbb{R}^n$ to a linear combination of} \\\\
                  \\text{$\\{v_1,\\dots,v_k\\}$, and by orthonormality} \\\\
                  \\text{it sends a linear combination of $\\{v_1,\\dots,v_k\\}$ to the same} \\\\
                  \\text{vector.} \\\\[1em]
                  \\text{Let $x\\in\\mathbb{R}^n$ and $y\\in M$, where $M\\subseteq\\mathbb{R}^n$ has orthonormal} \\\\
                  \\text{basis $\\{v_1,\\dots,v_k\\}$.} \\\\
                  \\text{The linear transformation $Px=\\sum_{i=1}^k\\langle x,v_i\\rangle v_i$ outputs a} \\\\
                  \\text{linear combination of the basis elements of $M$.} \\\\
                  \\text{Therefore $Px\\in M$, because $Px\\in\\operatorname{span}\\{v_1,\\dots,v_k\\}$.} \\\\
                  \\text{Our $y\\in M$ is also a linear combination of $\\{v_1,\\dots,v_k\\}$, so} \\\\
                  y=a_1v_1+a_2v_2+\\cdots+a_kv_k=\\sum_{j=1}^k a_jv_j, \\quad a_1,\\dots,a_k\\in\\mathbb{R}. \\\\
                  \\text{Consider $Py=\\sum_{i=1}^k\\big\\langle \\sum_{j=1}^k a_jv_j,\\,v_i\\big\\rangle v_i$. By [[definition 5|orthonormality]]} \\\\
                  \\text{of $\\{v_1,\\dots,v_k\\}$,} \\\\
                  \\Big\\langle\\sum_{j=1}^k a_jv_j,\\,v_i\\Big\\rangle = \\begin{cases} a_i, & j=i, \\\\ 0, & j\\neq i, \\end{cases} \\\\
                  \\text{i.e. the inner product equals $a_i$. Therefore} \\\\
                  Py=\\sum_{i=1}^k\\langle y,v_i\\rangle v_i=\\sum_{i=1}^k a_iv_i=y. \\\\
                  \\text{Finally, for any $x\\in\\mathbb{R}^n$ we have shown $Px\\in M$, so by our} \\\\
                  \\text{second result $P(Px)=Px$,} \\\\
                  \\text{i.e. $P^2x=Px$. Hence $P^2=P$.} \\ \\blacksquare`,
      },
      {
        title: "Part (b)",
        content: `\\text{Let $x\\in\\mathbb{R}^n$ be arbitrary. Observe that} \\\\
                  \\begin{aligned}
                    \\langle Px,x-Px\\rangle &= \\langle Px,x\\rangle-\\langle Px,Px\\rangle \\\\
                    &= \\langle Px,x\\rangle-\\lVert Px\\rVert^2 \\\\
                    &= \\langle Px,x\\rangle-\\Big\\lVert\\sum_{i=1}^k\\langle x,v_i\\rangle v_i\\Big\\rVert^2 \\\\
                    &= \\langle Px,x\\rangle-\\left(\\Big(\\sum_{i=1}^k\\langle x,v_i\\rangle^2\\Big)^{1/2}\\right)^2 \\\\
                    &\\qquad (\\text{by [[theorem 2|Lemma 4.1.3]]}) \\\\
                    &= \\langle Px,x\\rangle-\\sum_{i=1}^k\\langle x,v_i\\rangle^2 \\\\
                    &= \\Big\\langle\\sum_{i=1}^k\\langle x,v_i\\rangle v_i,\\;x\\Big\\rangle-\\sum_{i=1}^k\\langle x,v_i\\rangle^2 \\\\
                    &= \\sum_{i=1}^k\\langle \\langle x,v_i\\rangle v_i,x\\rangle-\\sum_{i=1}^k\\langle x,v_i\\rangle^2 \\\\
                    &\\qquad (\\text{by [[definition 3|linearity of the inner product]]}) \\\\
                    &= \\sum_{i=1}^k\\langle x,v_i\\rangle\\langle x,v_i\\rangle-\\sum_{i=1}^k\\langle x,v_i\\rangle^2 \\\\
                    &= 0. \\ \\blacksquare
                  \\end{aligned} \\\\[1em]
                  \\text{\\textit{Remark.} I kept the $\\langle\\cdot,\\cdot\\rangle$ notation, but for the later steps I} \\\\
                  \\text{got my intuition from thinking} \\\\
                  \\text{with “$\\cdot$” distributed into the sum.}`,
      },
      {
        title: "Part (c)",
        content: `\\text{First observe that} \\\\
                  \\begin{aligned}
                    \\lVert x-Px\\rVert^2 &= \\langle x-Px,x-Px\\rangle \\\\
                    &= \\langle x,x-Px\\rangle-\\langle Px,x-Px\\rangle \\\\
                    &= \\langle x,x\\rangle-\\langle x,Px\\rangle-\\langle Px,x\\rangle+\\langle Px,Px\\rangle \\\\
                    &= \\langle x,x\\rangle-\\langle x,Px\\rangle,
                  \\end{aligned} \\\\
                  \\text{because part (b) showed that $\\langle Px,x\\rangle=\\langle Px,Px\\rangle$ (so those} \\\\
                  \\text{two terms cancel).} \\\\
                  \\text{So we have $\\lVert x-Px\\rVert^2=\\lVert x\\rVert^2-\\langle Px,x\\rangle$, and by using our} \\\\
                  \\text{identity from (b) again,} \\\\
                  \\text{$\\langle Px,x\\rangle=\\lVert Px\\rVert^2$, we get} \\\\
                  \\lVert x-Px\\rVert^2=\\lVert x\\rVert^2-\\lVert Px\\rVert^2. \\\\
                  \\text{Thus $\\lVert x\\rVert^2=\\lVert Px\\rVert^2+\\lVert x-Px\\rVert^2$.} \\ \\blacksquare`,
      },
      {
        title: "Part (d)",
        content: `\\text{Let $y\\in M$. From part (c), $\\lVert x\\rVert^2=\\lVert Px\\rVert^2+\\lVert x-Px\\rVert^2$ for} \\\\
                  \\text{every $x\\in\\mathbb{R}^n$.} \\\\
                  \\text{Replace $x$ with $x-y$ to get} \\\\
                  \\lVert x-y\\rVert^2=\\lVert P(x-y)\\rVert^2+\\lVert x-y-P(x-y)\\rVert^2. \\\\
                  \\text{By linearity of $P$,} \\\\
                  \\lVert x-y\\rVert^2=\\lVert Px-Py\\rVert^2+\\lVert x-y-Px+Py\\rVert^2. \\\\
                  \\text{From part (a) we know $Py=y$, so} \\\\
                  \\lVert x-y\\rVert^2=\\lVert Px-y\\rVert^2+\\lVert x-\\cancel{y}-Px+\\cancel{y}\\rVert^2 \\\\
                  \\;\\Longrightarrow\\; \\lVert x-y\\rVert^2=\\lVert Px-y\\rVert^2+\\lVert x-Px\\rVert^2. \\\\
                  \\text{Finally, since $\\lVert a-b\\rVert=\\lVert -(b-a)\\rVert=\\lVert b-a\\rVert$, we have} \\\\
                  \\lVert x-y\\rVert^2=\\lVert y-Px\\rVert^2+\\lVert x-Px\\rVert^2. \\ \\blacksquare`,
      },
      {
        title: "Part (e)",
        content: `\\text{Let $x\\in\\mathbb{R}^n$ and $y\\in M$. From part (d),} \\\\
                  \\text{$\\lVert x-y\\rVert^2=\\lVert y-Px\\rVert^2+\\lVert x-Px\\rVert^2$.} \\\\
                  \\text{We wish to show that $\\lVert x-y\\rVert^2\\ge\\lVert x-Px\\rVert^2$.} \\\\
                  \\text{Note that $\\lVert x-y\\rVert^2$, $\\lVert y-Px\\rVert^2$, $\\lVert x-Px\\rVert^2\\ge0$. So} \\\\
                  \\lVert x-y\\rVert^2-\\lVert y-Px\\rVert^2=\\lVert x-Px\\rVert^2 \\\\
                  \\Longrightarrow\\; \\lVert x-y\\rVert^2\\ge\\lVert x-Px\\rVert^2. \\\\
                  \\text{\\textit{Case 1:} If $\\lVert x-y\\rVert^2>\\lVert x-Px\\rVert^2$, then $Px\\in M$ is closer to} \\\\
                  \\text{$x$ than the arbitrary point $y\\in M$.} \\\\
                  \\text{\\textit{Case 2:} If $\\lVert x-y\\rVert^2=\\lVert x-Px\\rVert^2$, then} \\\\
                  \\text{$\\lVert y-Px\\rVert^2=0\\Rightarrow y=Px$.} \\\\
                  \\text{So any point $y\\in M$ that is equally close to $x$ coincides with} \\\\
                  \\text{$Px$.} \\\\
                  \\text{Hence $Px$ is the closest point in $M$ to $x$.} \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 8,
    chapter: 4,
    section: 2,
    homework: 2,
    title: "Question 4.2.A",
    problem: `\\text{(a) If $(x_n)^{\\infty}_{n=1}$ is a sequence in $\\mathbb{R}^n$ with $\\lim_{n \\to \\infty} \\mathbf{x_n} = \\mathbf{a}$,} \\\\
             \\text{show that $\\lim_{n \\to \\infty} \\lVert \\mathbf{x}_n \\rVert = \\lVert \\mathbf{a} \\rVert$.} \\\\[0.5em]
             \\text{(b) Show by example that the converse is false.}`,
    solution: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 9|Convergence]] \\\\
                  \\text{2) } [[exercise 3|Reverse triangle inequality]]`,
      },
      {
        title: "Part (a)",
        content: `\\text{Choose $\\varepsilon > 0$.} \\\\
                  \\text{By hypothesis, $\\exists N \\in \\mathbb{N}$ s.t. $\\forall n \\geq N, \\ \\lVert \\mathbf{x}_n - \\mathbf{a} \\rVert < \\varepsilon$.} \\\\
                  \\text{By [[exercise 3|reverse triangle inequality]],} \\\\
                  \\text{$| \\lVert \\mathbf{x}_n \\rVert - \\lVert \\mathbf{a} \\rVert | \\leq \\lVert \\mathbf{x}_n - \\mathbf{a} \\rVert < \\varepsilon$.} \\\\
                  \\text{Hence, $\\lim_{n \\to \\infty} \\lVert \\mathbf{x}_n \\rVert = \\lVert \\mathbf{a} \\rVert$.} \\ \\blacksquare`,
      },
      {
        title: "Part (b)",
        content: `\\text{Take the sequence $\\mathbf{x}_n = (-1)^n$ and $\\mathbf{a} = 1.$} \\\\
                  \\text{Then $\\lVert \\mathbf{x}_n \\rVert = 1$ and $\\lim_{n \\to \\infty} \\lVert \\mathbf{x}_n \\rVert = 1 = \\lVert a \\rVert$.} \\\\
                  \\text{However, one subsequence $(\\mathbf{x}_{2k})$ has $\\lim_{k \\to \\infty} \\left( (-1)^{2k} \\right) = 1$,} \\\\
                  \\text{and another subsequence $(\\mathbf{x}_{2k-1})$ has} \\\\
                  \\text{$\\lim_{k \\to \\infty} \\left( (-1)^{2k-1} \\right) = -1$.} \\\\
                  \\text{So $\\lim_{n \\to \\infty} \\mathbf{x}_n$ does not exist} \\\\
                  \\text{because two subsequences of $(\\mathbf{x}_n)$ [[definition 9|converge]] to different} \\\\
                  \\text{limits.} \\\\
                  \\text{Thus, $\\lim_{n \\to \\infty} \\lVert \\mathbf{x}_n \\rVert = \\lVert \\mathbf{a} \\rVert \\nRightarrow \\lim_{n \\to \\infty} \\mathbf{x}_n = \\mathbf{a}$} \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 9,
    chapter: 4,
    section: 2,
    homework: 2,
    title: "Question 4.2.B",
    problem: `\\text{Show that if $(\\mathbf{x}_k)$ is a sequence in $\\mathbb{R}^n$ such that} \\\\
              \\text{$\\sum_{k \\geq 1} \\lVert \\mathbf{x}_k - \\mathbf{x}_{k+1} \\rVert < \\infty$,} \\\\
             \\text{then $(\\mathbf{x}_k)$ is a Cauchy sequence.}`,
    solution: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 10|Cauchy sequence]] \\\\
                  \\text{2) } [[definition 9|Convergence]]`,
      },
      {
        title: "Solution",
        content: `\\text{Let $\\varepsilon > 0$, and with $k \\in \\mathbb{N}$ let $S_k = \\sum_{i=1}^k \\lVert \\mathbf{x}_i - \\mathbf{x}_{i+1} \\rVert$. Set} \\\\
               \\text{$S_0 = 0$.} \\\\
              \\text{By hypothesis, $(S_k)$ [[definition 9|converges]] to some $S \\in \\mathbb{R}$.} \\\\
              \\text{So $\\exists N \\in \\mathbb{N}$ s.t. $| S_k - S | < \\varepsilon/2$ when $k \\geq N$.} \\\\
              \\text{Let $k,l \\geq N+1$. If $k=l$, $\\|\\mathbf{x}_k - \\mathbf{x}_l \\| = 0 < \\varepsilon$, so WLOG} \\\\
              \\text{$l > k$.} \\\\
              \\begin{aligned}
                \\lVert \\mathbf{x}_k - \\mathbf{x}_l \\rVert &\\leq \\lVert \\mathbf{x}_k - \\mathbf{x}_{k+1} \\rVert + \\lVert \\mathbf{x}_{k+1} - \\mathbf{x}_{k+2} \\rVert \\\\
                &\\quad + \\dots + \\lVert \\mathbf{x}_{l-1} - \\mathbf{x}_{l} \\rVert \\\\
                &= S_{l-1} - S_{k-1} \\\\
                &= S_{l-1} - S + S - S_{k-1} \\\\
                &\\leq |S_{l-1} - S| + |S - S_{k-1}| \\\\
                &= |S_{l-1} - S| + |S_{k-1} - S| \\\\
                &< \\frac{\\varepsilon}{2} + \\frac{\\varepsilon}{2} = \\varepsilon \\\\
                &\\qquad (\\text{Since } k-1, l-1 \\geq N).
              \\end{aligned} \\\\
              \\text{Hence, $\\| \\mathbf{x}_k - \\mathbf{x}_l \\| < \\varepsilon$ whenever $k, l \\geq N+1,$ so $(\\mathbf{x}_k)$ is} \\\\
              \\text{[[definition 10|Cauchy]].} \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 10,
    chapter: 4,
    section: 2,
    homework: 2,
    title: "Question 4.2.D",
    problem: `\\text{Let $x_0 \\in \\mathbb{R}^n$ and $R > 0$. Prove that} \\\\
              \\text{$\\{x \\in \\mathbb{R}^n : \\|\\mathbf{x} - \\mathbf{x_0}\\| \\leq R \\}$ is complete.}`,
    solution: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 10|Cauchy sequence]] \\\\
                  \\text{2) } [[definition 11|Complete]] \\\\
                  \\text{3) } [[theorem 7|Completeness Theorem for $\\mathbb{R}^n$]] \\\\
                  \\text{4) } [[theorem 3|Triangle inequality]] \\\\
                  \\text{5) } [[theorem 4|Lemma 4.2.2]]`,
      },
      {
        title: "Solution",
        content: `\\text{Say $S = \\{ x \\in \\mathbb{R}^n : \\|\\mathbf{x} - \\mathbf{x}_0 \\| \\leq R \\}$.} \\\\
              \\text{Let $\\varepsilon > 0$ and let $(\\mathbf{x}_k)$ be a [[definition 10|cauchy sequence]] in $S$.} \\\\
              \\text{Then $(\\mathbf{x}_k)$ is convergent in $\\mathbb{R}^n$, since $\\mathbb{R}^n$ is [[theorem 7|complete]].} \\\\
              \\text{So $\\exists \\mathbf{a} \\in \\mathbb{R}^n$ s.t. $\\lim_{k \\to \\infty} \\mathbf{x}_{k} = \\mathbf{a}$. Now to show $\\mathbf{a} \\in S$,} \\\\
              \\text{observe $\\|\\mathbf{a} - \\mathbf{x}_0 \\| \\leq \\| \\mathbf{a} - \\mathbf{x}_k \\| + \\|\\mathbf{x}_k - \\mathbf{x}_0 \\| \\leq \\|\\mathbf{x}_k - \\mathbf{a} \\| + R$.} \\\\
              \\text{By [[theorem 4|Lemma 4.2.2]], $\\lim_{k \\to \\infty} \\mathbf{x}_k = \\mathbf{a}$ implies} \\\\
              \\text{$\\lim_{k \\to \\infty} \\|\\mathbf{x}_k - \\mathbf{a} \\| = 0$.} \\\\
              \\text{Since $\\|\\mathbf{a} - \\mathbf{x}_0\\|$ does not depend on $k$, letting $k \\to \\infty$ in the} \\\\
              \\text{inequality above gives} \\\\
              \\text{$\\|\\mathbf{a} - \\mathbf{x}_0 \\| \\leq 0 + R$, and thus, $\\mathbf{a} \\in S$.} \\\\
              \\text{Hence, $(\\mathbf{x}_k)$ is convergent in S.} \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 11,
    chapter: 4,
    section: 2,
    homework: 2,
    title: "Question 4.2.E",
    problem: `\\text{Let $M$ be a subspace of $\\mathbb{R}^n$.} \\\\[0.5em]
             \\text{(a) Let $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_m\\}$ be an orthonormal basis for $M$.} \\\\
             \\text{Formulate an analogue of Lemma 4.2.3 for $M$ and} \\\\
             \\text{prove it.} \\\\[0.5em]
             \\text{(b) Prove that $M$ is complete.}`,
    solution: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 5|Orthonormal]] \\\\
                  \\text{2) } [[definition 6|Orthonormal basis]] \\\\
                  \\text{3) } [[definition 10|Cauchy sequence]] \\\\
                  \\text{4) } [[definition 11|Complete]] \\\\
                  \\text{5) } [[theorem 1|Cauchy-Schwarz]] \\\\
                  \\text{6) } [[theorem 5|Lemma 4.2.3]]`,
      },
      {
        title: "Part (a)",
        content: `\\text{First we record the coordinate formula. Since} \\\\
                  \\text{$M = \\operatorname{span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_m\\}$,} \\\\
                  \\text{every $\\mathbf{x} \\in M$ can be written as $\\mathbf{x} = \\sum_{i=1}^m c_i \\mathbf{v}_i$, and for each} \\\\
                  \\text{$j \\in \\{1, \\dots, m\\}$,} \\\\
                  \\langle \\mathbf{x}, \\mathbf{v}_j \\rangle = \\Big\\langle \\sum_{i=1}^m c_i \\mathbf{v}_i, \\ \\mathbf{v}_j \\Big\\rangle = \\sum_{i=1}^m c_i \\langle \\mathbf{v}_i, \\mathbf{v}_j \\rangle = c_j, \\\\
                  \\text{since $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_m\\}$ is [[definition 5|orthonormal]]. Therefore} \\\\
                  \\mathbf{x} = \\sum_{i=1}^m \\langle \\mathbf{x}, \\mathbf{v}_i \\rangle \\mathbf{v}_i \\qquad \\text{and} \\\\
                  \\|\\mathbf{x}\\|^2 = \\Big\\langle \\sum_{i=1}^m c_i \\mathbf{v}_i, \\sum_{j=1}^m c_j \\mathbf{v}_j \\Big\\rangle = \\sum_{i=1}^m c_i^2 = \\sum_{i=1}^m |\\langle \\mathbf{x}, \\mathbf{v}_i \\rangle|^2. \\\\[1em]
                  \\textbf{Lemma} \\text{ (analogue of [[theorem 5|Lemma 4.2.3]]).} \\\\
                  \\textit{Let $(\\mathbf{x}_k)$ be a sequence in $M$ and let $\\mathbf{a} \\in M$. Then} \\\\
                  \\textit{$\\lim_{k \\to \\infty} \\mathbf{x}_k = \\mathbf{a}$ if and only if} \\\\
                  \\textit{$\\lim_{k \\to \\infty} \\langle \\mathbf{x}_k, \\mathbf{v}_j \\rangle = \\langle \\mathbf{a}, \\mathbf{v}_j \\rangle$ for every $j \\in \\{1, \\dots, m\\}$.} \\\\[1em]
                  \\text{($\\Rightarrow$) Suppose $\\lim_{k \\to \\infty} \\mathbf{x}_k = \\mathbf{a}$ and let $\\varepsilon > 0$.} \\\\
                  \\text{Then $\\exists N \\in \\mathbb{N}$ s.t. $\\forall k \\geq N$, $\\|\\mathbf{x}_k - \\mathbf{a}\\| < \\varepsilon$.} \\\\
                  \\text{Fix $j \\in \\{1, \\dots, m\\}$. By [[theorem 1|Cauchy-Schwarz]], for all $k \\geq N$,} \\\\
                  \\begin{aligned}
                    |\\langle \\mathbf{x}_k, \\mathbf{v}_j \\rangle - \\langle \\mathbf{a}, \\mathbf{v}_j \\rangle| &= |\\langle \\mathbf{x}_k - \\mathbf{a}, \\mathbf{v}_j \\rangle| \\\\
                    &\\leq \\|\\mathbf{x}_k - \\mathbf{a}\\| \\, \\|\\mathbf{v}_j\\| = \\|\\mathbf{x}_k - \\mathbf{a}\\| < \\varepsilon,
                  \\end{aligned} \\\\
                  \\text{since $\\|\\mathbf{v}_j\\| = 1$. Hence $\\lim_{k \\to \\infty} \\langle \\mathbf{x}_k, \\mathbf{v}_j \\rangle = \\langle \\mathbf{a}, \\mathbf{v}_j \\rangle$ for every $j$.} \\\\[1em]
                  \\text{($\\Leftarrow$) Suppose $\\lim_{k \\to \\infty} \\langle \\mathbf{x}_k, \\mathbf{v}_j \\rangle = \\langle \\mathbf{a}, \\mathbf{v}_j \\rangle$ for every} \\\\
                  \\text{$j \\in \\{1, \\dots, m\\}$, and let $\\varepsilon > 0$.} \\\\
                  \\text{For each $j$ choose $N_j \\in \\mathbb{N}$ s.t. $\\forall k \\geq N_j$,} \\\\
                  |\\langle \\mathbf{x}_k - \\mathbf{a}, \\mathbf{v}_j \\rangle| = |\\langle \\mathbf{x}_k, \\mathbf{v}_j \\rangle - \\langle \\mathbf{a}, \\mathbf{v}_j \\rangle| < \\frac{\\varepsilon}{\\sqrt{m}}. \\\\
                  \\text{Since $(\\mathbf{x}_k) \\subseteq M$ and $\\mathbf{a} \\in M$, and $M$ is a subspace, we have} \\\\
                  \\text{$\\mathbf{x}_k - \\mathbf{a} \\in M$,} \\\\
                  \\text{so the coordinate formula above applies to it:} \\\\
                  \\|\\mathbf{x}_k - \\mathbf{a}\\|^2 = \\sum_{j=1}^m |\\langle \\mathbf{x}_k - \\mathbf{a}, \\mathbf{v}_j \\rangle|^2. \\\\
                  \\text{Set $N = \\max\\{N_1, \\dots, N_m\\}$. Then for all $k \\geq N$,} \\\\
                  \\begin{aligned}
                    \\|\\mathbf{x}_k - \\mathbf{a}\\|^2 &= \\sum_{j=1}^m |\\langle \\mathbf{x}_k - \\mathbf{a}, \\mathbf{v}_j \\rangle|^2 < \\sum_{j=1}^m \\left( \\frac{\\varepsilon}{\\sqrt{m}} \\right)^2 \\\\
                    &= \\sum_{j=1}^m \\frac{\\varepsilon^2}{m} = \\varepsilon^2.
                  \\end{aligned} \\\\
                  \\text{Thus $\\forall k \\geq N$, $\\|\\mathbf{x}_k - \\mathbf{a}\\| < \\varepsilon$, i.e. $\\lim_{k \\to \\infty} \\mathbf{x}_k = \\mathbf{a}$.} \\ \\blacksquare`,
      },
      {
        title: "Part (b)",
        content: `\\text{Suppose $(\\mathbf{x}_k)$ is a [[definition 10|Cauchy sequence]] in $M$, and let $\\varepsilon > 0$.} \\\\
                  \\text{So $\\exists N \\in \\mathbb{N}$ s.t. $\\|\\mathbf{x}_k - \\mathbf{x}_l\\| < \\varepsilon$ whenever $k, l \\geq N$.} \\\\
                  \\text{Fix $j \\in \\{1, \\dots, m\\}$. By [[theorem 1|Cauchy-Schwarz]], for all $k, l \\geq N$,} \\\\
                  |\\langle \\mathbf{x}_k, \\mathbf{v}_j \\rangle - \\langle \\mathbf{x}_l, \\mathbf{v}_j \\rangle| = |\\langle \\mathbf{x}_k - \\mathbf{x}_l, \\mathbf{v}_j \\rangle| \\leq \\|\\mathbf{x}_k - \\mathbf{x}_l\\| < \\varepsilon, \\\\
                  \\text{so the real sequence $\\left( \\langle \\mathbf{x}_k, \\mathbf{v}_j \\rangle \\right)_{k=1}^{\\infty}$ is Cauchy.} \\\\
                  \\text{Since $\\mathbb{R}$ is complete, it converges to some $\\alpha_j \\in \\mathbb{R}$.} \\\\
                  \\text{Define $\\mathbf{a} = \\sum_{j=1}^m \\alpha_j \\mathbf{v}_j$. Then $\\mathbf{a} \\in M$, and by the coordinate} \\\\
                  \\text{formula from part (a),} \\\\
                  \\text{$\\langle \\mathbf{a}, \\mathbf{v}_j \\rangle = \\alpha_j$ for each $j$. Hence} \\\\
                  \\lim_{k \\to \\infty} \\langle \\mathbf{x}_k, \\mathbf{v}_j \\rangle = \\alpha_j = \\langle \\mathbf{a}, \\mathbf{v}_j \\rangle \\qquad \\text{for every } j \\in \\{1, \\dots, m\\}. \\\\
                  \\text{By the Lemma of part (a), $\\lim_{k \\to \\infty} \\mathbf{x}_k = \\mathbf{a}$ with $\\mathbf{a} \\in M$.} \\\\
                  \\text{So every Cauchy sequence in $M$ converges to a limit in $M$,} \\\\
                  \\text{and therefore $M$ is [[definition 11|complete]].} \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 12,
    chapter: 4,
    section: 2,
    homework: 2,
    title: "Question 4.2.F",
    problem: `\\text{Let $\\mathbf{v}_0 = (x_0, y_0)$ with $0 < x_0 < y_0$. Define} \\\\
             \\mathbf{v}_{n+1} = (x_{n+1}, y_{n+1}) = \\left( \\sqrt{x_n y_n}, \\ \\frac{x_n + y_n}{2} \\right) \\\\
             \\text{for all $n \\geq 0$.} \\\\[0.5em]
             \\text{(a) Show by induction that} \\\\
             \\text{$0 < x_n < x_{n+1} < y_{n+1} < y_n$.} \\\\
             \\text{(b) Then estimate $y_{n+1} - x_{n+1}$ in terms of $y_n - x_n$.} \\\\
             \\text{(c) Thereby show that there is a number $c$ such that} \\\\
             \\text{$\\lim_{n \\to \\infty} \\mathbf{v}_n = (c,c)$.}`,
    solution: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 9|Convergence]] \\\\
                  \\text{2) } [[theorem 5|Lemma 4.2.3]]`,
      },
      {
        title: "Part (a)",
        content: `\\text{We induct on the statement $P(n): 0 < x_n < y_n$.} \\\\
                  \\text{\\textbf{Base case} ($n = 0$): $0 < x_0 < y_0$ is given.} \\\\
                  \\text{\\textbf{Inductive step:} assume $0 < x_n < y_n$. We verify each} \\\\
                  \\text{inequality in the chain.} \\\\
                  \\text{First, $x_n > 0$ and $y_n > 0$, so $x_{n+1} = \\sqrt{x_n y_n} > 0$, and} \\\\
                  x_{n+1} = \\sqrt{x_n y_n} > \\sqrt{x_n x_n} = x_n, \\\\
                  \\text{since $y_n > x_n$ and the square root is an increasing function.} \\\\
                  \\text{Next, since $\\sqrt{x_n} \\neq \\sqrt{y_n}$ we have $\\left( \\sqrt{y_n} - \\sqrt{x_n} \\right)^2 > 0$, so} \\\\
                  \\begin{aligned}
                    y_{n+1} - x_{n+1} &= \\frac{x_n + y_n}{2} - \\sqrt{x_n y_n} \\\\
                    &= \\frac{x_n - 2\\sqrt{x_n y_n} + y_n}{2} = \\frac{\\left( \\sqrt{y_n} - \\sqrt{x_n} \\right)^2}{2} > 0,
                  \\end{aligned} \\\\
                  \\text{which gives $x_{n+1} < y_{n+1}$.} \\\\
                  \\text{Finally, since $x_n < y_n$,} \\\\
                  y_{n+1} = \\frac{x_n + y_n}{2} < \\frac{y_n + y_n}{2} = y_n. \\\\
                  \\text{Combining, $0 < x_n < x_{n+1} < y_{n+1} < y_n$. In particular} \\\\
                  \\text{$0 < x_{n+1} < y_{n+1}$, which is $P(n+1)$.} \\\\
                  \\text{By induction, $0 < x_n < x_{n+1} < y_{n+1} < y_n$ holds for all} \\\\
                  \\text{$n \\geq 0$.} \\ \\blacksquare`,
      },
      {
        title: "Part (b)",
        content: `\\text{By part (a), $0 < x_n < y_n$, so $\\sqrt{y_n} - \\sqrt{x_n} > 0$ and $\\sqrt{x_n} > 0$.} \\\\
                  \\text{Hence} \\\\
                  \\text{$\\sqrt{y_n} - \\sqrt{x_n} < \\sqrt{y_n} + \\sqrt{x_n}$, and} \\\\
                  \\begin{aligned}
                    y_{n+1} - x_{n+1} &= \\frac{x_n + y_n}{2} - \\sqrt{x_n y_n} \\\\
                    &= \\frac{x_n - 2\\sqrt{x_n y_n} + y_n}{2} \\\\
                    &= \\frac{\\left( \\sqrt{y_n} - \\sqrt{x_n} \\right)^2}{2} \\\\
                    &< \\frac{\\left( \\sqrt{y_n} + \\sqrt{x_n} \\right) \\left( \\sqrt{y_n} - \\sqrt{x_n} \\right)}{2} \\\\
                    &= \\frac{y_n - x_n}{2}.
                  \\end{aligned} \\\\
                  \\text{So $0 < y_{n+1} - x_{n+1} < \\dfrac{y_n - x_n}{2}$ for all $n \\geq 0$.} \\ \\blacksquare`,
      },
      {
        title: "Part (c)",
        content: `\\text{From part (a) we know, for every $n \\geq 1$,} \\\\
                  0 < x_0 < x_{n-1} < x_n < x_{n+1} < y_{n+1} < y_n < y_{n-1} < y_0. \\\\
                  \\text{Then $(x_n)$ is strictly increasing and bounded above by $y_0$,} \\\\
                  \\text{and $(y_n)$ is strictly decreasing and} \\\\
                  \\text{bounded below by $x_0$. By the Monotone Convergence} \\\\
                  \\text{Theorem, $\\lim_{n \\to \\infty} x_n = c$ and} \\\\
                  \\text{$\\lim_{n \\to \\infty} y_n = d$ for some $c, d \\in \\mathbb{R}$.} \\\\
                  \\text{We claim by induction that $0 < y_n - x_n \\leq \\dfrac{y_0 - x_0}{2^n}$ for all} \\\\
                  \\text{$n \\geq 0$.} \\\\
                  \\text{\\textbf{Base case} ($n=0$): $y_0 - x_0 \\leq \\dfrac{y_0 - x_0}{2^0} = y_0 - x_0$, and it is} \\\\
                  \\text{positive by hypothesis.} \\\\
                  \\text{\\textbf{Inductive step:} assume $0 < y_n - x_n \\leq \\dfrac{y_0 - x_0}{2^n}$. By part} \\\\
                  \\text{(b),} \\\\
                  0 < y_{n+1} - x_{n+1} < \\frac{y_n - x_n}{2} \\leq \\frac{y_0 - x_0}{2^{n+1}}, \\\\
                  \\text{which completes the induction.} \\\\
                  \\text{Note that $\\lim_{n \\to \\infty} \\dfrac{y_0 - x_0}{2^n} = 0$, so by the Squeeze} \\\\
                  \\text{Theorem,} \\\\
                  \\lim_{n \\to \\infty} (y_n - x_n) = 0 = \\lim_{n \\to \\infty} y_n - \\lim_{n \\to \\infty} x_n = d - c \\implies c = d. \\\\
                  \\text{Hence} \\\\
                  \\lim_{n \\to \\infty} \\mathbf{v}_n = \\left( \\lim_{n \\to \\infty} x_n, \\ \\lim_{n \\to \\infty} y_n \\right) = (c,c), \\\\
                  \\text{where the limit of the vector sequence is taken} \\\\
                  \\text{coordinatewise by [[theorem 5|Lemma 4.2.3]].} \\\\
                  \\text{This value $c$ is the arithmetic--geometric mean of $x_0$ and} \\\\
                  \\text{$y_0$.} \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 13,
    chapter: 4,
    section: 2,
    homework: 2,
    title: "Question 4.2.H",
    problem: `\\text{Let } T = \\begin{bmatrix} 5/4 & -1/4 \\\\ 3/4 & 1/4 \\end{bmatrix}\\text{. Set $\\mathbf{x}_n = T^n(1,0)$ for $n \\geq 1$.} \\\\[0.5em]
             \\text{(a) Prove that $(\\mathbf{x}_n)$ converges and find the limit $\\mathbf{y}$.} \\\\
             \\text{(b) Find an explicit $N$ so that $\\|\\mathbf{x}_n - \\mathbf{y}\\| < \\frac{1}{2} 10^{-100}$ for} \\\\
             \\text{all $n \\geq N$.}`,
    solution: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 9|Convergence]] \\\\
                  \\text{2) } [[definition 1|Norm]] \\\\
                  \\text{3) } [[theorem 5|Lemma 4.2.3]]`,
      },
      {
        title: "Part (a)",
        content: `\\text{By way of induction, we show that} \\\\
                  \\mathbf{x}_n = \\left( \\dfrac{3 - 2^{-n}}{2}, \\ \\dfrac{3(1 - 2^{-n})}{2} \\right) \\quad \\text{for all } n \\geq 1. \\\\
                  \\text{\\textbf{Base case} ($n=1$): $\\mathbf{x}_1 = T(1,0) = \\left( \\frac{5}{4}, \\frac{3}{4} \\right)$, and the formula} \\\\
                  \\text{gives} \\\\
                  \\left( \\frac{3 - 2^{-1}}{2}, \\ \\frac{3(1 - 2^{-1})}{2} \\right) = \\left( \\frac{5/2}{2}, \\ \\frac{3/2}{2} \\right) = \\left( \\frac{5}{4}, \\ \\frac{3}{4} \\right). \\quad \\checkmark \\\\
                  \\text{\\textbf{Inductive step:} assume $\\mathbf{x}_n = \\left( \\dfrac{3 - 2^{-n}}{2}, \\ \\dfrac{3(1 - 2^{-n})}{2} \\right)$.} \\\\
                  \\text{Since $\\mathbf{x}_{n+1} = T \\mathbf{x}_n$, the first coordinate of $\\mathbf{x}_{n+1}$ is} \\\\
                  \\begin{aligned}
                    & \\frac{5}{4} \\left( \\frac{3 - 2^{-n}}{2} \\right) - \\frac{1}{4} \\left( \\frac{3(1 - 2^{-n})}{2} \\right) \\\\
                    &= \\frac{5(3 - 2^{-n}) - 3(1 - 2^{-n})}{8} \\\\
                    &= \\frac{15 - 5 \\cdot 2^{-n} - 3 + 3 \\cdot 2^{-n}}{8} \\\\
                    &= \\frac{12 - 2 \\cdot 2^{-n}}{8} \\\\
                    &= \\frac{3 - 2^{-(n+1)}}{2},
                  \\end{aligned} \\\\
                  \\text{and the second coordinate of $\\mathbf{x}_{n+1}$ is} \\\\
                  \\begin{aligned}
                    & \\frac{3}{4} \\left( \\frac{3 - 2^{-n}}{2} \\right) + \\frac{1}{4} \\left( \\frac{3(1 - 2^{-n})}{2} \\right) \\\\
                    &= \\frac{3(3 - 2^{-n}) + 3(1 - 2^{-n})}{8} \\\\
                    &= \\frac{9 - 3 \\cdot 2^{-n} + 3 - 3 \\cdot 2^{-n}}{8} \\\\
                    &= \\frac{12 - 6 \\cdot 2^{-n}}{8} \\\\
                    &= \\frac{3 - 3 \\cdot 2^{-(n+1)}}{2} \\\\
                    &= \\frac{3 \\left( 1 - 2^{-(n+1)} \\right)}{2}.
                  \\end{aligned} \\\\
                  \\text{So the $n+1$ case holds, and the formula is valid for all} \\\\
                  \\text{$n \\geq 1$.} \\\\
                  \\text{Since $\\lim_{n \\to \\infty} 2^{-n} = 0$, each coordinate converges, so by} \\\\
                  \\text{[[theorem 5|Lemma 4.2.3]],} \\\\
                  \\lim_{n \\to \\infty} \\mathbf{x}_n = \\left( \\frac{3}{2}, \\ \\frac{3}{2} \\right) = \\mathbf{y}. \\ \\blacksquare`,
      },
      {
        title: "Part (b)",
        content: `\\text{Observe that} \\\\
                  \\begin{aligned}
                    \\mathbf{x}_n - \\mathbf{y} &= \\left( \\frac{3 - 2^{-n}}{2}, \\ \\frac{3(1 - 2^{-n})}{2} \\right) - \\left( \\frac{3}{2}, \\ \\frac{3}{2} \\right) \\\\
                    &= \\left( \\frac{-2^{-n}}{2}, \\ \\frac{-3 \\cdot 2^{-n}}{2} \\right),
                  \\end{aligned} \\\\
                  \\text{so} \\\\
                  \\|\\mathbf{x}_n - \\mathbf{y}\\| = \\frac{2^{-n}}{2} \\sqrt{1 + 9} = \\frac{\\sqrt{10}}{2} \\, 2^{-n}. \\\\
                  \\text{Set $N = 400$. We show $\\|\\mathbf{x}_n - \\mathbf{y}\\| = \\frac{\\sqrt{10}}{2} 2^{-n} < \\frac{1}{2} 10^{-100}$ for} \\\\
                  \\text{all $n \\geq N$.} \\\\
                  \\text{It suffices to prove the inequality at $n = N$, since $\\frac{\\sqrt{10}}{2} 2^{-n}$ is} \\\\
                  \\text{decreasing in $n$.} \\\\
                  \\text{Cancelling the factor of $\\frac{1}{2}$, the claim is equivalent to} \\\\
                  \\begin{aligned}
                    & \\sqrt{10} \\cdot 2^{-400} < 10^{-100} \\\\
                    \\iff & 16^{-100} < \\frac{10^{-100}}{\\sqrt{10}} \\\\
                    \\iff & \\left( \\frac{16}{10} \\right)^{100} > \\sqrt{10},
                  \\end{aligned} \\\\
                  \\text{using $2^{-400} = \\left( 2^4 \\right)^{-100} = 16^{-100}$.} \\\\
                  \\text{Since $\\frac{16}{10} > 1$, the sequence $\\left( \\frac{16}{10} \\right)^k$ is increasing in $k$, so} \\\\[0.5em]
                  \\left( \\frac{16}{10} \\right)^{100} > \\left( \\frac{16}{10} \\right)^{3} = 4.096 > \\sqrt{10}, \\\\
                  \\text{because $\\sqrt{10} < \\sqrt{16} = 4$.} \\\\
                  \\text{Hence $\\|\\mathbf{x}_n - \\mathbf{y}\\| = \\frac{\\sqrt{10}}{2} 2^{-n} < \\frac{1}{2} 10^{-100}$ whenever $n \\geq 400$.} \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 14,
    homework: 2,
    title: "Additional Problem",
    problem: `\\text{If $(\\mathbf{x}_k) \\subseteq \\mathbb{R}^n$ converges to $\\mathbf{a} \\in \\mathbb{R}^n$ and $\\|\\mathbf{x}_k\\| \\leq 81$ for all} \\\\
              \\text{$k \\in \\mathbb{N}$,} \\\\
             \\text{then $\\|\\mathbf{a}\\| \\leq 81$.}`,
    solution: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 9|Convergence]] \\\\
                  \\text{2) } [[theorem 3|Triangle inequality]]`,
      },
      {
        title: "Solution",
        content: `\\text{By way of contradiction, suppose $\\|\\mathbf{a}\\| > 81$.} \\\\
              \\text{Let $\\varepsilon = \\|\\mathbf{a}\\| - 81 > 0$.} \\\\
              \\text{Since $\\lim_{k \\to \\infty} \\mathbf{x}_k = \\mathbf{a}$, there is some $k \\in \\mathbb{N}$ with} \\\\
              \\text{$\\|\\mathbf{a} - \\mathbf{x}_k\\| < \\varepsilon$.} \\\\
              \\text{For that $k$, the [[theorem 3|triangle inequality]] gives} \\\\
              \\|\\mathbf{a}\\| \\leq \\|\\mathbf{a} - \\mathbf{x}_k\\| + \\|\\mathbf{x}_k\\| < \\varepsilon + 81 = \\|\\mathbf{a}\\|, \\\\
              \\text{so $\\|\\mathbf{a}\\| < \\|\\mathbf{a}\\|$, which is a contradiction.} \\\\
              \\text{Hence $\\|\\mathbf{a}\\| \\leq 81$.} \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 15,
    chapter: 4,
    section: 2,
    title: "Example of Convergence in ℝ²",
    problem: `\\text{Let } \\mathbf{v}_0 = \\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix} \\text{ and define a sequence} \\\\
             \\mathbf{v}_n = \\begin{pmatrix} x_n \\\\ y_n \\end{pmatrix} \\in \\mathbb{R}^2 \\text{ recursively by} \\\\
             x_{n+1} = \\frac{x_n + y_n + 1}{2}, \\quad y_{n+1} = \\frac{x_n - y_n + 1}{2}. \\\\[0.5em]
             \\text{Does } (\\mathbf{v}_n) \\text{ converge?}`,
    solution: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 9|Convergence]] \\\\
                  \\text{2) } [[definition 1|Norm]] \\\\
                  \\text{3) } [[theorem 4|Lemma 4.2.2]]`,
      },
      {
        title: "Finding the limit",
        content: `\\text{The first terms are} \\\\
                  \\mathbf{v}_0 = \\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}\\!, \\ \\mathbf{v}_1 = \\begin{pmatrix} 1/2 \\\\ 1/2 \\end{pmatrix}\\!, \\ \\mathbf{v}_2 = \\begin{pmatrix} 1 \\\\ 1/2 \\end{pmatrix}\\!, \\ \\mathbf{v}_3 = \\begin{pmatrix} 5/4 \\\\ 3/4 \\end{pmatrix}\\!, \\ \\ldots \\\\[0.5em]
                  \\text{Consider the map} \\\\
                  T\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} \\dfrac{x+y+1}{2} \\\\[0.6em] \\dfrac{x-y+1}{2} \\end{pmatrix}. \\\\
                  \\text{We will look for fixed points of $T$ to find} \\\\
                  \\text{what $\\mathbf{v}_n$ \\textit{may} [[definition 9|converge]] to.} \\\\[0.5em]
                  \\text{\\textit{Intuition:} $\\mathbf{v}_{n+1} = T(\\mathbf{v}_n) = T^2(\\mathbf{v}_{n-1})$. Consider} \\\\
                  \\begin{aligned}
                    \\mathbf{v} = \\lim_{n \\to \\infty} \\mathbf{v}_{n+1} &= \\lim_{n \\to \\infty} T(\\mathbf{v}_n) \\\\
                    &= T\\Big(\\lim_{n \\to \\infty} \\mathbf{v}_n\\Big) = T(\\mathbf{v}).
                  \\end{aligned} \\\\[0.5em]
                  \\text{Thus we look for fixed points of $T$.} \\\\
                  \\text{If } \\mathbf{v} = \\begin{pmatrix} x \\\\ y \\end{pmatrix}\\text{, then $T\\mathbf{v} = \\mathbf{v}$ leads to} \\\\
                  \\begin{aligned}
                    \\tfrac{1}{2}x + \\tfrac{1}{2}y + \\tfrac{1}{2} &= x \\\\
                    \\tfrac{1}{2}x - \\tfrac{1}{2}y + \\tfrac{1}{2} &= y
                  \\end{aligned} \\\\
                  \\text{and solving this linear system gives } \\mathbf{v} = \\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}.`,
      },
      {
        title: "Proof",
        content: `\\text{Goal: $\\lim_{n \\to \\infty} \\mathbf{v}_n = \\mathbf{v}$. Now we prove it. Consider} \\\\
                  \\begin{aligned}
                    \\lVert \\mathbf{v}_{n+1} - \\mathbf{v} \\rVert^2 &= \\left\\lVert \\begin{pmatrix} x_{n+1} - 2 \\\\ y_{n+1} - 1 \\end{pmatrix} \\right\\rVert^2 \\\\
                    &= \\left\\lVert \\begin{pmatrix} \\dfrac{x_n + y_n + 1}{2} - 2 \\\\[0.6em] \\dfrac{x_n - y_n + 1}{2} - 1 \\end{pmatrix} \\right\\rVert^2 \\\\
                    &= \\frac{(x_n + y_n - 3)^2 + (x_n - y_n - 1)^2}{4} \\\\
                    &= \\frac{2x_n^2 + 2y_n^2 - 8x_n - 4y_n + 10}{4} \\\\
                    &= \\frac{(x_n - 2)^2 + (y_n - 1)^2}{2} = \\frac{1}{2} \\lVert \\mathbf{v}_n - \\mathbf{v} \\rVert^2.
                  \\end{aligned} \\\\
                  \\text{Thus,} \\\\
                  \\begin{aligned}
                    \\lVert \\mathbf{v}_{n+1} - \\mathbf{v} \\rVert &= \\frac{1}{\\sqrt{2}} \\lVert \\mathbf{v}_n - \\mathbf{v} \\rVert \\\\
                    &= \\frac{1}{\\sqrt{2}} \\left( \\frac{1}{\\sqrt{2}} \\lVert \\mathbf{v}_{n-1} - \\mathbf{v} \\rVert \\right).
                  \\end{aligned} \\\\
                  \\text{By induction,} \\\\
                  \\begin{aligned}
                    \\lVert \\mathbf{v}_n - \\mathbf{v} \\rVert &= \\cdots = \\left( \\frac{1}{\\sqrt{2}} \\right)^n \\lVert \\mathbf{v}_0 - \\mathbf{v} \\rVert \\\\
                    &= \\left( \\frac{1}{\\sqrt{2}} \\right)^n \\sqrt{5},
                  \\end{aligned} \\\\
                  \\text{where $\\frac{1}{\\sqrt{2}} < 1$. So taking limits,} \\\\
                  \\lim_{n \\to \\infty} \\lVert \\mathbf{v}_n - \\mathbf{v} \\rVert = \\lim_{n \\to \\infty} \\left( \\frac{1}{\\sqrt{2}} \\right)^n \\sqrt{5} = 0. \\\\
                  \\text{So by [[theorem 4|Lemma 4.2.2]],} \\\\
                  \\lim_{n \\to \\infty} \\mathbf{v}_n = \\mathbf{v} = \\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}. \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 16,
    chapter: 4,
    section: 3,
    homework: 3,
    title: "Question 4.3.D",
    problem: `\\text{If $A$ is a bounded subset of $\\mathbb{R}$, show that $\\sup A$ and $\\inf A$} \\\\
              \\text{belong to $\\overline{A}$.}`,
    solution: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 14|Closure]] \\\\
                  \\text{2) } [[definition 12|Limit point]]`,
      },
      {
        title: "Solution",
        content: `\\text{Suppose $A$ is a nonempty bounded subset of $\\mathbb{R}$.} \\\\
                  \\text{So $\\exists M > 0$ s.t. $|x| \\leq M$ for all $x \\in A$.} \\\\
                  \\text{By definition, $-M \\leq \\inf(A) \\leq x \\leq \\sup(A) \\leq M$ for all $x \\in A$.} \\\\[0.5em]
                  \\text{\\textit{Case 1:} $\\inf(A), \\sup(A) \\in A$.} \\\\
                  \\text{Then $\\inf(A), \\sup(A) \\in \\overline{A}$ by definition of [[definition 14|closure]].} \\\\[0.5em]
                  \\text{\\textit{Case 2:} $\\inf(A), \\sup(A) \\notin A$.} \\\\
                  \\text{Let $n \\in \\mathbb{N}$. Since $\\sup(A) - \\frac{1}{n}$ is not an upper bound of $A$,} \\\\
                  \\text{by definition of supremum there exists $a_n \\in A$ s.t.} \\\\
                  \\sup(A) - \\frac{1}{n} < a_n < \\sup(A), \\\\
                  \\text{where the second inequality is strict since $\\sup(A) \\notin A$.} \\\\
                  \\text{Since $\\lim_{n \\to \\infty} \\left( \\sup(A) - \\frac{1}{n} \\right) = \\sup(A)$, we get} \\\\
                  \\text{$\\lim_{n \\to \\infty} a_n = \\sup(A)$ by the Squeeze Theorem.} \\\\
                  \\text{Similarly, since $\\inf(A) + \\frac{1}{n}$ is not a lower bound of $A$, by} \\\\
                  \\text{definition of infimum there exists $b_n \\in A$ s.t.} \\\\
                  \\inf(A) < b_n < \\inf(A) + \\frac{1}{n}. \\\\
                  \\text{Since $\\lim_{n \\to \\infty} \\left( \\inf(A) + \\frac{1}{n} \\right) = \\inf(A)$, we get} \\\\
                  \\text{$\\lim_{n \\to \\infty} b_n = \\inf(A)$ by the Squeeze Theorem.} \\\\
                  \\text{Thus $(a_n) \\subseteq A$ and $(b_n) \\subseteq A$ converge to $\\sup(A)$ and $\\inf(A)$} \\\\
                  \\text{respectively, so $\\sup(A), \\inf(A) \\in \\overline{A}$.} \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 17,
    chapter: 4,
    section: 3,
    homework: 3,
    title: "Question 4.3.E",
    problem: `\\text{Show that the interior satisfies $\\operatorname{int} A = (\\overline{A'})'$.}`,
    solution: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 18|Interior]] \\\\
                  \\text{2) } [[definition 17|Open]] \\\\
                  \\text{3) } [[definition 14|Closure]] \\\\
                  \\text{4) } [[definition 12|Limit point]]`,
      },
      {
        title: "Claim",
        content: `\\text{For $S \\subseteq \\mathbb{R}^n$, $x \\in \\overline{S}$ if and only if every open set $U$} \\\\
                  \\text{containing $x$ satisfies $U \\cap S \\neq \\emptyset$.} \\\\[0.5em]
                  \\text{\\textit{Proof of claim.} ($\\Rightarrow$) Suppose $x \\in \\overline{S}$ and let $U$ be open} \\\\
                  \\text{with $x \\in U$. If $x \\in S$, then $x \\in U \\cap S$. Otherwise $x$ is a limit} \\\\
                  \\text{point of $S$, so $U$ contains a point of $S$ other than $x$. Either} \\\\
                  \\text{way, $U \\cap S \\neq \\emptyset$.} \\\\
                  \\text{($\\Leftarrow$) Suppose every open $U \\ni x$ meets $S$. If $x \\in S$, then} \\\\
                  \\text{$x \\in \\overline{S}$. If $x \\notin S$, then for each open $U \\ni x$, any point of} \\\\
                  \\text{$U \\cap S$ is necessarily different from $x$, so $x$ is a limit point} \\\\
                  \\text{of $S$ and hence $x \\in \\overline{S}$.} \\ \\blacksquare`,
      },
      {
        title: "Solution",
        content: `\\text{Let $A \\subseteq \\mathbb{R}^n$, and let $A'$ denote the complement of $A$.} \\\\
                  \\text{Let $x \\in \\mathbb{R}^n$. As shown above, $x \\in \\overline{S}$ if and only if every} \\\\
                  \\text{open set $U$ containing $x$ satisfies $U \\cap S \\neq \\emptyset$. Negating this} \\\\
                  \\text{with $S = A'$, we have} \\\\
                  \\begin{aligned}
                    x \\in (\\overline{A'})' &\\iff x \\notin \\overline{A'} \\\\
                    &\\iff \\exists \\text{ an open set } U \\text{ s.t. } x \\in U \\text{ and } U \\cap A' = \\emptyset \\\\
                    &\\iff \\exists \\text{ an open set } U \\text{ s.t. } x \\in U \\subseteq A \\\\
                    &\\iff x \\in \\operatorname{int} A,
                  \\end{aligned} \\\\
                  \\text{where the last equivalence is the definition of [[definition 18|interior]].} \\\\
                  \\text{Hence $\\operatorname{int} A = (\\overline{A'})'$.} \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 18,
    chapter: 4,
    section: 3,
    homework: 3,
    title: "Question 4.3.H",
    problem: `\\text{Show that a subset of $\\mathbb{R}^n$ is complete if and only if it is} \\\\
              \\text{closed.}`,
    solution: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 11|Complete]] \\\\
                  \\text{2) } [[definition 13|Closed]] \\\\
                  \\text{3) } [[theorem 6|Convergent sequences are Cauchy]] \\\\
                  \\text{4) } [[theorem 7|Completeness of $\\mathbb{R}^n$]]`,
      },
      {
        title: "Solution",
        content: `\\text{Let $A \\subseteq \\mathbb{R}^n$. Recall that $A$ is closed if and only if the} \\\\
                  \\text{limit of every convergent sequence in $A$ belongs to $A$.} \\\\[0.5em]
                  \\text{($\\Rightarrow$) Suppose $A$ is complete, and let $(\\mathbf{x}_k) \\subseteq A$ be a} \\\\
                  \\text{sequence with $\\lim_{k \\to \\infty} \\mathbf{x}_k = \\mathbf{x} \\in \\mathbb{R}^n$.} \\\\
                  \\text{Since $(\\mathbf{x}_k)$ is convergent, it is [[theorem 6|Cauchy]]. Since $A$ is complete,} \\\\
                  \\text{$(\\mathbf{x}_k)$ converges to some $\\mathbf{a} \\in A$.} \\\\
                  \\text{Since limits of sequences are unique, $\\mathbf{x} = \\mathbf{a} \\in A$.} \\\\
                  \\text{So the limit of every convergent sequence in $A$ belongs to} \\\\
                  \\text{$A$, and hence $A$ is closed.} \\\\[0.5em]
                  \\text{($\\Leftarrow$) Suppose $A$ is closed, and let $(\\mathbf{x}_k) \\subseteq A$ be a Cauchy} \\\\
                  \\text{sequence. Since $\\mathbb{R}^n$ is [[theorem 7|complete]], $(\\mathbf{x}_k)$ converges to some} \\\\
                  \\text{$\\mathbf{x} \\in \\mathbb{R}^n$.} \\\\
                  \\text{Since $(\\mathbf{x}_k) \\subseteq A$ is convergent and $A$ is closed, $\\mathbf{x} \\in A$.} \\\\
                  \\text{So every Cauchy sequence in $A$ converges to a limit in $A$,} \\\\
                  \\text{and hence $A$ is complete.} \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 19,
    chapter: 4,
    section: 3,
    homework: 3,
    title: "Question 4.3.I",
    problem: `\\text{Prove Proposition 4.3.9 using Theorem 4.3.8 and} \\\\
              \\text{Proposition 4.3.3.}`,
    solution: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 17|Open]] \\\\
                  \\text{2) } [[theorem 10|Theorem 4.3.8]] \\\\
                  \\text{3) } [[theorem 8|Proposition 4.3.3]]`,
      },
      {
        title: "Intersection of two sets",
        content: `\\text{Let $U, V \\subseteq \\mathbb{R}^n$ be open.} \\\\
                  \\text{By Theorem 4.3.8, $U'$ and $V'$ are closed.} \\\\
                  \\text{By [[theorem 8|Proposition 4.3.3]], $U' \\cup V'$ is closed.} \\\\
                  \\text{By De Morgan's law, $U' \\cup V' = (U \\cap V)'$, so $(U \\cap V)'$ is closed.} \\\\
                  \\text{Hence by Theorem 4.3.8, $U \\cap V$ is open.} \\ \\blacksquare`,
      },
      {
        title: "Arbitrary unions",
        content: `\\text{Let $\\{U_i : i \\in I\\}$ be a family of open subsets of $\\mathbb{R}^n$.} \\\\
                  \\text{By Theorem 4.3.8, $U_i' = \\mathbb{R}^n \\setminus U_i$ is closed for each $i \\in I$.} \\\\
                  \\text{By [[theorem 8|Proposition 4.3.3]], $\\bigcap_{i \\in I} U_i'$ is closed.} \\\\
                  \\text{By De Morgan's law,} \\\\
                  \\begin{aligned}
                    \\bigcap_{i \\in I} U_i' &= \\bigcap_{i \\in I} \\left( \\mathbb{R}^n \\setminus U_i \\right) \\\\
                    &= \\mathbb{R}^n \\setminus \\left( \\bigcup_{i \\in I} U_i \\right) = \\left( \\bigcup_{i \\in I} U_i \\right)',
                  \\end{aligned} \\\\
                  \\text{so $\\left( \\bigcup_{i \\in I} U_i \\right)'$ is closed.} \\\\
                  \\text{Hence by Theorem 4.3.8, $\\bigcup_{i \\in I} U_i$ is open.} \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 20,
    chapter: 4,
    section: 3,
    homework: 3,
    title: "Question 4.3.J",
    problem: `\\text{Show that if $U$ is open and $A$ is closed, then} \\\\
              U \\setminus A = \\{ \\mathbf{x} \\in U : \\mathbf{x} \\notin A \\} \\text{ is open.} \\\\
              \\text{What can be said about $A \\setminus U$?}`,
    solution: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 17|Open]] \\\\
                  \\text{2) } [[definition 13|Closed]] \\\\
                  \\text{3) } [[theorem 10|Theorem 4.3.8]] \\\\
                  \\text{4) } [[theorem 8|Proposition 4.3.3]] \\\\
                  \\text{5) } [[theorem 11|Proposition 4.3.9]]`,
      },
      {
        title: "U \\ A is open",
        content: `\\text{Suppose $U \\subseteq \\mathbb{R}^n$ is open and $A \\subseteq \\mathbb{R}^n$ is closed.} \\\\
                  \\text{By Theorem 4.3.8, $A'$ is open. Observe that} \\\\
                  U \\setminus A = \\{ \\mathbf{x} \\in \\mathbb{R}^n : \\mathbf{x} \\in U \\text{ and } \\mathbf{x} \\notin A \\} = U \\cap A'. \\\\
                  \\text{Since $U$ and $A'$ are both open, $U \\cap A'$ is open by} \\\\
                  \\text{[[theorem 11|Proposition 4.3.9]]. Hence $U \\setminus A$ is open.} \\ \\blacksquare`,
      },
      {
        title: "A \\ U is closed",
        content: `\\text{By Theorem 4.3.8, $U'$ is closed. Observe that} \\\\
                  A \\setminus U = \\{ \\mathbf{x} \\in \\mathbb{R}^n : \\mathbf{x} \\in A \\text{ and } \\mathbf{x} \\notin U \\} = A \\cap U'. \\\\
                  \\text{Since $A$ and $U'$ are both closed, $A \\cap U'$ is closed by} \\\\
                  \\text{[[theorem 8|Proposition 4.3.3]]. Hence $A \\setminus U$ is closed.} \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 21,
    chapter: 4,
    section: 3,
    homework: 3,
    title: "Question 4.3.M",
    problem: `\\text{Suppose that $A$ is a dense subset of $\\mathbb{R}^n$.} \\\\
              \\text{(a) Show that if $U$ is open in $\\mathbb{R}^n$, then $A \\cap U$ is dense in $U$.} \\\\
              \\text{(b) Show by example that this may fail for sets that are} \\\\
              \\text{not open.}`,
    solution: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 15|Dense]] \\\\
                  \\text{2) } [[definition 14|Closure]] \\\\
                  \\text{3) } [[definition 17|Open]]`,
      },
      {
        title: "Part (a)",
        content: `\\text{Recall that $A$ is dense in $\\mathbb{R}^n$ means $\\overline{A} = \\mathbb{R}^n$, i.e. every} \\\\
                  \\text{$\\mathbf{x} \\in \\mathbb{R}^n$ is the limit of a sequence in $A$.} \\\\
                  \\text{Suppose $U \\subseteq \\mathbb{R}^n$ is open. To show $A \\cap U$ is dense in $U$, we} \\\\
                  \\text{show $U \\subseteq \\overline{A \\cap U}$.} \\\\
                  \\text{Let $\\mathbf{x} \\in U$. Since $A$ is dense, there is a sequence $(\\mathbf{a}_k) \\subseteq A$} \\\\
                  \\text{with $\\lim_{k \\to \\infty} \\mathbf{a}_k = \\mathbf{x}$.} \\\\
                  \\text{Since $U$ is open, $\\exists r > 0$ s.t. $B_r(\\mathbf{x}) \\subseteq U$.} \\\\
                  \\text{Since $\\mathbf{a}_k \\to \\mathbf{x}$, $\\exists N \\in \\mathbb{N}$ s.t. $\\forall k \\geq N$, $\\lVert \\mathbf{a}_k - \\mathbf{x} \\rVert < r$,} \\\\
                  \\text{so $\\mathbf{a}_k \\in B_r(\\mathbf{x}) \\subseteq U$.} \\\\
                  \\text{Then $(\\mathbf{a}_k)_{k \\geq N} \\subseteq A \\cap U$ and $\\lim_{k \\to \\infty} \\mathbf{a}_k = \\mathbf{x}$, so} \\\\
                  \\text{$\\mathbf{x} \\in \\overline{A \\cap U}$.} \\\\
                  \\text{Since $\\mathbf{x} \\in U$ was arbitrary, $A \\cap U$ is dense in $U$.} \\ \\blacksquare`,
      },
      {
        title: "Part (b)",
        content: `\\text{Let $A = \\mathbb{Q}^n$ and $U = \\mathbb{R}^n \\setminus \\mathbb{Q}^n$.} \\\\[0.5em]
                  \\text{\\textit{$A$ is dense in $\\mathbb{R}^n$:} given $\\mathbf{x} = (x_1, \\ldots, x_n) \\in \\mathbb{R}^n$, choose} \\\\
                  \\text{$q_{i,k} \\in \\mathbb{Q}$ with $|q_{i,k} - x_i| < \\frac{1}{k}$ for each $i$, and set} \\\\
                  \\text{$\\mathbf{q}_k = (q_{1,k}, \\ldots, q_{n,k}) \\in \\mathbb{Q}^n$. Then} \\\\
                  \\lVert \\mathbf{q}_k - \\mathbf{x} \\rVert < \\frac{\\sqrt{n}}{k} \\to 0, \\\\
                  \\text{so $\\mathbf{x} \\in \\overline{A}$.} \\\\[0.5em]
                  \\text{\\textit{$U$ is not open:} $U \\neq \\emptyset$ (e.g. $(\\sqrt{2}, \\ldots, \\sqrt{2}) \\in U$), and by the} \\\\
                  \\text{argument above every point of $U$ is a limit of points of} \\\\
                  \\text{$\\mathbb{Q}^n$, so every ball around a point of $U$ contains a point} \\\\
                  \\text{of $\\mathbb{Q}^n$ and hence is not contained in $U$.} \\\\[0.5em]
                  \\text{However, $A \\cap U = \\emptyset$, and the empty set has no sequences,} \\\\
                  \\text{so $\\overline{A \\cap U} = \\emptyset$.} \\\\
                  \\text{Since $U \\neq \\emptyset$, we get $U \\not\\subseteq \\overline{A \\cap U}$, so $A \\cap U$ is not} \\\\
                  \\text{dense in $U$.} \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 22,
    chapter: 4,
    section: 4,
    homework: 4,
    title: "Question 4.4.B",
    problem: `\\text{Example where CIT isn't true because cpt sets are replaced} \\\\
              \\text{by closed sets.}`,
    solution: [
      {
        title: "Recall",
        content: `\\text{1) } [[theorem 18|Cantor's Intersection Theorem]] \\\\
                  \\text{2) } [[definition 13|Closed]] \\\\
                  \\text{3) } [[definition 19|Compact]]`,
      },
      {
        title: "Solution",
        content: `\\text{Take $(A_k) \\subseteq \\mathbb{R}$ where $\\forall k \\in \\mathbb{N}$, $A_k = [k, \\infty)$.} \\\\
                  \\text{This is decreasing because $A_{k+1} \\subseteq A_k$} \\\\
                  \\text{(and $k \\in A_k$ but $k \\notin A_{k+1}$).} \\\\
                  \\text{Each $A_k$ is nonempty because $k \\in A_k$.} \\\\
                  \\text{Each $A_k$ is closed because $A_k^c = (-\\infty, k)$ is open.} \\\\
                  \\text{However, if $x \\in \\bigcap_{k \\geq 1} A_k$, then $x \\geq k$ $\\forall k \\in \\mathbb{N}$,} \\\\
                  \\text{which isn't possible by the archimedean property.} \\\\
                  \\text{Hence $\\bigcap_{k \\geq 1} A_k = \\emptyset$.} \\ \\blacksquare \\\\[1em]
                  \\text{Remember this picture:} \\\\
                  [1, \\infty) \\supseteq [2, \\infty) \\supseteq [3, \\infty) \\supseteq \\cdots \\\\
                  \\text{on the number line.}`,
      },
    ],
  },
  {
    number: 23,
    chapter: 4,
    section: 4,
    homework: 4,
    title: "Question 4.4.C",
    problem: `\\text{The union of finitely many cpt sets is cpt.}`,
    solution: [
      {
        title: "Recall",
        content: `\\text{1) } [[theorem 17|Heine–Borel]] \\\\
                  \\text{2) } [[definition 20|Bounded]] \\\\
                  \\text{3) } [[theorem 8|Unions of closed sets]]`,
      },
      {
        title: "Solution",
        content: `\\text{Let $A_1, \\ldots, A_m \\subseteq \\mathbb{R}^n$ be cpt.} \\\\
                  \\text{By [[theorem 17|Heine–Borel]] $A_1, \\ldots, A_m$ are closed and bounded.} \\\\
                  \\text{In particular, $\\forall i \\in \\{1, \\ldots, m\\}$, $\\exists r_i > 0$ s.t.} \\\\
                  \\text{$A_i \\subseteq B_{r_i}(\\mathbf{0})$. Choose $R = \\max\\{r_1, \\ldots, r_m\\}$.} \\\\
                  \\text{Then $\\bigcup_{i=1}^m A_i \\subseteq B_R(\\mathbf{0})$.} \\\\
                  \\text{$\\forall i \\in \\{1, \\ldots, m\\}$, $A_i$ is closed by Heine–Borel.} \\\\
                  \\text{Since finite unions of closed sets are closed,} \\\\
                  \\text{$\\bigcup_{i=1}^m A_i$ is closed.} \\\\
                  \\text{By Heine–Borel, $\\bigcup_{i=1}^m A_i$ is compact.} \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 24,
    chapter: 4,
    section: 4,
    homework: 4,
    title: "Question 4.4.D",
    problem: `\\text{Intersection of a family of cpt sets is cpt.}`,
    solution: [
      {
        title: "Recall",
        content: `\\text{1) } [[theorem 17|Heine–Borel]] \\\\
                  \\text{2) } [[definition 20|Bounded]] \\\\
                  \\text{3) } [[theorem 8|Intersections of closed sets]]`,
      },
      {
        title: "Solution",
        content: `\\text{Let $A_i \\subseteq \\mathbb{R}^n$ be cpt $\\forall i \\in I$,} \\\\
                  \\text{where $I$ is some (nonempty) index set.} \\\\
                  \\text{By [[theorem 17|Heine–Borel]], $\\forall i \\in I$ $A_i$ is closed and bounded.} \\\\
                  \\text{That is, $\\forall i \\in I$ $\\exists r_i > 0$ s.t. $A_i \\subseteq B_{r_i}(\\mathbf{0})$.} \\\\
                  \\text{Fix any $i_0 \\in I$.} \\\\
                  \\text{Then $\\bigcap_{i \\in I} A_i \\subseteq A_{i_0} \\subseteq B_{r_{i_0}}(\\mathbf{0})$.} \\\\
                  \\text{Since $\\forall i \\in I$ $A_i$ closed and} \\\\
                  \\text{closed sets are closed under arbitrary intersections,} \\\\
                  \\text{$\\bigcap_{i \\in I} A_i$ is closed.} \\\\
                  \\text{Hence $\\bigcap_{i \\in I} A_i$ is cpt by Heine–Borel.} \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 25,
    chapter: 4,
    section: 4,
    homework: 4,
    title: "Question 4.4.E(a)",
    problem: `\\text{Show that the sum of a closed subset and a cpt subset of} \\\\
              \\text{$\\mathbb{R}^n$ is closed. Recall} \\\\
              A + B = \\{ a + b : a \\in A \\text{ and } b \\in B \\}.`,
    solution: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 13|Closed]] \\\\
                  \\text{2) } [[definition 14|Closure]] \\\\
                  \\text{3) } [[definition 19|Compact]]`,
      },
      {
        title: "Solution",
        content: `\\text{Let $A \\subseteq \\mathbb{R}^n$ closed and $B \\subseteq \\mathbb{R}^n$ cpt.} \\\\
                  \\text{WTS $A + B = \\{a + b : a \\in A, b \\in B\\}$ closed.} \\\\
                  \\text{That is, WTS $\\overline{A + B} \\subseteq A + B$.} \\\\
                  \\text{Let $x \\in \\overline{A + B}$. Then we can take $(x_k) \\subseteq A + B$,} \\\\
                  \\text{$(a_k) \\subseteq A$, $(b_k) \\subseteq B$ with $x_k = a_k + b_k$ s.t. $x_k \\to x$.} \\\\
                  \\text{Since $B$ cpt, $\\exists (b_{k_j}) \\subseteq B$ s.t. $b_{k_j} \\to b \\in B$.} \\\\
                  \\text{Since $x_k \\to x$, every subsequence $x_{k_j}$ converges to $x$.} \\\\
                  \\text{So can rewrite $x_k$ as $a_{k_j} = x_{k_j} - b_{k_j}$} \\\\
                  \\text{with $a_{k_j} \\to x - b$.} \\\\
                  \\text{Since $(a_{k_j}) \\subseteq A$ and $A$ closed, $x - b \\in A$.} \\\\
                  \\text{Call $x - b = a$.} \\\\
                  \\text{So $x = a + b \\in A + B$ for some $a \\in A$ and $b \\in B$.} \\\\
                  \\text{Hence, $\\overline{A + B} \\subseteq A + B$, and thus, $A + B$ closed.} \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 26,
    chapter: 4,
    section: 4,
    homework: 4,
    title: "Question 4.4.F",
    problem: `\\text{Let $(x_k)_{k=1}^\\infty \\subseteq A$ with $A \\subseteq \\mathbb{R}^n$ cpt s.t. $(x_k)$ is not} \\\\
              \\text{convergent. Show there are two subsequences that are} \\\\
              \\text{convergent to different limit points.}`,
    solution: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 19|Compact]] \\\\
                  \\text{2) } [[definition 9|Convergence]] \\\\
                  \\text{3) } [[theorem 3|Triangle inequality]]`,
      },
      {
        title: "Solution",
        content: `\\text{Since $A \\subseteq \\mathbb{R}^n$ is cpt, $\\exists (x_{k_j})$ s.t. $x_{k_j} \\to x_1 \\in A$.} \\\\
                  \\text{Since $(x_k) \\subseteq A$ is not convergent, $x_k \\not\\to x_1$. That is,} \\\\
                  \\exists \\varepsilon > 0 \\text{ s.t. } \\forall N \\in \\mathbb{N}\\ \\exists i \\geq N \\text{ s.t. } \\lVert x_i - x_1 \\rVert \\geq \\varepsilon. \\\\
                  \\text{For $N = 1$, $\\exists i_1 \\geq N$ s.t. $\\lVert x_{i_1} - x_1 \\rVert \\geq \\varepsilon$.} \\\\
                  \\text{For $N = i_1 + 1$, $\\exists i_2 \\geq i_1 + 1$ s.t. $\\lVert x_{i_2} - x_1 \\rVert \\geq \\varepsilon$.} \\\\
                  \\text{Continuing inductively, we get a subsequence $(x_{i_m})$} \\\\
                  \\text{with $\\lVert x_{i_m} - x_1 \\rVert \\geq \\varepsilon$ $\\forall m \\in \\mathbb{N}$.} \\\\
                  \\text{Since $A$ cpt and $(x_{i_m}) \\subseteq A$, $\\exists (x_{i_{m_l}})$} \\\\
                  \\text{s.t. $x_{i_{m_l}} \\to x_2 \\in A$.} \\\\
                  \\text{Since $\\lVert x_{i_{m_l}} - x_1 \\rVert \\geq \\varepsilon$ $\\forall l \\in \\mathbb{N}$,} \\\\
                  \\text{we have $\\lVert x_2 - x_1 \\rVert \\geq \\varepsilon > 0$:} \\\\
                  \\text{otherwise $\\delta = \\varepsilon - \\lVert x_2 - x_1 \\rVert > 0$, and for $l$ large} \\\\
                  \\text{$\\lVert x_{i_{m_l}} - x_2 \\rVert < \\delta$, so} \\\\
                  \\begin{aligned}
                    \\lVert x_{i_{m_l}} - x_1 \\rVert &\\leq \\lVert x_{i_{m_l}} - x_2 \\rVert + \\lVert x_2 - x_1 \\rVert \\\\
                    &< \\delta + \\lVert x_2 - x_1 \\rVert = \\varepsilon,
                  \\end{aligned} \\\\
                  \\text{a contradiction. Therefore $x_1 \\neq x_2$.} \\\\
                  \\text{Hence, $(x_{k_j})$ and $(x_{i_{m_l}})$ are two subsequences} \\\\
                  \\text{that converge to different limits.} \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 27,
    chapter: 4,
    section: 4,
    homework: 4,
    title: "Question 4.4.I(a)",
    problem: `\\text{Let $A$ and $B$ be disjoint closed subsets of $\\mathbb{R}^n$. Define} \\\\
              d(A, B) = \\inf \\{ \\lVert a - b \\rVert : a \\in A, b \\in B \\}. \\\\
              \\text{If $A = \\{a\\}$ is a singleton, show that $d(A, B) > 0$.}`,
    solution: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 13|Closed]] \\\\
                  \\text{2) } [[definition 14|Closure]] \\\\
                  \\text{3) } [[theorem 4|Convergence via Norms]]`,
      },
      {
        title: "Solution",
        content: `\\text{Remember it's by contradiction.} \\\\[0.5em]
                  \\text{Since $A \\cap B = \\emptyset$, $a \\notin B$.} \\\\
                  \\text{BWOC spse $d(\\{a\\}, B) = \\inf\\{\\lVert a - b \\rVert : b \\in B\\} = 0$.} \\\\
                  \\text{By def of infimum, $\\forall k \\in \\mathbb{N}$ $\\exists b_k \\in B$ s.t. $\\lVert a - b_k \\rVert < \\frac{1}{k}$.} \\\\
                  \\text{(Tricky step)} \\\\
                  \\text{This gives a sequence $(b_k) \\subseteq B$} \\\\
                  \\text{with $0 \\leq \\lVert b_k - a \\rVert < \\frac{1}{k}$ $\\forall k \\in \\mathbb{N}$.} \\\\
                  \\text{By squeeze theorem, $\\lVert b_k - a \\rVert \\to 0$. That is, $b_k \\to a$.} \\\\
                  \\text{Since $B$ is closed, $\\overline{B} \\subseteq B$, so $a \\in B$.} \\\\
                  \\text{This contradicts $A \\cap B = \\emptyset$.} \\\\
                  \\text{Hence $d(\\{a\\}, B) > 0$.} \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 28,
    chapter: 5,
    section: 1,
    homework: 5,
    title: "Question 5.1.A",
    problem: `\\text{Use the $\\varepsilon$–$r$ definition of the limit of a function to show} \\\\
              \\lim_{x \\to 2} x^2 = 4.`,
    solution: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 22|Limit of a function]]`,
      },
      {
        title: "Solution",
        content: `\\text{Let $\\varepsilon > 0$. Define $r = \\min\\{1, \\frac{\\varepsilon}{5}\\}$.} \\\\
                  \\text{Suppose $0 < |x - 2| < r$. Since $r \\leq 1$, we have $|x - 2| < 1$, so} \\\\
                  \\text{$1 < x < 3$.} \\\\
                  \\text{Then $3 < x + 2 < 5$, so $|x + 2| < 5$. So} \\\\
                  |x^2 - 4| = |x - 2||x + 2| < 5|x - 2| < 5r \\leq 5 \\cdot \\frac{\\varepsilon}{5} = \\varepsilon. \\\\
                  \\text{Since $\\varepsilon$ was arbitrary, $\\lim_{x \\to 2} x^2 = 4$.} \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 29,
    chapter: 5,
    section: 1,
    homework: 5,
    title: "Question 5.1.B",
    problem: `\\text{Show that the function} \\\\
              f(x) = \\begin{cases} \\dfrac{x}{\\sin x} & \\text{if } 0 < |x| < \\pi/2 \\\\ 1 & \\text{if } x = 0 \\end{cases} \\\\
              \\text{is continuous at 0. Find an $r > 0$ such that $|f(x) - 1| < 10^{-6}$} \\\\
              \\text{for all $|x| < r$.}`,
    solution: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 23|Continuity at a point]]`,
      },
      {
        title: "Solution",
        content: `\\text{From Example 2.4.7, for $0 < x < \\pi/2$ we have $\\sin x < x < \\tan x$.} \\\\
                  \\text{Dividing by $\\sin x > 0$ gives $1 < \\frac{x}{\\sin x} < \\frac{1}{\\cos x}$ for $0 < x < \\pi/2$.} \\\\
                  \\text{Since $\\frac{x}{\\sin x}$ and $\\cos x$ are both even, this also holds for} \\\\
                  \\text{$0 < |x| < \\pi/2$. So for $0 < |x| < \\pi/2$,} \\\\
                  |f(x) - 1| = \\frac{x}{\\sin x} - 1 < \\frac{1}{\\cos x} - 1 = \\frac{1 - \\cos x}{\\cos x}. \\\\
                  \\text{Using $1 - \\cos x = 2\\sin^2(x/2)$ and $|\\sin t| \\leq |t|$, we get} \\\\
                  1 - \\cos x \\leq 2\\left(\\frac{x}{2}\\right)^2 = \\frac{x^2}{2}. \\\\
                  \\text{If also $|x| < \\pi/3$, then $\\cos x > \\cos(\\pi/3) = \\frac{1}{2}$.} \\\\
                  \\text{So for $0 < |x| < \\pi/3$,} \\\\
                  |f(x) - 1| < \\frac{x^2/2}{1/2} = x^2. \\\\
                  \\text{At $x = 0$, $|f(0) - 1| = 0$.} \\\\[0.5em]
                  \\text{\\textit{Continuity.} Let $\\varepsilon > 0$ and define $r = \\min\\{\\frac{\\pi}{3}, \\sqrt{\\varepsilon}\\}$.} \\\\
                  \\text{If $|x| < r$, then either $x = 0$ and $|f(x) - 1| = 0 < \\varepsilon$, or} \\\\
                  \\text{$0 < |x| < \\pi/3$ and $|f(x) - 1| < x^2 < r^2 \\leq \\varepsilon$.} \\\\
                  \\text{So $f$ is continuous at 0.} \\\\[0.5em]
                  \\text{\\textit{Explicit $r$.} Take $\\varepsilon = 10^{-6}$. Then $\\sqrt{\\varepsilon} = 10^{-3} < \\pi/3$, so} \\\\
                  \\text{$r = 10^{-3}$ works.} \\\\
                  \\text{That is, $|f(x) - 1| < 10^{-6}$ for all $|x| < 10^{-3}$.} \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 30,
    chapter: 5,
    section: 1,
    homework: 5,
    title: "Question 5.1.C",
    problem: `\\text{Show that the sawtooth function} \\\\
              f(x) = \\begin{cases} x - 2n & \\text{if } 2n \\leq x \\leq 2n + 1, \\ n \\in \\mathbb{Z} \\\\ 2n - x & \\text{if } 2n - 1 \\leq x \\leq 2n, \\ n \\in \\mathbb{Z} \\end{cases} \\\\
              \\text{is continuous.}`,
    solution: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 23|Continuity at a point]]\\text{, } [[definition 24|on a set]]`,
      },
      {
        title: "Solution",
        content: `\\text{First, $f$ is well-defined (the two formulas agree where they overlap):} \\\\
                  \\text{At $x = 2n$, we have $x - 2n = 0 = 2n - x$.} \\\\
                  \\text{At $x = 2n + 1$, $(2n + 1) - 2n = 1$, and since} \\\\
                  \\text{$2(n + 1) - 1 \\leq x \\leq 2(n + 1)$, we also have $2(n + 1) - (2n + 1) = 1$.} \\\\[0.5em]
                  \\text{Now let $a \\in \\mathbb{R}$ and $\\varepsilon > 0$.} \\\\[0.5em]
                  \\text{\\textit{Case 1: $a$ is on a line segment, i.e. $a \\notin \\mathbb{Z}$.}} \\\\
                  \\text{Then $a$ lies in an open interval $(k, k + 1)$ for some $k \\in \\mathbb{Z}$.} \\\\
                  \\text{Define $r = \\min\\{a - k, \\ k + 1 - a, \\ \\varepsilon\\} > 0$.} \\\\
                  \\text{If $|x - a| < r$, then $x \\in (k, k + 1)$, so $x$ and $a$ are on the same} \\\\
                  \\text{segment.} \\\\
                  \\text{If $k = 2n$, then $f(x) - f(a) = (x - 2n) - (a - 2n) = x - a$.} \\\\
                  \\text{If $k = 2n - 1$, then $f(x) - f(a) = (2n - x) - (2n - a) = a - x$.} \\\\
                  \\text{Either way, $|f(x) - f(a)| = |x - a| < r \\leq \\varepsilon$.} \\\\[0.5em]
                  \\text{\\textit{Case 2: $a$ is a cusp at an even integer, $a = 2n$.}} \\\\
                  \\text{Define $r = \\min\\{1, \\varepsilon\\}$, and let $|x - 2n| < r$. Then} \\\\
                  \\text{$2n - 1 < x < 2n + 1$.} \\\\
                  \\text{If $2n \\leq x < 2n + 1$, then $f(x) = x - 2n = |x - 2n|$.} \\\\
                  \\text{If $2n - 1 < x \\leq 2n$, then $f(x) = 2n - x = |x - 2n|$.} \\\\
                  \\text{Since $f(2n) = 0$, $|f(x) - f(2n)| = |x - 2n| < r \\leq \\varepsilon$.} \\\\[0.5em]
                  \\text{\\textit{Case 3: $a$ is a cusp at an odd integer, $a = 2n + 1$.}} \\\\
                  \\text{Define $r = \\min\\{1, \\varepsilon\\}$, and let $|x - (2n + 1)| < r$. Then} \\\\
                  \\text{$2n < x < 2n + 2$.} \\\\
                  \\text{If $2n < x \\leq 2n + 1$, then} \\\\
                  f(x) = x - 2n = 1 - \\big((2n + 1) - x\\big) = 1 - |x - (2n + 1)|. \\\\
                  \\text{If $2n + 1 \\leq x < 2n + 2$, then} \\\\
                  f(x) = 2(n + 1) - x = 1 - \\big(x - (2n + 1)\\big) = 1 - |x - (2n + 1)|. \\\\
                  \\text{Since $f(2n + 1) = 1$,} \\\\
                  |f(x) - f(2n + 1)| = |x - (2n + 1)| < r \\leq \\varepsilon. \\\\[0.5em]
                  \\text{In every case, $\\exists r > 0$ s.t. $|x - a| < r \\implies |f(x) - f(a)| < \\varepsilon$.} \\\\
                  \\text{So $f$ is continuous at every $a \\in \\mathbb{R}$, i.e. $f$ is continuous.} \\ \\blacksquare`,
        figure: {
          src: "/sawtooth.png",
          alt: "Desmos graph of the sawtooth function: straight segments rising from 0 at even integers to 1 at odd integers and back down, from x = -2 to x = 6",
          width: 1996,
          height: 413,
        },
      },
    ],
  },
  {
    number: 31,
    chapter: 5,
    section: 1,
    homework: 5,
    title: "Question 5.1.F",
    problem: `\\text{(a) Show that the definition of limit can be reformulated using} \\\\
              \\text{open balls instead of norms as follows: A function $f$ mapping} \\\\
              \\text{a subset $S \\subset \\mathbb{R}^n$ into $\\mathbb{R}^m$ has limit $\\mathbf{v}$ as $\\mathbf{x}$ approaches $\\mathbf{a}$} \\\\
              \\text{provided that for every $\\varepsilon > 0$, there is an $r > 0$ such that} \\\\
              f(B_r(\\mathbf{a}) \\cap S \\setminus \\{\\mathbf{a}\\}) \\subset B_\\varepsilon(\\mathbf{v}). \\\\
              \\text{(b) Provide a similar reformulation of the statement that $f$ is} \\\\
              \\text{continuous at $\\mathbf{a}$.}`,
    solution: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 22|Limit of a function]] \\\\
                  \\text{2) } [[definition 23|Continuity at a point]] \\\\
                  \\text{3) } [[definition 16|Ball]]`,
      },
      {
        title: "Part (a)",
        content: `\\text{By definition, $\\lim_{\\mathbf{x} \\to \\mathbf{a}} f(\\mathbf{x}) = \\mathbf{v}$ means} \\\\
                  \\forall \\varepsilon > 0,\\ \\exists r > 0 \\text{ s.t. } \\mathbf{x} \\in S,\\ 0 < \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r \\implies \\lVert f(\\mathbf{x}) - \\mathbf{v} \\rVert < \\varepsilon. \\\\
                  \\text{Note that $\\mathbf{x} \\in B_r(\\mathbf{a}) \\cap S \\setminus \\{\\mathbf{a}\\}$ iff $\\mathbf{x} \\in S$ and $0 < \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r$.} \\\\
                  \\text{Also $f(\\mathbf{x}) \\in B_\\varepsilon(\\mathbf{v})$ iff $\\lVert f(\\mathbf{x}) - \\mathbf{v} \\rVert < \\varepsilon$.} \\\\
                  \\text{So for fixed $\\varepsilon$ and $r$, the implication above holding for all $\\mathbf{x}$} \\\\
                  \\text{says exactly that every $\\mathbf{x} \\in B_r(\\mathbf{a}) \\cap S \\setminus \\{\\mathbf{a}\\}$ has} \\\\
                  \\text{$f(\\mathbf{x}) \\in B_\\varepsilon(\\mathbf{v})$, i.e.} \\\\
                  f(B_r(\\mathbf{a}) \\cap S \\setminus \\{\\mathbf{a}\\}) \\subset B_\\varepsilon(\\mathbf{v}). \\\\
                  \\text{Hence the two definitions are equivalent.} \\ \\blacksquare`,
      },
      {
        title: "Part (b)",
        content: `\\text{Let $\\mathbf{a} \\in S$. By definition, $f$ is continuous at $\\mathbf{a}$ means} \\\\
                  \\forall \\varepsilon > 0,\\ \\exists r > 0 \\text{ s.t. } \\mathbf{x} \\in S,\\ \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r \\implies \\lVert f(\\mathbf{x}) - f(\\mathbf{a}) \\rVert < \\varepsilon. \\\\
                  \\text{As in (a), $\\mathbf{x} \\in B_r(\\mathbf{a}) \\cap S$ iff $\\mathbf{x} \\in S$ and $\\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r$, and} \\\\
                  \\text{$f(\\mathbf{x}) \\in B_\\varepsilon(f(\\mathbf{a}))$ iff $\\lVert f(\\mathbf{x}) - f(\\mathbf{a}) \\rVert < \\varepsilon$.} \\\\
                  \\text{So $f$ is continuous at $\\mathbf{a}$ iff for every $\\varepsilon > 0$, there is an $r > 0$} \\\\
                  \\text{such that} \\\\
                  f(B_r(\\mathbf{a}) \\cap S) \\subset B_\\varepsilon(f(\\mathbf{a})). \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 32,
    chapter: 5,
    section: 1,
    homework: 5,
    title: "Question 5.1.G",
    problem: `\\text{Suppose that functions $f, g, h$ mapping $S \\subset \\mathbb{R}^n$ into $\\mathbb{R}$ satisfy} \\\\
              \\text{$f(\\mathbf{x}) \\leq g(\\mathbf{x}) \\leq h(\\mathbf{x})$ for $\\mathbf{x} \\in S$. Suppose that $\\mathbf{c}$ is a limit point of} \\\\
              \\text{$S$ and $\\lim_{\\mathbf{x} \\to \\mathbf{c}} f(\\mathbf{x}) = \\lim_{\\mathbf{x} \\to \\mathbf{c}} h(\\mathbf{x}) = L$.} \\\\
              \\text{Show that $\\lim_{\\mathbf{x} \\to \\mathbf{c}} g(\\mathbf{x}) = L$.}`,
    solution: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 22|Limit of a function]]`,
      },
      {
        title: "Solution",
        content: `\\text{Let $\\varepsilon > 0$.} \\\\
                  \\text{Since $f(\\mathbf{x}) \\to L$, $\\exists r_1 > 0$ s.t. $\\mathbf{x} \\in S$, $0 < \\lVert \\mathbf{x} - \\mathbf{c} \\rVert < r_1$} \\\\
                  \\text{$\\implies |f(\\mathbf{x}) - L| < \\varepsilon$. In particular, $L - \\varepsilon < f(\\mathbf{x})$.} \\\\
                  \\text{Since $h(\\mathbf{x}) \\to L$, $\\exists r_2 > 0$ s.t. $\\mathbf{x} \\in S$, $0 < \\lVert \\mathbf{x} - \\mathbf{c} \\rVert < r_2$} \\\\
                  \\text{$\\implies |h(\\mathbf{x}) - L| < \\varepsilon$. In particular, $h(\\mathbf{x}) < L + \\varepsilon$.} \\\\
                  \\text{Define $r = \\min\\{r_1, r_2\\}$. If $\\mathbf{x} \\in S$ and $0 < \\lVert \\mathbf{x} - \\mathbf{c} \\rVert < r$, then} \\\\
                  L - \\varepsilon < f(\\mathbf{x}) \\leq g(\\mathbf{x}) \\leq h(\\mathbf{x}) < L + \\varepsilon, \\\\
                  \\text{so $|g(\\mathbf{x}) - L| < \\varepsilon$.} \\\\
                  \\text{Since $\\varepsilon$ was arbitrary, $\\lim_{\\mathbf{x} \\to \\mathbf{c}} g(\\mathbf{x}) = L$.} \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 33,
    chapter: 5,
    section: 1,
    homework: 5,
    title: "Question 5.1.H",
    problem: `\\text{Define a function on the set $S = \\{0\\} \\cup \\{\\frac{1}{n} : n \\geq 1\\}$ by} \\\\
              \\text{$f(\\frac{1}{n}) = a_n$ and $f(0) = L$. Prove that $f$ is continuous on $S$} \\\\
              \\text{if and only if $\\lim_{n \\to \\infty} a_n = L$.}`,
    solution: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 23|Continuity at a point]]\\text{, } [[definition 24|on a set]] \\\\
                  \\text{2) } [[definition 26|Isolated point]]`,
      },
      {
        title: "Proof of (⇒)",
        content: `\\text{Suppose $f$ is continuous on $S$. Let $\\varepsilon > 0$.} \\\\
                  \\text{Since $f$ is continuous at $0$, $\\exists r > 0$ s.t. $x \\in S$,} \\\\
                  |x| < r \\implies |f(x) - L| < \\varepsilon. \\\\
                  \\text{By the Archimedean property, $\\exists N \\in \\mathbb{N}$ s.t. $\\frac{1}{N} < r$.} \\\\
                  \\text{For $n \\geq N$, $|\\frac{1}{n}| \\leq \\frac{1}{N} < r$, so $|a_n - L| = |f(\\frac{1}{n}) - L| < \\varepsilon$.} \\\\
                  \\text{Hence $\\lim_{n \\to \\infty} a_n = L$.} \\ \\blacksquare`,
      },
      {
        title: "Proof of (⇐)",
        content: `\\text{Suppose $\\lim_{n \\to \\infty} a_n = L$. Let $\\varepsilon > 0$.} \\\\[0.5em]
                  \\text{\\textit{At $x = 0$:} $\\exists N \\in \\mathbb{N}$ s.t. $n \\geq N \\implies |a_n - L| < \\varepsilon$.} \\\\
                  \\text{Define $r = \\frac{1}{N}$, and let $x \\in S$ with $|x| < r$.} \\\\
                  \\text{If $x = 0$, then $|f(x) - L| = 0 < \\varepsilon$.} \\\\
                  \\text{If $x = \\frac{1}{n}$, then $\\frac{1}{n} < \\frac{1}{N}$, so $n > N$, so $|f(x) - L| = |a_n - L| < \\varepsilon$.} \\\\
                  \\text{So $f$ is continuous at $0$.} \\\\[0.5em]
                  \\text{\\textit{At $x = \\frac{1}{n}$:} Define $r = \\frac{1}{n} - \\frac{1}{n+1} = \\frac{1}{n(n+1)} > 0$.} \\\\
                  \\text{If $m > n$, then $|\\frac{1}{n} - \\frac{1}{m}| = \\frac{1}{n} - \\frac{1}{m} \\geq \\frac{1}{n} - \\frac{1}{n+1} = r$.} \\\\
                  \\text{If $m < n$, then $|\\frac{1}{m} - \\frac{1}{n}| \\geq \\frac{1}{n-1} - \\frac{1}{n} = \\frac{1}{n(n-1)} > r$.} \\\\
                  \\text{Also $|\\frac{1}{n} - 0| = \\frac{1}{n} > r$.} \\\\
                  \\text{So the only $x \\in S$ with $|x - \\frac{1}{n}| < r$ is $x = \\frac{1}{n}$, and then} \\\\
                  \\text{$|f(x) - f(\\frac{1}{n})| = 0 < \\varepsilon$.} \\\\
                  \\text{So $f$ is continuous at each $\\frac{1}{n}$.} \\\\[0.5em]
                  \\text{Hence $f$ is continuous on $S$.} \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 34,
    chapter: 5,
    section: 1,
    homework: 5,
    title: "Question 5.1.K",
    problem: `\\text{Here $\\pi_j : \\mathbb{R}^n \\to \\mathbb{R}$ is $\\pi_j(\\mathbf{x}) = x_j$, and $\\epsilon_i : \\mathbb{R} \\to \\mathbb{R}^m$ is} \\\\
              \\text{$\\epsilon_i(t) = t\\mathbf{e}_i$, so $\\epsilon_i \\pi_j(\\mathbf{x}) = x_j \\mathbf{e}_i$.} \\\\
              \\text{(a) Show that a linear transformation $A : \\mathbb{R}^n \\to \\mathbb{R}^m$ with} \\\\
              \\text{$m \\times n$ matrix $[a_{ij}]$ can be written as} \\\\
              A = \\sum_{i=1}^{m} \\sum_{j=1}^{n} a_{ij} \\epsilon_i \\pi_j. \\\\
              \\text{(b) Show that $\\epsilon_i \\pi_j$ is Lipschitz with constant 1.} \\\\
              \\text{(c) Hence deduce that $A$ is Lipschitz with constant} \\\\
              \\textstyle\\sum_{i=1}^{m} \\sum_{j=1}^{n} |a_{ij}|.`,
    solution: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 27|Lipschitz]] \\\\
                  \\text{2) } [[theorem 3|Triangle inequality]] \\\\
                  \\text{3) } [[theorem 20|Coordinate functions]]`,
      },
      {
        title: "Part (a)",
        content: `\\text{Let $\\mathbf{x} \\in \\mathbb{R}^n$. The $i$th entry of $A\\mathbf{x}$ is $\\sum_{j=1}^{n} a_{ij} x_j$. So} \\\\
                  \\begin{aligned}
                    A\\mathbf{x} &= \\sum_{i=1}^{m} \\left( \\sum_{j=1}^{n} a_{ij} x_j \\right) \\mathbf{e}_i \\\\
                    &= \\sum_{i=1}^{m} \\sum_{j=1}^{n} a_{ij} x_j \\mathbf{e}_i \\\\
                    &= \\sum_{i=1}^{m} \\sum_{j=1}^{n} a_{ij} \\epsilon_i \\pi_j(\\mathbf{x}).
                  \\end{aligned} \\\\
                  \\text{Since this holds for all $\\mathbf{x}$, $A = \\sum_{i=1}^{m} \\sum_{j=1}^{n} a_{ij} \\epsilon_i \\pi_j$.} \\ \\blacksquare`,
      },
      {
        title: "Part (b)",
        content: `\\text{Let $\\mathbf{x}, \\mathbf{y} \\in \\mathbb{R}^n$. Then} \\\\
                  \\lVert \\epsilon_i \\pi_j(\\mathbf{x}) - \\epsilon_i \\pi_j(\\mathbf{y}) \\rVert = \\lVert (x_j - y_j)\\mathbf{e}_i \\rVert = |x_j - y_j|. \\\\
                  \\text{Since $|x_j - y_j|^2 \\leq \\sum_{k=1}^{n} (x_k - y_k)^2 = \\lVert \\mathbf{x} - \\mathbf{y} \\rVert^2$, we get} \\\\
                  \\text{$|x_j - y_j| \\leq \\lVert \\mathbf{x} - \\mathbf{y} \\rVert$. So} \\\\
                  \\lVert \\epsilon_i \\pi_j(\\mathbf{x}) - \\epsilon_i \\pi_j(\\mathbf{y}) \\rVert \\leq \\lVert \\mathbf{x} - \\mathbf{y} \\rVert, \\\\
                  \\text{i.e. $\\epsilon_i \\pi_j$ is Lipschitz with constant 1.} \\ \\blacksquare`,
      },
      {
        title: "Part (c)",
        content: `\\text{Let $\\mathbf{x}, \\mathbf{y} \\in \\mathbb{R}^n$. By (a), the [[theorem 3|triangle inequality]], and (b),} \\\\
                  \\begin{aligned}
                    \\lVert A\\mathbf{x} - A\\mathbf{y} \\rVert &= \\left\\lVert \\sum_{i=1}^{m} \\sum_{j=1}^{n} a_{ij} \\left( \\epsilon_i \\pi_j(\\mathbf{x}) - \\epsilon_i \\pi_j(\\mathbf{y}) \\right) \\right\\rVert \\\\
                    &\\leq \\sum_{i=1}^{m} \\sum_{j=1}^{n} |a_{ij}| \\, \\lVert \\epsilon_i \\pi_j(\\mathbf{x}) - \\epsilon_i \\pi_j(\\mathbf{y}) \\rVert \\\\
                    &\\leq \\left( \\sum_{i=1}^{m} \\sum_{j=1}^{n} |a_{ij}| \\right) \\lVert \\mathbf{x} - \\mathbf{y} \\rVert.
                  \\end{aligned} \\\\
                  \\text{So $A$ is Lipschitz with constant $\\sum_{i=1}^{m} \\sum_{j=1}^{n} |a_{ij}|$.} \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 35,
    chapter: 5,
    section: 1,
    homework: 5,
    title: "Question 5.1.L",
    problem: `\\text{Consider the linear transformation on $\\mathbb{R}^4$ given by the matrix} \\\\
              A = \\begin{bmatrix}
                \\frac{1}{2} & \\frac{1}{2} & \\frac{1}{2} & \\frac{1}{2} \\\\
                \\frac{1}{2} & -\\frac{1}{2} & \\frac{1}{2} & -\\frac{1}{2} \\\\
                \\frac{1}{2} & \\frac{1}{2} & -\\frac{1}{2} & -\\frac{1}{2} \\\\
                \\frac{1}{2} & -\\frac{1}{2} & -\\frac{1}{2} & \\frac{1}{2}
              \\end{bmatrix}. \\\\
              \\text{(a) Compute the Lipschitz constant obtained in Corollary 5.1.7.} \\\\
              \\text{(b) Show that $\\lVert A\\mathbf{x} \\rVert = \\lVert \\mathbf{x} \\rVert$ for all $\\mathbf{x} \\in \\mathbb{R}^4$. Hence deduce} \\\\
              \\text{that the optimal Lipschitz constant is 1.}`,
    solution: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 27|Lipschitz]] \\\\
                  \\text{2) } [[theorem 21|Corollary 5.1.7]] \\\\
                  \\text{3) } [[definition 5|Orthonormal]] \\\\
                  \\text{4) } [[theorem 1|Cauchy-Schwarz]]`,
      },
      {
        title: "Part (a)",
        content: `\\text{[[theorem 21|Corollary 5.1.7]] gives the Lipschitz constant} \\\\
                  \\text{$\\left( \\sum_{i=1}^{4} \\sum_{j=1}^{4} a_{ij}^2 \\right)^{1/2}$, which comes from the Schwarz inequality:} \\\\
                  \\begin{aligned}
                    \\lVert A\\mathbf{x} \\rVert^2 &= \\sum_{i=1}^{4} \\left( \\sum_{j=1}^{4} a_{ij} x_j \\right)^2 \\\\
                    &\\leq \\sum_{i=1}^{4} \\left( \\sum_{j=1}^{4} a_{ij}^2 \\right) \\left( \\sum_{j=1}^{4} x_j^2 \\right) \\\\
                    &= \\left( \\sum_{i=1}^{4} \\sum_{j=1}^{4} a_{ij}^2 \\right) \\lVert \\mathbf{x} \\rVert^2.
                  \\end{aligned} \\\\
                  \\text{Every entry has $a_{ij}^2 = \\frac{1}{4}$, and there are 16 entries, so} \\\\
                  \\left( \\sum_{i=1}^{4} \\sum_{j=1}^{4} a_{ij}^2 \\right)^{1/2} = \\left( 16 \\cdot \\frac{1}{4} \\right)^{1/2} = \\sqrt{4} = 2. \\\\
                  \\text{So Corollary 5.1.7 gives Lipschitz constant 2.} \\ \\blacksquare`,
      },
      {
        title: "Part (b)",
        content: `\\text{Let $\\mathbf{c}_1, \\ldots, \\mathbf{c}_4$ be the columns of $A$:} \\\\
                  \\mathbf{c}_1 = \\tfrac{1}{2}(1, 1, 1, 1), \\quad \\mathbf{c}_2 = \\tfrac{1}{2}(1, -1, 1, -1), \\\\
                  \\mathbf{c}_3 = \\tfrac{1}{2}(1, 1, -1, -1), \\quad \\mathbf{c}_4 = \\tfrac{1}{2}(1, -1, -1, 1). \\\\
                  \\text{Each $\\lVert \\mathbf{c}_j \\rVert^2 = 4 \\cdot \\frac{1}{4} = 1$.} \\\\
                  \\text{For $j \\neq k$, each pair of columns agrees in sign in exactly 2} \\\\
                  \\text{entries and disagrees in 2, so} \\\\
                  \\langle \\mathbf{c}_j, \\mathbf{c}_k \\rangle = \\tfrac{1}{4}(1 + 1 - 1 - 1) = 0. \\\\
                  \\text{So $\\langle \\mathbf{c}_j, \\mathbf{c}_k \\rangle = \\delta_{jk}$, i.e. the columns are [[definition 5|orthonormal]].} \\\\
                  \\text{Let $\\mathbf{x} \\in \\mathbb{R}^4$. Then $A\\mathbf{x} = \\sum_{j=1}^{4} x_j \\mathbf{c}_j$, so} \\\\
                  \\begin{aligned}
                    \\lVert A\\mathbf{x} \\rVert^2 &= \\left\\langle \\sum_{j=1}^{4} x_j \\mathbf{c}_j, \\sum_{k=1}^{4} x_k \\mathbf{c}_k \\right\\rangle \\\\
                    &= \\sum_{j=1}^{4} \\sum_{k=1}^{4} x_j x_k \\langle \\mathbf{c}_j, \\mathbf{c}_k \\rangle \\\\
                    &= \\sum_{j=1}^{4} x_j^2 = \\lVert \\mathbf{x} \\rVert^2.
                  \\end{aligned} \\\\
                  \\text{So $\\lVert A\\mathbf{x} \\rVert = \\lVert \\mathbf{x} \\rVert$.} \\\\[0.5em]
                  \\text{\\textit{Optimal constant.} For $\\mathbf{x}, \\mathbf{y} \\in \\mathbb{R}^4$, by linearity} \\\\
                  \\lVert A\\mathbf{x} - A\\mathbf{y} \\rVert = \\lVert A(\\mathbf{x} - \\mathbf{y}) \\rVert = \\lVert \\mathbf{x} - \\mathbf{y} \\rVert, \\\\
                  \\text{so $A$ is Lipschitz with constant 1.} \\\\
                  \\text{Suppose $A$ were Lipschitz with some constant $C < 1$. Take} \\\\
                  \\text{$\\mathbf{x} = \\mathbf{e}_1$, $\\mathbf{y} = \\mathbf{0}$. Then} \\\\
                  1 = \\lVert \\mathbf{e}_1 \\rVert = \\lVert A\\mathbf{e}_1 - A\\mathbf{0} \\rVert \\leq C\\lVert \\mathbf{e}_1 - \\mathbf{0} \\rVert = C < 1, \\\\
                  \\text{a contradiction. Hence the optimal Lipschitz constant is 1.} \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 36,
    chapter: 5,
    section: 2,
    homework: 6,
    title: "Question 5.2.A",
    problem: `\\text{Let $A$ be a subset of $\\mathbb{R}^n$. Show that the characteristic} \\\\
              \\text{function $\\chi_A$ is continuous on the interior of $A$ and on the} \\\\
              \\text{interior of its complement $A'$ but is discontinuous on the} \\\\
              \\text{boundary $\\partial A = \\overline{A} \\cap \\overline{A'}$.}`,
    solution: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 23|Continuity at a point]]\\text{, } [[definition 25|discontinuity]] \\\\
                  \\text{2) } [[definition 18|Interior]] \\\\
                  \\text{3) } [[definition 14|Closure]] \\\\
                  \\text{4) } [[theorem 12|Ball characterization of closure]]`,
      },
      {
        title: "Solution",
        content: `\\text{\\textit{Interior of $A$.} Let $\\mathbf{a} \\in \\operatorname{int} A$ and $\\varepsilon > 0$.} \\\\
                  \\text{Then $\\exists r > 0$ s.t. $B_r(\\mathbf{a}) \\subset A$.} \\\\
                  \\text{If $\\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r$, then $\\mathbf{x} \\in A$, so} \\\\
                  |\\chi_A(\\mathbf{x}) - \\chi_A(\\mathbf{a})| = |1 - 1| = 0 < \\varepsilon. \\\\
                  \\text{So $\\chi_A$ is continuous at $\\mathbf{a}$.} \\\\[0.5em]
                  \\text{\\textit{Interior of $A'$.} Let $\\mathbf{a} \\in \\operatorname{int} A'$ and $\\varepsilon > 0$.} \\\\
                  \\text{Then $\\exists r > 0$ s.t. $B_r(\\mathbf{a}) \\subset A'$.} \\\\
                  \\text{If $\\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r$, then $\\mathbf{x} \\notin A$, so} \\\\
                  |\\chi_A(\\mathbf{x}) - \\chi_A(\\mathbf{a})| = |0 - 0| = 0 < \\varepsilon. \\\\
                  \\text{So $\\chi_A$ is continuous at $\\mathbf{a}$.} \\\\[0.5em]
                  \\text{\\textit{Boundary.} Let $\\mathbf{a} \\in \\partial A = \\overline{A} \\cap \\overline{A'}$, and take $\\varepsilon = \\frac{1}{2}$.} \\\\
                  \\text{Let $r > 0$.} \\\\
                  \\text{Since $\\mathbf{a} \\in \\overline{A}$, there is a sequence in $A$ converging to $\\mathbf{a}$, so} \\\\
                  \\text{$B_r(\\mathbf{a}) \\cap A \\neq \\emptyset$.} \\\\
                  \\text{Similarly, since $\\mathbf{a} \\in \\overline{A'}$, $B_r(\\mathbf{a}) \\cap A' \\neq \\emptyset$.} \\\\
                  \\text{If $\\mathbf{a} \\in A$, pick $\\mathbf{x} \\in B_r(\\mathbf{a}) \\cap A'$. Then} \\\\
                  |\\chi_A(\\mathbf{x}) - \\chi_A(\\mathbf{a})| = |0 - 1| = 1 \\geq \\varepsilon. \\\\
                  \\text{If $\\mathbf{a} \\in A'$, pick $\\mathbf{x} \\in B_r(\\mathbf{a}) \\cap A$. Then} \\\\
                  |\\chi_A(\\mathbf{x}) - \\chi_A(\\mathbf{a})| = |1 - 0| = 1 \\geq \\varepsilon. \\\\
                  \\text{So for every $r > 0$, $\\exists \\mathbf{x}$ with $\\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r$ and} \\\\
                  \\text{$|\\chi_A(\\mathbf{x}) - \\chi_A(\\mathbf{a})| \\geq \\varepsilon$.} \\\\
                  \\text{Hence $\\chi_A$ is discontinuous at every point of $\\partial A$.} \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 37,
    chapter: 5,
    section: 2,
    homework: 6,
    title: "Question 5.2.F",
    problem: `\\text{Prove that $L = \\lim_{x \\to a} f(x)$ if and only if both} \\\\
              \\lim_{x \\to a^-} f(x) = L \\text{ and } \\lim_{x \\to a^+} f(x) = L.`,
    solution: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 22|Limit of a function]] \\\\
                  \\text{2) } [[definition 29|One-sided limits]]`,
      },
      {
        title: "Solution",
        content: `\\text{Let $f$ be defined on $S \\subset \\mathbb{R}$. Recall $\\lim_{x \\to a^-} f(x) = L$ means} \\\\
                  \\forall \\varepsilon > 0,\\ \\exists r > 0 \\text{ s.t. } x \\in S,\\ a - r < x < a \\implies |f(x) - L| < \\varepsilon, \\\\
                  \\text{and $\\lim_{x \\to a^+} f(x) = L$ is the same with $a < x < a + r$.} \\\\[0.5em]
                  \\text{($\\Rightarrow$) Suppose $\\lim_{x \\to a} f(x) = L$. Let $\\varepsilon > 0$.} \\\\
                  \\text{Then $\\exists r > 0$ s.t. $x \\in S$, $0 < |x - a| < r \\implies |f(x) - L| < \\varepsilon$.} \\\\
                  \\text{If $a - r < x < a$, then $0 < |x - a| < r$, so $|f(x) - L| < \\varepsilon$.} \\\\
                  \\text{So $\\lim_{x \\to a^-} f(x) = L$.} \\\\
                  \\text{If $a < x < a + r$, then $0 < |x - a| < r$, so $|f(x) - L| < \\varepsilon$.} \\\\
                  \\text{So $\\lim_{x \\to a^+} f(x) = L$.} \\\\[0.5em]
                  \\text{($\\Leftarrow$) Suppose both one-sided limits equal $L$. Let $\\varepsilon > 0$.} \\\\
                  \\text{$\\exists r_1 > 0$ s.t. $x \\in S$, $a - r_1 < x < a \\implies |f(x) - L| < \\varepsilon$.} \\\\
                  \\text{$\\exists r_2 > 0$ s.t. $x \\in S$, $a < x < a + r_2 \\implies |f(x) - L| < \\varepsilon$.} \\\\
                  \\text{Define $r = \\min\\{r_1, r_2\\}$, and let $x \\in S$ with $0 < |x - a| < r$.} \\\\
                  \\text{Then either $a - r_1 \\leq a - r < x < a$ or $a < x < a + r \\leq a + r_2$.} \\\\
                  \\text{In either case $|f(x) - L| < \\varepsilon$.} \\\\
                  \\text{Hence $\\lim_{x \\to a} f(x) = L$.} \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 38,
    chapter: 5,
    section: 2,
    homework: 6,
    title: "Question 5.2.G",
    problem: `\\text{(A monotone convergence test for functions.) Suppose that $f$} \\\\
              \\text{is an increasing function on $(a, b)$ that is bounded above.} \\\\
              \\text{Prove that the one-sided limit $\\lim_{x \\to b^-} f(x)$ exists.}`,
    solution: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 29|One-sided limits]]`,
      },
      {
        title: "Solution",
        content: `\\text{The set $\\{f(x) : a < x < b\\}$ is nonempty and bounded above, so} \\\\
                  \\text{by the Least Upper Bound Principle} \\\\
                  L = \\sup\\{f(x) : a < x < b\\} \\\\
                  \\text{exists. We show $\\lim_{x \\to b^-} f(x) = L$.} \\\\[0.5em]
                  \\text{Let $\\varepsilon > 0$. Since $L - \\varepsilon < L$, $L - \\varepsilon$ is not an upper bound, so} \\\\
                  \\text{$\\exists x_0 \\in (a, b)$ s.t. $f(x_0) > L - \\varepsilon$.} \\\\
                  \\text{Define $r = b - x_0 > 0$, and let $b - r < x < b$, i.e. $x_0 < x < b$.} \\\\
                  \\text{Since $f$ is increasing, $f(x) \\geq f(x_0) > L - \\varepsilon$.} \\\\
                  \\text{Since $L$ is an upper bound, $f(x) \\leq L < L + \\varepsilon$.} \\\\
                  \\text{So $|f(x) - L| < \\varepsilon$.} \\\\
                  \\text{Hence $\\lim_{x \\to b^-} f(x) = L$ exists.} \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 39,
    chapter: 5,
    section: 3,
    homework: 6,
    title: "Question 5.3.B",
    problem: `\\text{Use Lemma 4.2.3 and the sequential characterization of} \\\\
              \\text{continuity to give a second proof for Example 5.3.6.}`,
    solution: [
      {
        title: "Recall",
        content: `\\text{1) } [[theorem 5|Lemma 4.2.3]] \\\\
                  \\text{2) } [[theorem 22|Theorem 5.3.1]] \\\\
                  \\text{3) } [[theorem 25|Example 5.3.6 (component functions)]]`,
      },
      {
        title: "Solution",
        content: `\\text{Let $f = (f_1, \\ldots, f_m)$ map $S \\subset \\mathbb{R}^n$ into $\\mathbb{R}^m$ and let $\\mathbf{a} \\in S$.} \\\\
                  \\text{We show $f$ is continuous at $\\mathbf{a}$ iff each $f_i$ is continuous at $\\mathbf{a}$.} \\\\
                  \\text{[[theorem 5|Lemma 4.2.3]] says a sequence in $\\mathbb{R}^m$ converges to $\\mathbf{y}$ iff each} \\\\
                  \\text{coordinate converges to the corresponding coordinate of $\\mathbf{y}$.} \\\\[0.5em]
                  \\text{($\\Rightarrow$) Suppose $f$ is continuous at $\\mathbf{a}$. Let $(\\mathbf{x}_k) \\subset S$ with} \\\\
                  \\text{$\\lim_{k \\to \\infty} \\mathbf{x}_k = \\mathbf{a}$.} \\\\
                  \\text{By the sequential characterization, $\\lim_{k \\to \\infty} f(\\mathbf{x}_k) = f(\\mathbf{a})$.} \\\\
                  \\text{By Lemma 4.2.3, $\\lim_{k \\to \\infty} f_i(\\mathbf{x}_k) = f_i(\\mathbf{a})$ for each $i$.} \\\\
                  \\text{Since $(\\mathbf{x}_k)$ was arbitrary, each $f_i$ is continuous at $\\mathbf{a}$ by the} \\\\
                  \\text{sequential characterization.} \\\\[0.5em]
                  \\text{($\\Leftarrow$) Suppose each $f_i$ is continuous at $\\mathbf{a}$. Let $(\\mathbf{x}_k) \\subset S$ with} \\\\
                  \\text{$\\lim_{k \\to \\infty} \\mathbf{x}_k = \\mathbf{a}$.} \\\\
                  \\text{By the sequential characterization, $\\lim_{k \\to \\infty} f_i(\\mathbf{x}_k) = f_i(\\mathbf{a})$ for each $i$.} \\\\
                  \\text{By Lemma 4.2.3,} \\\\
                  \\lim_{k \\to \\infty} f(\\mathbf{x}_k) = \\lim_{k \\to \\infty} (f_1(\\mathbf{x}_k), \\ldots, f_m(\\mathbf{x}_k)) = f(\\mathbf{a}). \\\\
                  \\text{Since $(\\mathbf{x}_k)$ was arbitrary, $f$ is continuous at $\\mathbf{a}$ by the sequential} \\\\
                  \\text{characterization.} \\\\[0.5em]
                  \\text{Since $\\mathbf{a} \\in S$ was arbitrary, $f$ is continuous if and only if each $f_i$} \\\\
                  \\text{is continuous for $1 \\leq i \\leq m$.} \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 40,
    chapter: 5,
    section: 3,
    homework: 6,
    title: "Question 5.3.C",
    problem: `\\text{Consider $f$ mapping $S \\subset \\mathbb{R}^n$ into $\\mathbb{R}^m$ and two points: $\\mathbf{a}$ a limit} \\\\
              \\text{point of $S \\setminus \\{\\mathbf{a}\\}$ and $\\mathbf{v} \\in \\mathbb{R}^m$. Show that $\\lim_{\\mathbf{x} \\to \\mathbf{a}} f(\\mathbf{x}) = \\mathbf{v}$ if and only} \\\\
              \\text{if for each sequence $(\\mathbf{x}_k) \\in S \\setminus \\{\\mathbf{a}\\}$ with $\\lim_{k \\to \\infty} \\mathbf{x}_k = \\mathbf{a}$, we} \\\\
              \\text{have $\\lim_{k \\to \\infty} f(\\mathbf{x}_k) = \\mathbf{v}$.}`,
    solution: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 22|Limit of a function]] \\\\
                  \\text{2) } [[definition 9|Convergence]]`,
      },
      {
        title: "Solution",
        content: `\\text{($\\Rightarrow$) Suppose $\\lim_{\\mathbf{x} \\to \\mathbf{a}} f(\\mathbf{x}) = \\mathbf{v}$, and let $(\\mathbf{x}_k) \\subset S \\setminus \\{\\mathbf{a}\\}$ with} \\\\
                  \\text{$\\mathbf{x}_k \\to \\mathbf{a}$. Let $\\varepsilon > 0$.} \\\\
                  \\text{$\\exists r > 0$ s.t. $\\mathbf{x} \\in S$, $0 < \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r \\implies \\lVert f(\\mathbf{x}) - \\mathbf{v} \\rVert < \\varepsilon$.} \\\\
                  \\text{Since $\\mathbf{x}_k \\to \\mathbf{a}$, $\\exists N$ s.t. $k \\geq N \\implies \\lVert \\mathbf{x}_k - \\mathbf{a} \\rVert < r$.} \\\\
                  \\text{Since $\\mathbf{x}_k \\neq \\mathbf{a}$, for $k \\geq N$ we have $0 < \\lVert \\mathbf{x}_k - \\mathbf{a} \\rVert < r$, so} \\\\
                  \\text{$\\lVert f(\\mathbf{x}_k) - \\mathbf{v} \\rVert < \\varepsilon$.} \\\\
                  \\text{Hence $\\lim_{k \\to \\infty} f(\\mathbf{x}_k) = \\mathbf{v}$.} \\\\[0.5em]
                  \\text{($\\Leftarrow$) We prove the contrapositive. Suppose $\\lim_{\\mathbf{x} \\to \\mathbf{a}} f(\\mathbf{x}) \\neq \\mathbf{v}$. Then} \\\\
                  \\exists \\varepsilon > 0 \\text{ s.t. } \\forall r > 0,\\ \\exists \\mathbf{x} \\in S \\text{ with } 0 < \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r \\\\
                  \\text{and } \\lVert f(\\mathbf{x}) - \\mathbf{v} \\rVert \\geq \\varepsilon. \\\\
                  \\text{For each $k \\in \\mathbb{N}$, take $r = \\frac{1}{k}$ to get $\\mathbf{x}_k \\in S$ with} \\\\
                  0 < \\lVert \\mathbf{x}_k - \\mathbf{a} \\rVert < \\tfrac{1}{k} \\text{ and } \\lVert f(\\mathbf{x}_k) - \\mathbf{v} \\rVert \\geq \\varepsilon. \\\\
                  \\text{Then $(\\mathbf{x}_k) \\subset S \\setminus \\{\\mathbf{a}\\}$ and $\\mathbf{x}_k \\to \\mathbf{a}$, but $\\lVert f(\\mathbf{x}_k) - \\mathbf{v} \\rVert \\geq \\varepsilon$} \\\\
                  \\text{for all $k$, so $f(\\mathbf{x}_k) \\not\\to \\mathbf{v}$.} \\\\
                  \\text{So the sequence condition fails. Hence the sequence condition} \\\\
                  \\text{implies $\\lim_{\\mathbf{x} \\to \\mathbf{a}} f(\\mathbf{x}) = \\mathbf{v}$.} \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 41,
    chapter: 5,
    section: 3,
    homework: 6,
    title: "Question 5.3.D",
    problem: `\\text{Suppose that $f$ mapping $S \\subset \\mathbb{R}^n$ into $\\mathbb{R}^m$ is given by} \\\\
              \\text{$f(\\mathbf{x}) = (f_1(\\mathbf{x}), \\ldots, f_m(\\mathbf{x}))$ with $f_i : S \\to \\mathbb{R}$ for each $i$. Show} \\\\
              \\text{that $\\lim_{\\mathbf{x} \\to \\mathbf{a}} f(\\mathbf{x}) = (u_1, \\ldots, u_m)$ if and only if} \\\\
              \\text{$\\lim_{\\mathbf{x} \\to \\mathbf{a}} f_i(\\mathbf{x}) = u_i$ for each $i$.}`,
    solution: [
      {
        title: "Recall",
        content: `\\text{1) } [[exercise 40|Question 5.3.C]] \\\\
                  \\text{2) } [[theorem 5|Lemma 4.2.3]]`,
      },
      {
        title: "Solution",
        content: `\\text{Let $\\mathbf{a}$ be a limit point of $S \\setminus \\{\\mathbf{a}\\}$ and $\\mathbf{u} = (u_1, \\ldots, u_m)$.} \\\\
                  \\text{By [[exercise 40|Question C]],} \\\\
                  \\lim_{\\mathbf{x} \\to \\mathbf{a}} f(\\mathbf{x}) = \\mathbf{u} \\iff \\text{for every } (\\mathbf{x}_k) \\subset S \\setminus \\{\\mathbf{a}\\} \\\\
                  \\text{with } \\mathbf{x}_k \\to \\mathbf{a}, \\ f(\\mathbf{x}_k) \\to \\mathbf{u}. \\\\
                  \\text{By [[theorem 5|Lemma 4.2.3]], $f(\\mathbf{x}_k) \\to \\mathbf{u}$ iff $f_i(\\mathbf{x}_k) \\to u_i$ for each $i$. So the} \\\\
                  \\text{right side holds iff} \\\\
                  \\text{for each } i, \\text{ for every } (\\mathbf{x}_k) \\subset S \\setminus \\{\\mathbf{a}\\} \\text{ with } \\mathbf{x}_k \\to \\mathbf{a}, \\ f_i(\\mathbf{x}_k) \\to u_i. \\\\
                  \\text{By Question C applied to each $f_i : S \\to \\mathbb{R}$ (the case $m = 1$),} \\\\
                  \\text{this holds iff $\\lim_{\\mathbf{x} \\to \\mathbf{a}} f_i(\\mathbf{x}) = u_i$ for each $i$.} \\\\
                  \\text{Hence $\\lim_{\\mathbf{x} \\to \\mathbf{a}} f(\\mathbf{x}) = \\mathbf{u}$ iff $\\lim_{\\mathbf{x} \\to \\mathbf{a}} f_i(\\mathbf{x}) = u_i$ for each $i$.} \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 42,
    chapter: 5,
    section: 3,
    homework: 6,
    title: "Question 5.3.E",
    problem: `\\text{Let $f$ and $g$ be continuous mappings of $S \\subset \\mathbb{R}^n$ into $\\mathbb{R}^m$. Show} \\\\
              \\text{that the inner product $h(\\mathbf{x}) = \\langle f(\\mathbf{x}), g(\\mathbf{x}) \\rangle$ is continuous.}`,
    solution: [
      {
        title: "Recall",
        content: `\\text{1) } [[theorem 22|Theorem 5.3.1]] \\\\
                  \\text{2) } [[theorem 5|Lemma 4.2.3]] \\\\
                  \\text{3) } [[definition 3|Inner product]]`,
      },
      {
        title: "Solution",
        content: `\\text{Write $f = (f_1, \\ldots, f_m)$ and $g = (g_1, \\ldots, g_m)$, so} \\\\
                  h(\\mathbf{x}) = \\sum_{i=1}^{m} f_i(\\mathbf{x}) g_i(\\mathbf{x}). \\\\
                  \\text{Let $\\mathbf{a} \\in S$ and $(\\mathbf{x}_k) \\subset S$ with $\\mathbf{x}_k \\to \\mathbf{a}$.} \\\\
                  \\text{Since $f$ and $g$ are continuous, by the sequential characterization} \\\\
                  \\text{$f(\\mathbf{x}_k) \\to f(\\mathbf{a})$ and $g(\\mathbf{x}_k) \\to g(\\mathbf{a})$.} \\\\
                  \\text{By Lemma 4.2.3, $f_i(\\mathbf{x}_k) \\to f_i(\\mathbf{a})$ and $g_i(\\mathbf{x}_k) \\to g_i(\\mathbf{a})$ for each $i$.} \\\\
                  \\text{By the limit laws for real sequences (products),} \\\\
                  \\text{$f_i(\\mathbf{x}_k) g_i(\\mathbf{x}_k) \\to f_i(\\mathbf{a}) g_i(\\mathbf{a})$ for each $i$.} \\\\
                  \\text{By the limit laws for real sequences (finite sums),} \\\\
                  h(\\mathbf{x}_k) = \\sum_{i=1}^{m} f_i(\\mathbf{x}_k) g_i(\\mathbf{x}_k) \\to \\sum_{i=1}^{m} f_i(\\mathbf{a}) g_i(\\mathbf{a}) = h(\\mathbf{a}). \\\\
                  \\text{Since $(\\mathbf{x}_k)$ was arbitrary, $h$ is continuous at $\\mathbf{a}$ by the} \\\\
                  \\text{sequential characterization.} \\\\
                  \\text{Since $\\mathbf{a} \\in S$ was arbitrary, $h$ is continuous.} \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 43,
    chapter: 5,
    section: 3,
    homework: 7,
    title: "Question 5.3.H",
    problem: `\\text{Let $f$ be a continuous real-valued function defined on an open} \\\\
              \\text{subset $U$ of $\\mathbb{R}^n$. Show that} \\\\
              \\{ (\\mathbf{x}, y) : \\mathbf{x} \\in U, \\ y > f(\\mathbf{x}) \\} \\\\
              \\text{is an open subset of $\\mathbb{R}^{n+1}$.}`,
    solution: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 17|Open]] \\\\
                  \\text{2) } [[definition 23|Continuity at a point]]`,
      },
      {
        title: "Solution",
        content: `\\text{Let $V = \\{(\\mathbf{x}, y) : \\mathbf{x} \\in U, \\ y > f(\\mathbf{x})\\}$ and let $(\\mathbf{a}, b) \\in V$.} \\\\
                  \\text{Define $\\varepsilon = \\frac{b - f(\\mathbf{a})}{2} > 0$, so that $b - \\varepsilon = f(\\mathbf{a}) + \\varepsilon$.} \\\\
                  \\text{Since $U$ is open, $\\exists r_1 > 0$ s.t. $B_{r_1}(\\mathbf{a}) \\subset U$, and since $f$ is} \\\\
                  \\text{continuous at $\\mathbf{a}$, $\\exists \\delta > 0$ s.t. $\\mathbf{x} \\in U$,} \\\\
                  \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < \\delta \\implies |f(\\mathbf{x}) - f(\\mathbf{a})| < \\varepsilon. \\\\
                  \\text{Define $r = \\min\\{r_1, \\delta, \\varepsilon\\}$, and let $\\lVert (\\mathbf{x}, y) - (\\mathbf{a}, b) \\rVert < r$.} \\\\
                  \\text{Then $\\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r$ and $|y - b| < r$. Since $r \\leq r_1$, $\\mathbf{x} \\in U$, and} \\\\
                  \\text{since $r \\leq \\delta$, $f(\\mathbf{x}) < f(\\mathbf{a}) + \\varepsilon$. Since $r \\leq \\varepsilon$,} \\\\
                  y > b - \\varepsilon = f(\\mathbf{a}) + \\varepsilon > f(\\mathbf{x}). \\\\
                  \\text{So $(\\mathbf{x}, y) \\in V$, i.e. $B_r((\\mathbf{a}, b)) \\subset V$. Since $(\\mathbf{a}, b) \\in V$ was} \\\\
                  \\text{arbitrary, $V$ is open in $\\mathbb{R}^{n+1}$.} \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 44,
    chapter: 5,
    section: 3,
    homework: 7,
    title: "Question 5.3.I",
    problem: `\\text{(a) Show that $m(x, y) = \\max\\{x, y\\}$ is continuous on $\\mathbb{R}^2$.} \\\\
              \\text{(b) Hence show that if $f$ and $g$ are continuous real-valued} \\\\
              \\text{functions on a set $S \\subset \\mathbb{R}^n$, then $h(\\mathbf{x}) = \\max\\{f(\\mathbf{x}), g(\\mathbf{x})\\}$} \\\\
              \\text{is continuous on $S$.} \\\\
              \\text{(c) Use induction to show that if $f_i$ are continuous real-valued} \\\\
              \\text{functions on $S$ for $1 \\leq i \\leq k$, then $h(\\mathbf{x}) = \\max_{1 \\leq i \\leq k} f_i(\\mathbf{x})$} \\\\
              \\text{is continuous.}`,
    solution: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 24|Continuous on a set]] \\\\
                  \\text{2) } [[theorem 22|Theorem 5.3.1]] \\\\
                  \\text{3) } [[theorem 5|Lemma 4.2.3]]`,
      },
      {
        title: "Part (a)",
        content: `\\text{Let $(a, b), (x, y) \\in \\mathbb{R}^2$ and $M = \\max\\{|x - a|, |y - b|\\}$. Then} \\\\
                  x \\leq a + |x - a| \\leq \\max\\{a, b\\} + M \\\\
                  \\text{and} \\\\
                  y \\leq b + |y - b| \\leq \\max\\{a, b\\} + M, \\\\
                  \\text{so $m(x, y) \\leq m(a, b) + M$.} \\\\
                  \\text{Swapping the roles of $(x, y)$ and $(a, b)$ gives $m(a, b) \\leq m(x, y) + M$,} \\\\
                  \\text{so} \\\\
                  |m(x, y) - m(a, b)| \\leq M \\leq \\lVert (x, y) - (a, b) \\rVert. \\\\
                  \\text{Given $\\varepsilon > 0$, take $\\delta = \\varepsilon$. Then} \\\\
                  \\lVert (x, y) - (a, b) \\rVert < \\delta \\implies |m(x, y) - m(a, b)| < \\varepsilon, \\\\
                  \\text{so $m$ is continuous on $\\mathbb{R}^2$.} \\ \\blacksquare`,
      },
      {
        title: "Part (b)",
        content: `\\text{Note $h(\\mathbf{x}) = m(f(\\mathbf{x}), g(\\mathbf{x}))$. Let $\\mathbf{a} \\in S$ and $(\\mathbf{x}_k) \\subset S$ with} \\\\
                  \\text{$\\mathbf{x}_k \\to \\mathbf{a}$. By continuity of $f$ and $g$, $f(\\mathbf{x}_k) \\to f(\\mathbf{a})$ and} \\\\
                  \\text{$g(\\mathbf{x}_k) \\to g(\\mathbf{a})$, so by [[theorem 5|Lemma 4.2.3]]} \\\\
                  (f(\\mathbf{x}_k), g(\\mathbf{x}_k)) \\to (f(\\mathbf{a}), g(\\mathbf{a})). \\\\
                  \\text{Since $m$ is continuous by (a),} \\\\
                  h(\\mathbf{x}_k) = m(f(\\mathbf{x}_k), g(\\mathbf{x}_k)) \\to m(f(\\mathbf{a}), g(\\mathbf{a})) = h(\\mathbf{a}). \\\\
                  \\text{So $h$ is continuous on $S$ by the [[theorem 22|sequential characterization]].} \\ \\blacksquare`,
      },
      {
        title: "Part (c)",
        content: `\\text{Let $h_k(\\mathbf{x}) = \\max_{1 \\leq i \\leq k} f_i(\\mathbf{x})$. We induct on $k$.} \\\\
                  \\text{For $k = 1$, $h_1 = f_1$ is continuous.} \\\\
                  \\text{Suppose $h_k$ is continuous for any continuous $f_1, \\ldots, f_k$, and let} \\\\
                  \\text{$f_1, \\ldots, f_{k+1}$ be continuous.} \\\\
                  \\text{The largest of $f_1(\\mathbf{x}), \\ldots, f_{k+1}(\\mathbf{x})$ is either the largest of the first} \\\\
                  \\text{$k$ or $f_{k+1}(\\mathbf{x})$, so} \\\\
                  h_{k+1}(\\mathbf{x}) = \\max\\{h_k(\\mathbf{x}), f_{k+1}(\\mathbf{x})\\}. \\\\
                  \\text{By the inductive hypothesis $h_k$ is continuous, so by (b) $h_{k+1}$} \\\\
                  \\text{is continuous. Hence by induction $h$ is continuous for all $k \\geq 1$.} \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 45,
    chapter: 5,
    section: 3,
    homework: 7,
    title: "Question 5.3.L",
    problem: `\\text{Give example of a continuous function $f$ and an open set $U$} \\\\
              \\text{such that $f(U)$ is not open.}`,
    solution: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 17|Open]] \\\\
                  \\text{2) } [[theorem 24|Algebra of Continuous Functions]]`,
      },
      {
        title: "Solution",
        content: `\\text{Let $f : \\mathbb{R} \\to \\mathbb{R}$, $f(x) = x^2$, which is continuous as a product of} \\\\
                  \\text{continuous functions, and let $U = (-1, 1)$, which is open.} \\\\
                  \\text{For $x \\in (-1, 1)$, $0 \\leq x^2 < 1$, and for $0 \\leq y < 1$, $y = f(\\sqrt{y})$} \\\\
                  \\text{with $\\sqrt{y} \\in (-1, 1)$. So $f(U) = [0, 1)$.} \\\\
                  \\text{Now $0 \\in f(U)$, but for any $r > 0$, $-\\frac{r}{2} \\in B_r(0)$ and $-\\frac{r}{2} \\notin f(U)$,} \\\\
                  \\text{so $B_r(0) \\not\\subset f(U)$.} \\\\
                  \\text{Hence $f(U) = [0, 1)$ is not open, even though $f$ is continuous} \\\\
                  \\text{and $U$ is open.} \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 46,
    chapter: 5,
    section: 4,
    homework: 7,
    title: "Question 5.4.A",
    problem: `\\text{If $A$ is a noncompact subset of $\\mathbb{R}^n$, show that there is a} \\\\
              \\text{bounded continuous real-valued function on $A$ that does not} \\\\
              \\text{attain its maximum.}`,
    solution: [
      {
        title: "Recall",
        content: `\\text{1) } [[theorem 17|Heine–Borel]] \\\\
                  \\text{2) } [[theorem 27|Extreme Value Theorem]] \\\\
                  \\text{3) } [[theorem 24|Algebra of Continuous Functions]]`,
      },
      {
        title: "Solution",
        content: `\\text{Since $A$ is not compact, by the [[theorem 17|Heine–Borel Theorem]] $A$ is either} \\\\
                  \\text{not closed or not bounded.} \\\\
                  \\text{Recall $\\mathbf{x} \\mapsto \\lVert \\mathbf{x} - \\mathbf{a} \\rVert$ is continuous, since} \\\\
                  \\big| \\lVert \\mathbf{x} - \\mathbf{a} \\rVert - \\lVert \\mathbf{y} - \\mathbf{a} \\rVert \\big| \\leq \\lVert \\mathbf{x} - \\mathbf{y} \\rVert. \\\\[0.5em]
                  \\text{\\textit{Case 1: $A$ is not closed.} Then $\\exists \\mathbf{a} \\in \\overline{A} \\setminus A$, so $\\exists (\\mathbf{x}_k) \\subset A$} \\\\
                  \\text{with $\\mathbf{x}_k \\to \\mathbf{a}$. Define} \\\\
                  f(\\mathbf{x}) = \\frac{1}{1 + \\lVert \\mathbf{x} - \\mathbf{a} \\rVert}, \\quad \\mathbf{x} \\in A. \\\\
                  \\text{$f$ is continuous as a quotient of continuous functions with} \\\\
                  \\text{nonzero denominator, and $0 < f \\leq 1$, so $f$ is bounded.} \\\\
                  \\text{Since $\\mathbf{a} \\notin A$, $\\lVert \\mathbf{x} - \\mathbf{a} \\rVert > 0$ for $\\mathbf{x} \\in A$, so $f(\\mathbf{x}) < 1$.} \\\\
                  \\text{But $f(\\mathbf{x}_k) \\to 1$, so $\\sup_A f = 1$ is never attained.} \\\\[0.5em]
                  \\text{\\textit{Case 2: $A$ is not bounded.} Then for each $k \\in \\mathbb{N}$, $\\exists \\mathbf{x}_k \\in A$} \\\\
                  \\text{with $\\lVert \\mathbf{x}_k \\rVert \\geq k$. Define} \\\\
                  f(\\mathbf{x}) = \\frac{\\lVert \\mathbf{x} \\rVert}{1 + \\lVert \\mathbf{x} \\rVert} = 1 - \\frac{1}{1 + \\lVert \\mathbf{x} \\rVert}, \\quad \\mathbf{x} \\in A. \\\\
                  \\text{$f$ is continuous as a quotient of continuous functions with} \\\\
                  \\text{nonzero denominator, and $0 \\leq f < 1$, so $f$ is bounded.} \\\\
                  \\text{Since $1 > f(\\mathbf{x}_k) \\geq 1 - \\frac{1}{1 + k}$, $f(\\mathbf{x}_k) \\to 1$, so $\\sup_A f = 1$ is} \\\\
                  \\text{never attained.} \\\\[0.5em]
                  \\text{In either case there is a bounded continuous function on $A$} \\\\
                  \\text{that does not attain its maximum.} \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 47,
    chapter: 5,
    section: 4,
    homework: 7,
    title: "Question 5.4.B",
    problem: `\\text{Find a \\textit{discontinuous} function on $[0, 1]$ that is bounded but does} \\\\
              \\text{not achieve its supremum.}`,
    solution: [
      {
        title: "Recall",
        content: `\\text{1) } [[theorem 27|Extreme Value Theorem]] \\\\
                  \\text{2) } [[definition 25|Discontinuous at a point]]`,
      },
      {
        title: "Solution",
        content: `\\text{Define $f : [0, 1] \\to \\mathbb{R}$ by} \\\\
                  f(x) = \\begin{cases} x & 0 \\leq x < 1 \\\\ 0 & x = 1. \\end{cases} \\\\
                  \\text{Then $0 \\leq f(x) < 1$ for all $x \\in [0, 1]$, so $f$ is bounded and never} \\\\
                  \\text{achieves $1$.} \\\\
                  \\text{But $f(1 - \\frac{1}{k}) = 1 - \\frac{1}{k} \\to 1$, so $\\sup_{[0,1]} f = 1$, which is not} \\\\
                  \\text{achieved.} \\\\
                  \\text{$f$ is discontinuous at $1$: $x_k = 1 - \\frac{1}{k} \\to 1$, but} \\\\
                  \\text{$f(x_k) \\to 1 \\neq 0 = f(1)$.} \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 48,
    chapter: 5,
    section: 4,
    homework: 7,
    title: "Question 5.4.E",
    problem: `\\text{Show that a function $f$ mapping a \\textit{compact} set $S \\subset \\mathbb{R}^n$ into $\\mathbb{R}^m$} \\\\
              \\text{is continuous if and only if its graph} \\\\
              G(f) = \\{ (\\mathbf{x}, f(\\mathbf{x})) : \\mathbf{x} \\in S \\} \\\\
              \\text{is compact.}`,
    solution: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 19|Compact]] \\\\
                  \\text{2) } [[theorem 22|Theorem 5.3.1]] \\\\
                  \\text{3) } [[theorem 26|Theorem 5.4.3]] \\\\
                  \\text{4) } [[theorem 5|Lemma 4.2.3]]`,
      },
      {
        title: "Solution",
        content: `\\text{($\\Rightarrow$) Suppose $f$ is continuous. Define $F : S \\to \\mathbb{R}^{n+m}$ by} \\\\
                  \\text{$F(\\mathbf{x}) = (\\mathbf{x}, f(\\mathbf{x}))$, so $G(f) = F(S)$.} \\\\
                  \\text{If $(\\mathbf{x}_k) \\subset S$ with $\\mathbf{x}_k \\to \\mathbf{a} \\in S$, then $f(\\mathbf{x}_k) \\to f(\\mathbf{a})$, so by} \\\\
                  \\text{[[theorem 5|Lemma 4.2.3]] $F(\\mathbf{x}_k) \\to F(\\mathbf{a})$. So $F$ is continuous, and by} \\\\
                  \\text{[[theorem 26|Theorem 5.4.3]] $G(f) = F(S)$ is compact.} \\\\[0.5em]
                  \\text{($\\Leftarrow$) Suppose $G(f)$ is compact. We use [[theorem 22|Theorem 5.3.1(2)]].} \\\\
                  \\text{Let $(\\mathbf{x}_k) \\subset S$ with $\\mathbf{x}_k \\to \\mathbf{a} \\in S$, and suppose for contradiction} \\\\
                  \\text{that $f(\\mathbf{x}_k) \\not\\to f(\\mathbf{a})$.} \\\\
                  \\text{Then $\\exists \\varepsilon > 0$ and a subsequence $(\\mathbf{x}_{k_j})$ with} \\\\
                  \\text{$\\lVert f(\\mathbf{x}_{k_j}) - f(\\mathbf{a}) \\rVert \\geq \\varepsilon$ for all $j$.} \\\\
                  \\text{Since $(\\mathbf{x}_{k_j}, f(\\mathbf{x}_{k_j})) \\in G(f)$ and $G(f)$ is compact, a further} \\\\
                  \\text{subsequence converges to some $(\\mathbf{b}, f(\\mathbf{b})) \\in G(f)$.} \\\\
                  \\text{By Lemma 4.2.3, $\\mathbf{x}_{k_{j_l}} \\to \\mathbf{b}$ and $f(\\mathbf{x}_{k_{j_l}}) \\to f(\\mathbf{b})$.} \\\\
                  \\text{But $\\mathbf{x}_{k_{j_l}} \\to \\mathbf{a}$, so $\\mathbf{b} = \\mathbf{a}$ by uniqueness of limits, and thus} \\\\
                  \\text{$f(\\mathbf{x}_{k_{j_l}}) \\to f(\\mathbf{a})$, contradicting $\\lVert f(\\mathbf{x}_{k_{j_l}}) - f(\\mathbf{a}) \\rVert \\geq \\varepsilon$.} \\\\
                  \\text{Hence $f(\\mathbf{x}_k) \\to f(\\mathbf{a})$, and by Theorem 5.3.1(2), $f$ is continuous.} \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 49,
    chapter: 5,
    section: 4,
    homework: 7,
    title: "Question 5.4.G",
    problem: `\\text{Suppose that $f$ is a \\textit{positive} continuous function on $\\mathbb{R}^n$ such that} \\\\
              \\lim_{\\lVert \\mathbf{x} \\rVert \\to \\infty} f(\\mathbf{x}) = 0 \\\\
              \\text{[i.e., for all $\\varepsilon > 0$, there is an $N$ so that $|f(\\mathbf{x})| < \\varepsilon$ for all} \\\\
              \\text{$\\mathbf{x}$ with $\\lVert \\mathbf{x} \\rVert > N$]. Show that $f$ attains its maximum.}`,
    solution: [
      {
        title: "Recall",
        content: `\\text{1) } [[theorem 17|Heine–Borel]] \\\\
                  \\text{2) } [[theorem 27|Extreme Value Theorem]]`,
      },
      {
        title: "Solution",
        content: `\\text{Take $\\varepsilon = f(\\mathbf{0}) > 0$. Then $\\exists N$ s.t. $\\lVert \\mathbf{x} \\rVert > N \\implies f(\\mathbf{x}) < f(\\mathbf{0})$.} \\\\
                  \\text{Let $K = \\{\\mathbf{x} \\in \\mathbb{R}^n : \\lVert \\mathbf{x} \\rVert \\leq N\\}$, which contains $\\mathbf{0}$ and is bounded.} \\\\
                  \\text{$K$ is closed: if $(\\mathbf{x}_k) \\subset K$ with $\\mathbf{x}_k \\to \\mathbf{x}$, then} \\\\
                  \\lVert \\mathbf{x} \\rVert = \\lim_{k \\to \\infty} \\lVert \\mathbf{x}_k \\rVert \\leq N. \\\\
                  \\text{So $K$ is compact by the [[theorem 17|Heine–Borel Theorem]].} \\\\[0.5em]
                  \\text{By the [[theorem 27|Extreme Value Theorem]], $\\exists \\mathbf{x}_0 \\in K$ s.t.} \\\\
                  \\text{$f(\\mathbf{x}) \\leq f(\\mathbf{x}_0)$ for all $\\mathbf{x} \\in K$.} \\\\
                  \\text{If $\\mathbf{x} \\notin K$, then $\\lVert \\mathbf{x} \\rVert > N$, so $f(\\mathbf{x}) < f(\\mathbf{0}) \\leq f(\\mathbf{x}_0)$ since $\\mathbf{0} \\in K$.} \\\\
                  \\text{So $f(\\mathbf{x}) \\leq f(\\mathbf{x}_0)$ for all $\\mathbf{x} \\in \\mathbb{R}^n$, i.e. $f$ attains its maximum} \\\\
                  \\text{at $\\mathbf{x}_0$.} \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 50,
    chapter: 5,
    section: 4,
    homework: 7,
    title: "Question 5.4.H",
    problem: `\\text{Let $f$ be a periodic function on $\\mathbb{R}$, meaning that there is $d > 0$} \\\\
              \\text{with $f(x + d) = f(x)$ for all $x \\in \\mathbb{R}$. (We call $d$ the period of $f$} \\\\
              \\text{if it is the least positive number with this property and say} \\\\
              \\text{that $f$ is d-periodic.) Show that if $f$ is continuous, then $f$} \\\\
              \\text{attains its maximum and minimum on $\\mathbb{R}$.}`,
    solution: [
      {
        title: "Recall",
        content: `\\text{1) } [[theorem 17|Heine–Borel]] \\\\
                  \\text{2) } [[theorem 27|Extreme Value Theorem]]`,
      },
      {
        title: "Solution",
        content: `\\text{First, $f(t + kd) = f(t)$ for all $t \\in \\mathbb{R}$, $k \\in \\mathbb{Z}$.} \\\\
                  \\text{For $k \\geq 0$ this follows by induction, since} \\\\
                  f(t + (k+1)d) = f((t + kd) + d) = f(t + kd). \\\\
                  \\text{For $k = -j < 0$, $f(t) = f((t - jd) + jd) = f(t - jd)$ by the case $j \\geq 0$.} \\\\[0.5em]
                  \\text{$[0, d]$ is compact by the [[theorem 17|Heine–Borel Theorem]], so by the} \\\\
                  \\text{[[theorem 27|Extreme Value Theorem]] $\\exists x_{\\min}, x_{\\max} \\in [0, d]$ s.t.} \\\\
                  \\text{$f(x_{\\min}) \\leq f(t) \\leq f(x_{\\max})$ for all $t \\in [0, d]$.} \\\\
                  \\text{Let $x \\in \\mathbb{R}$, $k = \\lfloor x/d \\rfloor$, and $t = x - kd$. Since $k \\leq x/d < k + 1$,} \\\\
                  \\text{$t \\in [0, d)$, so} \\\\
                  f(x_{\\min}) \\leq f(t) = f(t + kd) = f(x) \\leq f(x_{\\max}). \\\\
                  \\text{Since $x$ was arbitrary, $f$ attains its maximum at $x_{\\max}$ and its} \\\\
                  \\text{minimum at $x_{\\min}$ on $\\mathbb{R}$.} \\ \\blacksquare`,
      },
    ],
  },
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
];
