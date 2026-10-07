export const theorems = [
  {
    number: 1,
    title: "Cancellation Law",
    statement: "\\text{Let } G \\text{ be a group. If } ab = ac \\text{ then } b = c",
    proof: `\\text{Let } a, b, c \\in G.
            \\\\ \\text{Assume } ab = ac.
            \\\\ \\text{Since G is a group, } a^{-1} \\in G.
            \\\\ \\text{So, } a^{-1}(ab) = a^{-1}(ac).
            \\\\ \\text{By associativity, } (a^{-1}a)b = (a^{-1}a)c.
            \\\\ \\text{Since } a^{-1}a = e, 
            \\\\ \\text{we have } eb = ec.
            \\\\ \\text{Thus, } b = c.
            `
  },
  {
    number: 2,
    title: "Uniqueness of Inverse",
    statement: "\\text{For any group, the inverse of any element } a \\text{ is unique}",
    proof: `\\text{Let } a, b, c \\in G.
            \\\\ \\text{Assume } b \\text{ and } c \\text{ are inverses of } a.
            \\\\ \\text{So } ab = e \\text{ and } ac = e \\text{ are true}.
            \\\\ \\text{Then, } b = eb = (ca)b = c(ab) = ce = c.
            \\\\ \\text{Therefore, the inverse of } a \\text{ is unique.}
            ` 
  },
  {
    number: 3,
    title: "Subgroup Test",
    statement: `\\text{Let } G \\text{ be a group and let } H \\subseteq G.
                \\\\ \\text{Then } H \\text{ is a subgroup of } G \\text{ iff } H \\text{ is non-empty} \\text{ and}
                \\\\  \\forall a, b \\in H \\text{ we have } a^{-1}b \\in H`,
    proof: `\\text{Assume H} \\leq G. \\text{ Let } a, b \\in H.
            \\\\ \\text{By definition of subgroup, } \\forall a \\in H \\ \\exists a^{-1} \\in H,
            \\\\ \\forall a, b \\in H \\ ab \\in H, \\text{ and } e \\in H. \\text{ (For shits and giggles)}
            \\\\ \\text{Since } e \\in H, \\text{ it is non-empty.}
            \\\\ \\text{By inverse property, } a^{-1} \\in H.
            \\\\ \\text{By closure property, } a^{-1}b \\in H.
            \\\\ \\text{Conversely, assume H is non-empty and}
            \\\\ \\forall a, b \\in H \\text{ we have } a^{-1}b \\in H.
            \\\\ \\text{Since } H \\text{ is non-empty, } \\exists x \\in H.
            \\\\ \\text{Take } a = b = x \\text{ then, } a^{-1}b = x^{-1}x = e \\in H.
            \\\\ \\text{Now assume } y \\in H, \\text{ take } a = y \\text{ and } b = e.
            \\\\ \\text{Then } a^{-1}b = y^{-1}e = y^{-1} \\in H.
            \\\\ \\text{Finally, given } x, y \\in H \\text{ take } a = x^{-1}, b = y.
            \\\\ \\text{Then } a^{-1}b = (x^{-1})^{-1}y = xy \\in H.
            \\\\ \\text{Hence, } H \\leq G.
            `
  },
  {
    number: 4,
    title: "Subgroup Equivalence Relation",
    statement: `\\text{Let } G \\text{ be a group and let } H \\leq G.
                \\\\ \\text{The relation } \\forall x, y \\in G 
                \\\\ x^{-1}y \\sim (x)^{-1} \\iff x^{-1}y \\in H,
                \\\\ \\text{is an equivalence relation.}`,
    proof: `\\text{Let } x \\in G.
            \\\\ \\text{Then } x^{-1}x = e \\in H.
            \\\\ \\text{So, } x \\sim x, \\text{ hence } \\sim \\text{ is reflexive.}
            \\\\ \\text{Now, let } x, y \\in G \\text{ such that } x \\sim y.
            \\\\ \\text{Since } H \\text{ is a subgroup, } (x^{-1}y)^{-1} \\in H, 
            \\\\ \\text{so } y^{-1}x \\in H, \\text{ hence } \\sim \\text{ is symmetric.}
            \\\\ \\text{Let } x, y, z \\in G \\text{ such that } x \\sim y \\text{ and } y \\sim z.
            \\\\ \\text{Then } x^{-1}y \\in H \\text{ and } y^{-1}z \\in H.
            \\\\ \\text{Since } H \\text{ is a subgroup, } (x^{-1}y)(y^{-1}z) = x^{-1}z \\in H,
            \\\\ \\text{hence } x \\sim z, \\text{ so } \\sim \\text{ is transitive.}
            \\\\ \\text{Therefore, } \\sim \\text{ is an equivalence relation.}
                          `,
    description: ""
  },
  {
    number: 5,
    title: "Left Cosets of x are Equivalence Classes of x",
    statement: `\\text{Let } H \\leq G \\text{ and } x^{-1}y \\sim (x)^{-1} \\iff x^{-1}y \\in H. 
                \\\\ \\text{Then } \\forall x \\in G, \\text{ we have } [x] = \\{xh \\ | \\ h \\in H\\}.
                `,
    proof: `\\text{Let } y \\in [x].
            \\\\ \\text{Then } y \\sim x, \\text{and by symmetry}, x \\sim y.
            \\\\ \\text{So, } x^{-1}y \\in H.
            \\\\ \\text{Let } h_0 = x^{-1}y. \\text{ Then } xh_0 = y.
            \\\\ \\text{So } y \\in \\{xh \\ | \\ h \\in H\\}.
            \\\\ \\text{Conversely, let } y \\in \\{xh \\ | \\ h \\in H\\}.
            \\\\ \\text{So } \\exists h_0 \\in H \\text{ such that } y = xh_0.
            \\\\ \\text{Then } x^{-1}y = h_0 \\in H, \\text{ hence } x^{-1}y \\in H.
            \\\\ \\text{So } y \\sim x, \\text{ and therefore } y \\in [x].
            \\\\ \\text{Hence } [x] = \\{xh \\ | \\ h \\in H\\}. \\ \\ \\blacksquare
            `
  },
  {
    number: 6,
    title: "Intersection of Subgroups",
    statement: `\\text{Let } G \\text{ be a group and let } H \\text{ and } K \\text{ be two subgroups.} 
                \\\\ \\text{Then } H \\cap K \\text{ is also a subgroup of } G
                `,
    proof: `\\text{Since } e \\in H \\text{ and } e \\in K, \\text{ we have } e \\in H \\cap K,
            \\\\ \\text{so the intersection is non-empty.}
            \\\\ \\text{Let } a, b \\in H \\cap K.
            \\\\ \\text{Then } a, b \\in H \\text{ and } a, b \\in K.
            \\\\ \\text{Since } H \\leq G \\text{ and } K \\leq G, \\ a^{-1}b \\in H \\text{ and } a^{-1}b \\in K.
            \\\\ \\text{Therefore, } a^{-1}b \\in H \\cap K.
            \\\\ \\text{Hence, } H \\cap K \\leq G.
            `
  },
  {
    number: 7,
    title: "Homomorphism Properties",
    statement: `\\text{Let } \\phi: G \\to K \\text{ be a homomorphism.}
                \\\\ \\text{Then } \\phi(e_G) = e_K \\text{ and } \\forall a \\in G, \\ \\phi(a^{-1}) = (\\phi(a))^{-1}.
                `,
    proof: `\\text{To show } \\phi(e_G) = e_K.
            \\\\ \\text{We have } \\phi(e_G) = \\phi(e_G e_G) = \\phi(e_G) \\phi(e_G),
            \\\\ \\text{and } \\phi(e_G) = \\phi(e_G)e_K.
            \\\\ \\text{So } \\phi(e_G) \\phi(e_G) = \\phi(e_G)e_K.
            \\\\ \\text{By cancellation law, } \\phi(e_G) = e_K.
            \\\\ \\text{Now, to show } \\forall a \\in G, \\ \\phi(a^{-1}) = (\\phi(a))^{-1}.
            \\\\ \\text{Let } a \\in G.
            \\\\ \\text{Then } \\phi(a^{-1}) \\phi(a) = \\phi(a^{-1}a) = \\phi(e_G) = e_K.
            \\\\ \\text{Similarly, } \\phi(a) \\phi(a^{-1}) = \\phi(aa^{-1}) = \\phi(e_G) = e_K.
            \\\\ \\text{Because } \\phi(a^{-1}) \\phi(a) = \\phi(a) \\phi(a^{-1}) = e_K,
            \\\\ \\text{we conclude that } \\phi(a^{-1}) = (\\phi(a))^{-1}.
            `
  },
  {
    number: 8,
    title: "Image of a Subgroup is a Subgroup",
    statement: `\\text{Let } \\phi: G \\to K \\text{ be a homomorphism. and let } H \\leq G.
                \\\\ \\text{Then } \\phi(H) \\leq K.
    `,
    proof: `\\text{Since } H \\text{ is non-empty, } \\phi(H) \\text{ is non-empty}.
            \\\\ \\text{Let } x, y \\in \\phi(H).
            \\\\ \\text{So } \\exists a, b \\in H \\text{ such that } x = \\phi(a) \\text{ and } y = \\phi(b).
            \\\\ \\text{Then } x^{-1}y = \\phi(a^{-1}) \\phi(b) = \\phi(a^{-1}b).
            \\\\ \\text{Since } H \\leq G, \\ a^{-1}b \\in H. \\text{ So, } \\phi(a^{-1}b) \\in \\phi(H).
            \\\\ \\text{So } x^{-1}y \\in \\phi(H), \\text{ and therefore }, \\phi(H) \\leq K. \\ \\ \\blacksquare
    `
  },
  {
    number: 9,
    title: "Kernel of a Homomorphism is a Subgroup of The Domain",
    statement: `\\text{Let } \\phi: G \\to K \\text{ be a homomorphism.} \\text{ Then } \\ker(\\phi) \\leq G`,
    proof: `\\text{Since } \\phi(e) = e, \\ e \\in \\ker(\\phi), \\text{ and the kernel is non-empty.}
            \\\\ \\text{Let } a, b \\in \\ker(\\phi).
            \\\\ \\text{Then } \\phi(a^{-1}b) = \\phi(a^{-1})\\phi(b) = (\\phi(a))^{-1}\\phi(b) = e^{-1}e = e.
            \\\\ \\text{So } a^{-1}b \\in \\ker(\\phi).
            \\\\ \\text{Hence, } \\ker(\\phi) \\leq G.
    `
  },
  {
    number: 10,
    title: "Injective Homomorphism",
    statement: `\\text{A homomorphism } \\phi: G \\to K \\text{ is injective} 
                \\\\ \\text{iff } \\ker(\\phi) = \\{e\\}`,
    proof: `\\text{Assume } \\phi: G \\to K \\text{ is injective}.
            \\\\ \\text{Let } x \\in \\ker(\\phi) \\text{ then } \\phi(x) = e.
            \\\\ \\text{Since } \\phi \\text{ is injective, } \\text{ and } \\phi(e) = e,
            \\\\ \\text{we have } x = e.
            \\\\ \\text{So, } \\ker(\\phi) = \\{e\\}.
            \\\\ \\text{Conversely, assume } \\ker(\\phi) = \\{e\\}.
            \\\\ \\text{Let } a, b \\in G \\text{ such that } \\phi(a) = \\phi(b).
            \\\\ \\text{Then } \\phi(a^{-1}) \\phi(a) = \\phi(a^{-1}) \\phi(b).
            \\\\ \\text{So, } e = \\phi(a^{-1}b).
            \\\\ \\text{Which shows, } a^{-1}b \\in \\ker(\\phi).
            \\\\ \\text{By our assumption, } a^{-1}b = e.
            \\\\ \\text{Hence, } a = b.
            \\\\ \\text{Therefore, } \\phi \\text{ is injective.} \\ \\ \\blacksquare
    `
  },
  {
    number: 11, 
    title: "Normal Subgroup Properties",
    statement: `\\text{Let } H \\leq G. \\text{ then the following are equivalent:} 
                \\\\ \\quad \\text{1) } H \\trianglelefteq G 
                \\\\ \\quad \\text{2) } xH * yH = xyH \\ \\forall x, y \\in G
                \\\\ \\quad \\quad \\ \\text{is well-defined on the coset space G/H}

                \\\\ \\quad \\text{3) } \\forall x \\in G \\text{ we have } xH = Hx.
                `,
    proof: `(1) \\implies (2)
            \\\\ \\text{Assume } H \\trianglelefteq G. 
            \\\\ \\text{We show } xH * yH = xyH \\ \\ \\forall x, y \\in G 
            \\\\ \\text{ is a well-defined operation.}
            \\\\ \\text{For this, let } x, y, a, b \\in G \\text{ such that } x \\sim a \\text{ and } y \\sim b.
            \\\\ \\text{We need to show that } xy \\sim ab.
            \\\\ \\text{Since } x \\sim a, \\text{ we have } x^{-1}a \\in H. 
            \\\\ \\text{Similarly, } y^{-1}b \\in H.
            \\\\ \\text{Denote } h_1 = x^{-1}a \\text{ and } h_2 = y^{-1}b.
            \\\\ \\text{We have } (xy)^{-1}ab = y^{-1}x^{-1}ab.
            \\\\ \\text{Since } h_1 = x^{-1}a \\text{ we have } y^{-1}h_1b.
            \\\\ \\text{Since } H \\trianglelefteq G \\text{ and } h_1 \\in H,
            \\\\ \\text{we get } y^{-1}h_1y \\in H.
            \\\\ \\text{Since } h_2 \\in H \\text{ and } H \\text{ is a normal subgroup},
            \\\\ y^{-1}h_1yh_2 \\in H.
            \\\\ \\text{By substituting, } y^{-1}x^{-1}ayy^{-1}b \\in H.
            \\\\ \\text{Which simplifies to } y^{-1}x^{-1}ab \\in H.
            \\\\ \\text{So, } (xy)^{-1}ab \\in H. \\text{ Hence } xy \\sim ab.
            \\\\ \\text{Thus, coset multiplication is well-defined.}
            \\\\ (2) \\implies (3)
            \\\\ \\text{Assume coset multiplication is well-defined.} 
            \\\\ \\text{Let } g \\in G \\text{ and } h \\in H.
            \\\\ \\text{Since } H \\leq G, h \\sim e.
            \\\\ \\text{So } [h] = [e], \\text{ and thus } hH = eH = H.
            \\\\ hH = eH \\implies gH * hH = gH * eH \\implies ghH = gH
            \\\\ \\implies ghH * g^{-1}H = gH * g^{-1}H \\implies ghg^{-1}H = eH.
            \\\\ \\text{So } ghg^{-1} \\in H \\text{ and } \\exists h' \\in H \\text{ such that } ghg^{-1} = h'.
            \\\\ \\text{This implies } gh = h'g \\in Hg.
            \\\\ \\text{Thus, } gH \\subseteq Hg.
            \\\\ \\text{Similarly, we can show } Hg \\subseteq gH.
            \\\\ \\text{Let } g \\in G \\text{ and } h \\in H.
            \\\\ \\text{Since } h \\sim e, \\text{ we have } hH = eH = H.
            \\\\ hH = eH \\implies hH * gH = eH * gH \\implies hgH = gH
            \\\\ \\implies g^{-1}H * hgH = g^{-1}H * gH \\implies g^{-1}hgH = eH.
            \\\\ \\text{So } g^{-1}hg \\in H \\text{ and } \\exists h' \\in H \\text{ such that } g^{-1}hg = h'.
            \\\\ \\text{This implies } hg = gh' \\in gH.
            \\\\ \\text{Hence, } gH = Hg.
            \\\\ (3) \\implies (1)
            \\\\ \\text{Assume } xH = Hx \\ \\forall x \\in G.
            \\\\ \\text{Let } g \\in G \\text{ and } h \\in H.
            \\\\ \\text{Since } gH = Hg \\text{ and } gh \\in gH, \\text{ it follows that } gh \\in Hg.
            \\\\ \\text{So } \\exists h' \\in H  \\text{ such that } gh = h'g.
            \\\\ \\text{Then } ghg^{-1} = h' \\in H.
            \\\\ \\text{Thus, } \\forall g \\in G \\ \\forall h \\in H \\ ghg^{-1} \\in H.
            \\\\ \\text{Hence } H \\trianglelefteq G. \\ \\ \\blacksquare
          
    `
  },
  {
    number: 12,
    title: "Quotient Group",
    statement: `\\text{Let } H \\trianglelefteq G. \\text{ Then } G/H \\text{ with coset multiplication is a group}`,
    proof: `\\text{First, we check * is associative.}
            \\\\ \\text{Let } x, y, z \\in G.
            \\\\ \\text{Then } (xH * yH) * zH = (xy)H * zH = (xy)zH 
            \\\\ = x(yz)H = xH * yH * zH.
            \\\\ \\text{This shows } * \\text{ is associative.}
            \\\\ \\text{We next show the coset } eH 
            \\\\ \\text{is a neutral element for } (G/H, *).
            \\\\ \\text{For this, let } x \\in G.
            \\\\ \\text{We have } xH * eH = xeH = xH.
            \\\\ \\text{Similarly, } eH * xH = exH = xH.
            \\\\ \\text{So, } eH \\text{ is a neutral element for } (G/H, *).
            \\\\ \\text{Finally, let } x \\in G.
            \\\\ \\text{Then } xH * x^{-1}H = xx^{-1}H = eH
            \\\\ \\text{and } x^{-1}H * xH = x^{-1}xH = eH.
            \\\\ \\text{Which shows } x^{-1}H \\text{ is the inverse of } xH.
            \\\\ \\text{Hence every element of } G/H \\text{ has an inverse.}
            \\\\ \\text{Thus, } (G/H, *) \\text{ is a group.}
    `
  },
  {
    number: 13,
    title: "First Isomorphism Theorem",
    statement: `\\text{Let } G \\text{ and } K \\text{ be groups,}
                \\\\ \\text{and let } \\phi: G \\to K \\text{ be a homomorphism.}
                \\\\ \\text{Then } \\ker(\\phi) \\trianglelefteq G, \\text{ and } G/\\ker(\\phi) \\cong Im(\\phi) \\text{ canonically.}
    `,
    proof: `\\text{Let } \\phi: G \\to K \\text{ be a homomorphism, and let } N = \\ker(\\phi).
            \\\\ \\text{To show } N \\text{ is normal, let } g \\in G \\text{ and } x \\in N.
            \\\\ \\text{Then } \\phi(gxg^{-1}) = \\phi(g) \\phi(x) \\phi(g^{-1}) = \\phi(g) \\phi(g)^{-1} = e.
            \\\\ \\text{Which shows } gxg^{-1} \\in N.
            \\\\ \\text{By Theorem 9, } N \\leq G .
            \\\\ \\text{Thus, } N \\trianglelefteq G.
            \\\\ \\text{Next we show } G/N \\cong \\phi(G).
            \\\\ \\text{Define } \\psi: G/N \\to \\phi(G) \\text{ by } \\psi(gN) = \\phi(g) \\ \\ \\forall g \\in G.
            \\\\ \\text{First, we need to check that } \\psi \\text{ is well-defined,}
            \\\\ \\text{i.e. whenever gN= hN for } g, h \\in G \\text{ we have } \\phi(g) = \\phi(h).
            \\\\ \\text{So, assume } g, h \\in G \\text{ and } gN = hN.
            \\\\ \\text{This means } g \\sim h \\text{ and } g^{-1}h \\in N.
            \\\\ \\text{So, } \\phi(g^{-1}h) = e \\text{ and therefore } \\phi(g^{-1}) \\phi(h) = e.
            \\\\ \\text{Which implies } \\phi(h) = \\phi(g),
            \\\\ \\text{hence } \\psi \\text{ is well-defined.} 
            \\\\ \\text{We next show that } \\psi \\text{ is an isomorphism.}
            \\\\ \\text{To show } \\psi \\text{ is a homomorphism, } \\text{ let } xN, yN \\in G/N.
            \\\\ \\text{We have } \\psi(xN * yN) = \\psi(xyN) = \\phi(xy)
            \\\\ = \\phi(x) \\phi(y) = \\psi(xN) \\psi(yN).
            \\\\ \\text{So } \\psi \\text{ is a homomorphism.}
            \\\\ \\text{To see } \\psi \\text{ is injective, let } \\psi(xN) = \\psi(yN) \\text{ for some } x, y \\in G.
            \\\\ \\text{Which implies } e = \\phi(x)^{-1} \\phi(y) = \\phi(x^{-1}y).
            \\\\ \\text{So } x^{-1}y \\text{ in } N, \\text{ hence } xN = yN,
            \\\\ \\text{ and so } \\psi \\text{ is injective.}
            \\\\ \\text{Finally to show } \\psi \\text{ is surjective,}
            \\\\ \\text{let } z \\in \\phi(G).
            \\\\ \\text{Then } \\exists g \\in G \\text{ such that } z = \\phi(g).
            \\\\ \\text{Then } \\psi(gN) = \\phi(g) = z,
            \\\\ \\text{and so } \\psi \\text{ is surjective.} \\ \\ \\blacksquare
    `
  },
  {
    number: 14,
    title: "The Group of Automorphisms",
    statement: "\\text{The set Aut}(G) \\text{ with composition is a group.}", 
    proof: `\\text{Define } \\Lambda \\text{ as } \\Lambda(x) = x \\ \\ \\forall x \\in G.
            \\\\ \\Lambda \\text{ is } \\textbf{obviously} \\text{ a bijective homomorphism mapping } G \\to G.\
            \\\\ \\text{So } \\Lambda \\in \\text{Aut}(G).
            \\\\ \\text{(For funsies) Let } \\phi \\in \\text{Aut}(G) \\text{ and } x \\in G.
            \\\\ \\text{Then } (\\phi \\circ \\Lambda)(x) = \\phi(x) \\text{ and } (\\Lambda \\circ \\phi)(x) = \\phi(x).
            \\\\ \\text{So } \\Lambda \\text{ is the identity element of Aut}(G). 
            \\\\ (\\Lambda \\text{ is called the identity function } id)
            \\\\ \\text{Let } \\phi, \\psi \\in \\text{Aut}(G).
            \\\\ \\text{Then } \\phi \\text{ and } \\psi \\text{ are bijective}
            \\\\ \\text{and for every } x, y \\in G 
            \\\\ (\\phi \\circ \\psi)(xy) = \\phi(\\psi(xy)) = \\phi(\\psi(x)\\psi(y)) = \\phi(\\psi(x)) \\phi(\\psi(y)).
            \\\\ \\text{Which shows } \\phi \\circ \\psi \\text{ is a homomorphism.}
            \\\\ \\text{Since compositions of bijective mappings}
            \\\\ \\text{are bijective, } \\phi \\circ \\psi \\in \\text{Aut}(G).
            \\\\ \\text{Let } \\phi \\in \\text{Aut}(G).
            \\\\ \\text{Since } \\phi \\text{ is bijective, there exists a function}
            \\\\ \\psi: G \\to G \\text{ such that } \\phi \\circ \\psi = x = \\psi(\\phi(x)) \\ \\ \\forall x \\in G.
            \\\\ \\text{We show } \\psi \\text{ is also a homomorphism.}
            \\\\ \\text{For this, let } x, y \\in G.
            \\\\ \\text{Then } xy = \\phi(\\psi(xy))
            \\\\ \\text{and } xy = \\phi(\\psi(x)) \\phi(\\psi(y)) = \\phi(\\psi(x)\\psi(y)).
            \\\\ \\text{So } \\phi(\\psi(xy)) = \\phi(\\psi(x)\\psi(y)).
            \\\\ \\text{Since } \\phi \\text{ is injective, it follows that } \\psi(xy) = \\psi(x)\\psi(y).
            \\\\ \\text{Hence, } \\psi \\text{ is a homomorphism,} 
            \\\\ \\text{and so } \\psi \\in \\text{Aut}(G) \\text{ is the inverse of } \\phi.
            \\\\ \\text{To show } \\circ \\text{ is associative, }
            \\\\ \\text{let } \\phi, \\psi, \\tau \\in \\text{Aut}(G) \\text{ and } a \\in G.
            \\\\ \\text{We have } ((\\phi \\circ \\psi) \\circ \\tau)(a) = \\phi(\\psi(a)) \\circ \\tau(a) = \\phi(\\psi(\\tau(a)))
            \\\\ \\text{and } (\\phi \\circ (\\psi \\circ \\tau))(a) = \\phi(a) \\circ \\psi(\\tau(a)) = \\phi(\\psi(\\tau(a))).
            \\\\ \\text{So } ((\\phi \\circ \\psi) \\circ \\tau)(a) = (\\phi \\circ (\\psi \\circ \\tau))(a).
            \\\\ \\text{Which shows } \\circ \\text{ is associative.}

    `
  },
  {
    number:15,
    title:"Inner Automorphism",
    statement: `\\text{Let } g \\in G. 
                \\\\ \\text{Define } \\phi_g: G \\to G \\text{ such that } \\phi_g(x) = gxg^{-1} \\ \\ \\forall x \\in G.
                \\\\ \\phi_g \\text{ is an automorphism}.
    `,
    proof: `\\text{First, to show } \\phi_g \\text{ is a homomorphism,}
            \\\\ \\text{let } x, y \\in G.
            \\\\ \\text{Then } \\phi_g(x) \\phi_g(y) = (gxg^{-1})(gyg^{-1})
            \\\\ \\text{by associativity, } (gxg^{-1})(gyg^{-1}) = gxyg^{-1} = \\phi_g(xy).
            \\\\ \\text{So } \\phi_g \\text{ is a homomorphism.}
            \\\\ \\text{Next, to show } \\phi_g \\text{ is injective,}
            \\\\ \\text{let } x, y \\in G \\text{ such that } \\phi_g(x) = \\phi_g(y).
            \\\\ \\text{Then } gxg^{-1} = gyg^{-1} \\implies gxg^{-1}g = gyg^{-1}g
            \\\\ \\implies gx = gy \\implies g^{-1}gx = g^{-1}gy \\implies x = y.
            \\\\ \\text{So } \\phi_g \\text{ is injective.}
            \\\\ \\text{Finally, to show } \\phi_g \\text{ is surjective, let } z \\in G.
            \\\\ \\text{Let } g, x \\in G \\text{ such that } x = g^{-1}zg. 
            \\\\ \\text{Then } \\phi_g(x) = g(g^{-1}zg)g^{-1} = z.
            \\\\ \\text{So } \\phi_g \\text{ is surjective.}
            \\\\ \\text{Hence, } \\phi_g \\text{ is an automorphism.}
    `
  },
  {
    number: 16,
    title: "Subscript of Inner Automorphisms is Homomorphic",
    statement: `\\text{The map } \\Phi: G \\to \\text{Aut}(G) \\text{ defined by }
                \\\\ \\Phi(g) = \\phi_g \\ \\ \\forall g \\in G, \\text{ is a homomorphism.}
    `,
    proof: `\\text{Let } g, h \\in G. 
            \\\\ \\text{Then for every } x \\in G,
            \\\\ \\text{we have } \\phi_{gh}(x) = ghx(gh)^{-1} = ghxh^{-1}g^{-1}.
            \\\\ \\text{On the other hand,}
            \\\\ (\\phi_g \\circ \\phi_h)(x) = \\phi_g(\\phi_h(x)) = \\phi_g(hxh^{-1}) = ghxh^{-1}g^{-1}.
            \\\\ \\text{Hence, } \\phi_{gh}(x) = (\\phi_g \\circ \\phi_h)(x).
            \\\\ \\text{Which shows, } \\Phi(gh) = \\Phi(g) \\circ \\Phi(h).
                       `
  },
  {
    number: 17,
    title: "The Inner Automorphisms Are A Normal Subgroup of Automorphisms",
    statement: "\\text{Inn}(G) \\trianglelefteq \\text{Aut}(G)",
    proof: `\\text{First, to show Inn}(G) \\leq \\text{Aut}(G),
            \\\\ \\text{let } \\phi_g \\in \\text{Inn}(G).
            \\\\ \\text{We know } \\phi_g \\text{ is an automporphism by Theorem 15.}
            \\\\ \\text{To show } id \\in \\text{Inn}(G), \\text{ let } \\phi_e \\in \\text{Inn}(G)
            \\\\ \\text{Then } \\phi_e = exe^{-1} = x = id.
            \\\\ \\text{So } id \\in \\text{Inn}(G).
            \\\\ \\text{Next, to show } \\circ \\text{ is well-defined in Inn}(G).
            \\\\ \\text{Let } g, h \\in G. \\text{ Then } \\forall x \\in G \\text{ we have,}
            \\\\ \\phi_{gh}(x) = ghx(gh)^{-1} = ghxh^{-1}g^{-1}.
            \\\\ \\text{On the other hand},
            \\\\ (\\phi_g \\circ \\phi_h)(x) = \\phi_g(hxh^{-1}) = ghxh^{-1}g^{-1}.
            \\\\ \\text{So, } \\phi_{gh}(x) = (\\phi_g \\circ \\phi_h)(x).
            \\\\ \\text{Which shows } \\circ \\text{ is well-defined in Inn}(G).
            \\\\ \\text{Finally, to show } \\phi_g \\text{ has an inverse in Inn}(G),
            \\\\ \\text{let } g, g^{-1} \\in G. \\text{ Then } \\ \\forall x \\in G, \\text{we have}
            \\\\ (\\phi_g \\circ \\phi_{g^{-1}})(x) = \\phi_g(g^{-1}xg) = gg^{-1}xgg^{-1} = x = id.
            \\\\ \\text{This shows } \\phi_g \\text{ has an inverse in Inn}(G).
            \\\\ \\text{Thus, Inn}(G) \\leq \\text{Aut}(G).
            \\\\ \\text{To show Inn}(G) \\trianglelefteq \\text{Aut}(G), 
            \\\\ \\text{let } g \\in G, \\psi \\in \\text{Aut}(G), \\text{ and } \\phi_g \\in \\text{Inn}(G).
            \\\\ \\text{Then for every } x \\in G,
            \\\\ (\\psi \\circ \\phi_g \\circ \\psi^{-1})(x) = \\psi(g \\ \\psi(x)^{-1} \\ g^{-1}).
            \\\\ \\text{Because } \\psi \\in \\text{Aut}(G),
            \\\\ \\psi(g \\ \\psi(x)^{-1} \\ g^{-1}) = \\psi(g) \\ x \\ \\psi(g)^{-1}
            \\\\ = \\phi_{\\psi(g)}(x) \\in \\text{Inn}(G).
            \\\\ \\text{So, } (\\psi \\circ \\phi_g \\circ \\psi^{-1})(x) \\in \\text{Inn}(G).
            \\\\ \\text{Hence, Inn}(G) \\trianglelefteq \\text{Aut}(G). \\ \\ \\blacksquare
                          `
  },
  {
    number: 18,
    title: "Sets of the Same Cardinality have Isomorphic Permutation Groups",
    statement: `\\text{Let X and Y be sets.}
                \\\\ \\text{If } |X| = |Y|, \\text{ then } S_X \\cong S_Y.
    `,
    proof: `\\text{Since } |X| = |Y|,
            \\\\ \\exists \\text{ a bijective function } \\rho: X \\to Y.
            \\\\ \\text{Define } \\Phi: S_X \\to S_Y \\text{ by } \\Phi(f) = \\rho \\circ f \\circ \\rho^{-1}.
            \\\\ \\text{Notice that } \\rho^{-1}: Y \\to X, f: X \\to X, \\text{ and } \\rho: X \\to Y,
            \\\\ \\text{so their composition } \\Phi(f) \\text{ maps } Y \\to Y.
            \\\\ \\text{Since } \\rho^{-1}, \\rho, \\text{ and } f \\text{ are all bijective,}
            \\\\ \\Phi(f) \\text{ is also bijective}.
            \\\\ \\text{Hence, } \\Phi(f) \\in S_Y. 
            \\\\ \\text{To check } \\Phi \\text{ is a homomorphism,}
            \\\\ \\text{let } f_1, f_2 \\in S_X.
            \\\\ \\text{Then } \\Phi(f_1) \\circ \\Phi(f_2) = (\\rho \\circ f_1  \\circ \\rho^{-1}) \\circ (\\rho \\circ f_2 \\circ \\rho^{-1})
            \\\\ = \\rho \\circ f_1 \\circ f_2 \\circ \\rho^{-1} = \\Phi(f_1 \\circ f_2).
            \\\\ \\text{This shows } \\Phi \\text{ is a homomorphism.} 
            \\\\ \\text{To show } \\Phi \\text{ is injective,}
            \\\\ \\text{let } f_1, f_2 \\in S_X \\text{ such that } \\Phi(f_1) = \\Phi(f_2).
            \\\\ \\text{Then } \\rho \\circ f_1 \\circ \\rho^{-1} = \\rho \\circ f_2 \\circ \\rho^{-1}
            \\\\ \\implies \\rho^{-1} \\circ (\\rho \\circ f_1 \\circ \\rho^{-1}) \\circ \\rho = \\rho^{-1} \\circ (\\rho \\circ f_2 \\circ \\rho^{-1}) \\circ \\rho.
            \\\\ \\text{Thus, } f_1 = f_2. \\text{ Hence } \\Phi \\text{ is injective}.
            \\\\ \\text{To show } \\Phi \\text{ is surjective, let } g \\in S_Y 
            \\\\ \\text{ and } f = \\rho^{-1} \\circ g \\circ \\rho.
            \\\\ \\text{Then } f \\in S_X \\text{ and } \\Phi(f) = \\rho \\circ f \\circ \\rho^{-1}
            \\\\ = \\rho \\circ (\\rho^{-1} \\circ g \\circ \\rho) \\circ \\rho^{-1} = g.
            \\\\ \\text{Hence } \\Phi \\text{ is surjective.} \\ \\ \\blacksquare 
    `
  },
  {
    number: 19,
    title: "Left Multiplication is a Bijective Permutation that is the Image of any Group",
    statement: `\\text{Let } G \\text{ be a group.}
                \\\\ \\text{For each } a \\in G \\text{ define } f_a: G \\to G \\text{ by } f_a(x) = ax.
                \\\\ \\text{Then } f_a \\text{ is bijective } \\ \\forall a \\in G. 
                \\\\ \\text{Define } j: G \\to S_G \\text{ by } j(a) = f_a.
                \\\\ \\text{Then } j \\text{ is an injective homomorphism.}
    `,
    proof: `\\text{Fix } a \\in G.
            \\\\ \\text{To show } f_a(x) \\text{ is injective,}
            \\\\ \\text{Let } x, y \\in G \\text{ such that } f_a(x) = f_b(x)
            \\\\ \\text{Then } ax = ay, \\text{ which implies } x = y.
            \\\\ \\text{Hence } f_a \\text{ is injective.}
            \\\\ \\text{To see if } f_a \\text{ is surjective, let } y \\in G. 
            \\\\ \\text{Choose } x = a^{-1}y.
            \\\\ \\text{Then } f_a(x) = ax = aa^{-1}y = y.
            \\\\ \\text{Thus, } f_a \\text{ is surjective.} 
            \\\\ \\text{This shows that } f_a \\text{ is bijective.} 
            \\\\ \\text{To see that } j \\text{ is injective,}
            \\\\ \\text{let } a, b \\in G \\text{ such that } j(a) = j(b), \\text{ that is, } f_a = f_b.
            \\\\ \\text{In particular, } a = ae = f_a(e) = f_b(e) = be = b.
            \\\\ \\text{Thus, } a = b. \\text{ This shows } j \\text{ is injective.}
            \\\\ \\text{To show } j \\text{ is a homomorphism, let } a, b \\in G.
            \\\\ \\text{Then } \\forall x \\in G, \\ j(ab)(x) = f_{ab}(x) = abx
            \\\\ \\text{and } (j(a) \\circ j(b))(x) = j(a)(j(b)(x)) = j(a)(bx) = abx.
            \\\\ \\text{Thus, } j(ab) = j(a) \\circ j(b). \\ \\ \\blacksquare
    `
  },
  {
    number: 20,
    title: "Cayley's Theorem",
    statement: "\\text{Every Group is Isomorphic to a Subgroup of a Symmetric Group}",
    proof: `\\text{Define } f_a: G \\to G \\text{ by } f_a(x) = ax \\ \\ \\forall x \\in G.
            \\\\ \\text{Define } j: G \\to S_G \\text{ by } j(a) = f_a \\ \\ \\forall a \\in G.
            \\\\ \\text{By Theorem 19, } f_a \\text{ is bijective } \\forall a \\in G 
            \\\\ \\text{and } j \\text{ is an injective homomorphism.} 
            \\\\ \\text{To show } \\text{Im}(j) \\leq S_G, \\text{ let } x, y \\in \\text{Im}(j).
            \\\\ \\text{Then } \\exists a, b \\in G \\text{ such that } j(a) = x \\text{ and } j(b) = y.
            \\\\ \\text{Since } j \\text{ is a homomorphism, } j(ab) = j(a)j(b) = xy.
            \\\\ \\text{So } ab \\in \\text{Im}(j)
            \\\\ \\text{Thus, our operation is well-defined in Im}(j).
            \\\\ \\text{To show } e \\in \\text{Im}(j), 
            \\\\ ej(e) = j(e) = j(ee) = j(e)j(e)
            \\\\ \\text{by cancellation law, } j(e) = e.
            \\\\ \\text{So } e \\in \\text{Im}(j).
            \\\\ \\text{To show the inverse element is in Im}(j),
            \\\\ \\text{let } x \\in \\text{Im}(j) \\text{ such that } j(a) = x \\text{ for every } a \\in G.
            \\\\ \\text{Then } e = j(e) = j(aa^{-1}) = j(a)j(a^{-1}) = xj(a^{-1}).
            \\\\ \\text{So } e = xj(a^{-1}), \\text{ which implies } x^{-1} = j(a^{-1}) \\in \\text{Im}(j).
            \\\\ \\text{Thus, Im}(j) \\leq S_G.
            \\\\ \\text{Finally, we have } G \\cong \\text{Im}(j),
            \\\\ \\text{since we know } j \\text{ is an injective homomorphism}
            \\\\ \\text{and by definition } j \\text{ is onto Im}(j). \\ \\ \\blacksquare
    `
  },
  {
    number:21,
    title: "In Finite Groups, Elements Have Finite Order (PP1 Q10)",
    statement: `\\text{Let } (G,*) \\text{ be a finite group. Prove that for every } a \\in G 
                \\\\ \\exists \\text{ a natural number } n \\geq 1 \\text{ such that } a^n = e.
                `,
    proof: `\\text{Since } G \\text{ is finite}
            \\\\ \\text{and we are considering infinite powers of } a,
            \\\\ \\text{by pigeonhole principle we know that }
            \\\\ \\text{for any } a \\in G \\text{ there exists } i, j \\in \\N \\text{ with } i \\gt j 
            \\\\ \\text{ such that } a^i = a^j \\ \\ 
            \\\\ \\text{Which implies } a^ia^{-j} = a^{i-j} = e. 
            \\\\ \\text{Let } n = i-j.
            \\\\ \\text{Since } i > j \\text{ and both are in } \\N 
            \\\\ \\text{we have } n \\geq 1. 
            \\\\ \\text{Therefore, } n \\text{ is a natural number such that } 
            \\\\ a^n = e. \\ \\ \\blacksquare
    ` 
  },
  {
    number: 22,
    title: "Cycles are Equivalence Relations",
    statement: `\\text{Let } \\sigma \\in S_n \\text{ be fixed.}
                \\\\ \\text{Then the relation on } \\{1, 2, 3, ..., n\\},
                \\\\ \\forall \\ 1 \\leq i, j \\leq n, \\ i \\sim j \\iff \\sigma^{k}(i) = j \\text{ for some } k \\in \\Z,
                \\\\ \\text{is an equivalence relation.}
    `,
    proof: [
      {
        title: "Proof from notes for k ∈ ℕ",
        content: `\\text{By Theorem 21,}
                \\\\ \\text{since } S_n \\text{ is finite, } \\exists m \\in \\N \\text{ such that } \\sigma^m = id.
                \\\\ \\text{Let } 1 \\leq i \\leq n.
                \\\\ \\text{Then } \\sigma^m(i) = i,
                \\\\ (\\text{because we called } \\sigma^m = id \\text{ and } id \\text{ maps } g \\mapsto g.)
                \\\\ \\text{So } \\sim \\text{ is reflexive.}
                \\\\ \\text{Let } 1 \\leq i, j \\leq n, \\text{ and assume } i \\sim j.
                \\\\ \\text{This means } \\exists k \\in \\N \\text{ such that } \\sigma^k(i) = j.
                \\\\ \\text{Then we get } i = \\sigma^{-k}(\\sigma^k(i)) = \\sigma^{-k}(j), \\text{ by substituting}.
                \\\\ \\text{Since } \\sigma^m = id,
                \\\\ \\text{we have } \\sigma^m \\sigma^{-1} = id \\sigma^{-1} \\iff \\sigma^{m-1} = \\sigma^{-1}
                \\\\ \\text{So } (\\sigma^{m-1})^k = (\\sigma^{-1})^k, \\text{ we have } \\sigma^{km-k} = \\sigma^{-k}.
                \\\\ \\text{Therefore, } i = \\sigma^{km-k}(j)
                \\\\ \\text{and notice that } km-k \\in \\N.
                \\\\ \\text{Thus, } j \\sim i, \\text{ which shows } \\sim \\text{ is symmetric.}
                \\\\ \\text{Let } 1 \\leq i, j, \\ell \\leq n, \\text{ and }
                \\\\ \\text{assume } i\\sim j \\text{ and } j \\sim \\ell.
                \\\\ \\text{This means } \\exists m_1, m_2 \\in \\N
                \\\\ \\text{such that } \\sigma^{m_1}(i) = j \\text{ and } \\sigma^{m_2}(j) = \\ell.
                \\\\ \\text{Then } \\sigma^{m_1+m_2}(i) = \\sigma^{m_2}(\\sigma^{m_1}(i)) = \\sigma^{m_2}(j) = \\ell.
                \\\\ \\text{So } i \\sim \\ell, \\text{ which shows } \\sim \\text{ is transitive.}`
      },
      {
        title: "Proof for k ∈ ℤ",
        content: `\\text{To show } \\sim \\text{ is reflexive, let } 1 \\leq i \\leq n.
                \\\\ \\text{Take } k = 0 \\in \\Z.
                \\\\ \\text{Then } \\sigma^0(i) = id(i) = i.
                \\\\ \\text{So } i \\sim i, \\text{ hence } \\sim \\text{ is reflexive.}
                \\\\ \\text{To show } \\sim \\text{ is symmetric,}
                \\\\ \\text{let } 1 \\leq i, j \\leq n \\text{ and assume } i \\sim j.
                \\\\ \\text{This means } \\exists k \\in \\Z \\text{ such that } \\sigma^k(i) = j.
                \\\\ \\text{Then } i = \\sigma^{-k}(\\sigma^k(i)) = \\sigma^{-k}(j).
                \\\\ \\text{Since } k \\in \\Z, \\text{ we have } -k \\in \\Z.
                \\\\ \\text{Therefore, } j \\sim i, \\text{ which shows } \\sim \\text{ is symmetric.}
                \\\\ \\text{To show } \\sim \\text{ is transitive,}
                \\\\ \\text{let } 1 \\leq i, j, \\ell \\leq n \\text{ and assume } i \\sim j \\text{ and } j \\sim \\ell.
                \\\\ \\text{This means } \\exists k_1, k_2 \\in \\Z
                \\\\ \\text{such that } \\sigma^{k_1}(i) = j \\text{ and } \\sigma^{k_2}(j) = \\ell.
                \\\\ \\text{Then } \\sigma^{k_1+k_2}(i) = \\sigma^{k_2}(\\sigma^{k_1}(i)) = \\sigma^{k_2}(j) = \\ell.
                \\\\ \\text{Since } k_1, k_2 \\in \\Z, \\text{ we have } k_1 + k_2 \\in \\Z.
                \\\\ \\text{Therefore, } i \\sim \\ell, \\text{ which shows } \\sim \\text{ is transitive.}
                \\\\ \\text{Hence, } \\sim \\text{ is an equivalence relation.}
                `
      }
    ]
  },
  {
    number: 23,
    title: `Equivalence classes of a permutation times a transposition differs by 1`,
    statement: `\\text{Let } n \\in \\N \\text{ such that } 2 \\leq n, \\text{ and } \\sigma \\in S_n.
                \\\\ \\text{Let } 1 \\leq i \\not= j \\leq n, \\text{ and } \\tau = (i \\ j).
                \\\\ \\text{Then the number of equivalence classes of}
                \\\\ \\text{the relations defined by } \\sigma \\text{ and } \\tau \\sigma \\text{ differs by 1}.
    `,
    proof: `\\text{Suppose i and j are in different equivalence classes of } \\sigma.
            \\\\ \\text{Then we can write } \\sigma \\text{ is the product of disjoint cycles,}
            \\\\ \\text{and write the first two cycles as}
            \\\\ (b \\ j \\ x \\ x \\ x) (a \\ i \\ x \\ x)
            \\\\ \\text{where x is other possible elements in the cycles.}
            \\\\ \\text{Since } \\tau \\sigma = (i \\ j) \\sigma,
            \\\\ \\text{we have } (i \\ j)(b \\ j \\ x \\ x \\ x)(a \\ i \\ x \\ x)
            \\\\ = (a \\ j \\ x \\ x \\ x \\ b \\ i \\ x \\ x).
            \\\\ \\text{Suppose i and j are in the same equivalence class of } \\sigma.
            \\\\ \\text{Then we can write } \\sigma \\text{ as the product of disjoint cycles,}
            \\\\ \\text{and write the first cycle as}
            \\\\ (a \\ i \\ x \\ x \\ x \\ b \\ j \\ x \\ x)
            \\\\ \\text{where x is other possible elements in the cycles.}
            \\\\ \\text{Since } \\tau \\sigma = (i \\ j) \\sigma,
            \\\\ \\text{we have } (i \\ j)(a \\ i \\ x \\ x \\ x \\ b \\ j \\ x \\ x)
            \\\\ = (a \\ j \\ x \\ x)(b \\ i \\ x \\ x \\ x).
            \\\\ \\text{Thus, in both cases we see that the number of cycles}
            \\\\ \\text{of } \\tau \\sigma \\text{ differs from the number of cycles}
            \\\\ \\text{of } \\sigma \\text{ by } 1.
    `
  },
  {
    number: 24,
    title: "Any Permutation is the Product of Transpositions",
    statement: `\\text{Let } n \\geq 2. \\text{ Any permutation } \\sigma \\in S_n
                \\\\ \\text{is a product of transpositions.}
    `,
    proof: [
      {
        title: "Claude called this an informal proof",
        content: `\\text{Let } \\sigma \\in S_n \\text{ be a product of disjoint cycles.}
            \\\\ \\text{Then we can write the first cycle as}
            \\\\ (i_1 \\ i_2 \\ ... \\\ i_m) = (i_1 \\ i_m)(i_1 \\ i_{m-1}) \\ ... \\ (i_1 \\ i_2).
            \\\\ \\text{By computing the product of each transposition},
            \\\\ \\text{we get } (i_1 \\ i_2 \\ ... \\ i_m)
        `
      },
      {
        title: "Claude proof",
        content: `\\text{Let } \\sigma \\in S_n.
            \\\\ \\text{If } \\sigma = id, \\text{ then } \\sigma = (1 \\ 2)(1 \\ 2),
            \\\\ \\text{which is a product of transpositions.}
            \\\\ \\text{Now assume } \\sigma \\not= id.
            \\\\ \\text{By Theorem 22, } \\sigma \\text{ can be written as}
            \\\\ \\text{a product of disjoint cycles.}
            \\\\ \\text{It suffices to show that any cycle}
            \\\\ \\text{can be written as a product of transpositions.}
            \\\\ \\text{Let } (i_1 \\ i_2 \\ ... \\ i_m) \\text{ be a cycle with } m \\geq 2.
            \\\\ \\text{We claim that}
            \\\\ (i_1 \\ i_2 \\ ... \\ i_m) = (i_1 \\ i_m)(i_1 \\ i_{m-1}) \\cdots (i_1 \\ i_3)(i_1 \\ i_2).
            \\\\ \\text{To verify this, we compute where each element maps.}
            \\\\ \\text{First, consider } i_1.
            \\\\ \\text{By the product } (i_1 \\ i_m)(i_1 \\ i_{m-1}) \\cdots (i_1 \\ i_2),
            \\\\ \\text{we have } i_1 \\mapsto i_2 \\mapsto i_2 \\mapsto \\cdots \\mapsto i_2.
            \\\\ \\text{So } i_1 \\mapsto i_2, \\text{ which matches the cycle.}
            \\\\ \\text{Next, consider } i_k \\text{ for } 2 \\leq k \\leq m-1.
            \\\\ \\text{The transposition } (i_1 \\ i_{k+1}) \\text{ sends } i_k \\mapsto i_k,
            \\\\ \\text{and all other transpositions to the right fix } i_k.
            \\\\ \\text{The transposition } (i_1 \\ i_k) \\text{ sends } i_k \\mapsto i_1.
            \\\\ \\text{Then all transpositions to the left of } (i_1 \\ i_k) \\text{ fix } i_1
            \\\\ \\text{except } (i_1 \\ i_{k+1}), \\text{ which sends } i_1 \\mapsto i_{k+1}.
            \\\\ \\text{So } i_k \\mapsto i_{k+1}, \\text{ which matches the cycle.}
            \\\\ \\text{Finally, consider } i_m.
            \\\\ \\text{All transpositions except } (i_1 \\ i_m) \\text{ fix } i_m.
            \\\\ \\text{The transposition } (i_1 \\ i_m) \\text{ sends } i_m \\mapsto i_1.
            \\\\ \\text{So } i_m \\mapsto i_1, \\text{ which matches the cycle.}
            \\\\ \\text{Any other element } j \\not\\in \\{i_1, i_2, ..., i_m\\}
            \\\\ \\text{is fixed by all transpositions, hence } j \\mapsto j.
            \\\\ \\text{Therefore, the product of transpositions equals the cycle.}
            \\\\ \\text{Since each cycle is a product of transpositions}
            \\\\ \\text{and } \\sigma \\text{ is a product of cycles,}
            \\\\ \\text{we have } \\sigma \\text{ is a product of transpositions.}
        `
      }
    ]
  },
  {
    number: 25,
    title: "A Permutation is either Odd or Even",
    statement: `\\text{A permutation } \\sigma \\in S_n \\text{ can't be written}
                \\\\ \\text{as a product of an even number of transpositions}
                \\\\ \\text{and an odd number of transpositions.}
    `,
    proof: `\\text{Let } \\sigma \\in S_n.
            \\\\ \\text{Assume } \\sigma \\text{ can be written as a product of}
            \\\\ \\text{an even number of transpositions}.
            \\\\ \\text{By Theorem 23,}
            \\\\ \\sigma \\text{ has an odd number of equivalence classes.}
            \\\\ \\text{Now assume } \\sigma \\text{ can be written}
            \\\\ \\text{as a product of an odd number of transpositions}.
            \\\\ \\text{By Theorem 23,}
            \\\\ \\sigma \\text{ has an even number of equivalence classes}.
            \\\\ \\text{Similarly, if n is even, } 
            \\\\ \\sigma \\text{ has an odd number of equivalence classes}
            \\\\ \\text{and if n is odd, } 
            \\\\ \\sigma \\text{ has an even number of equivalence classes.}
            \\\\ \\text{Thus, a permutation can't be written}
            \\\\ \\text{as a product of an even number of transpositions}
            \\\\ \\text{and an odd number of transpositions.} 

            ` 
  },
  {
    number: 26,
    title: "Parity Homomorphism",
    statement: `\\text{Let } n \\geq 2. \\text{ Define}
                \\\\ \\phi: S_n \\to \\Z_2 \\text{ by }
                \\\\ \\phi(\\sigma) =  \\begin{cases}
                0, & \\text{if } \\sigma \\text{ is even}
                \\\\ 1, & \\text{if } \\sigma \\text{ is odd}
                \\\\ \\end{cases}
                \\\\ \\text{This is a homomorphism.}
      `,
    proof: `\\text{Let } \\sigma_1, \\sigma_2 \\text{ be even.}e
            \\\\ \\text{Then } \\phi(\\sigma_1) \\phi(\\sigma_2) = 0 * 0 = 0
            \\\\ \\text{and } \\sigma_1 \\sigma_2 \\text{ is an even permutation, }
            \\\\ \\text{so } \\phi(\\sigma_1 \\sigma_2) = 0.
            \\\\ \\text{Thus, } \\phi(\\sigma_1) \\phi(\\sigma_2) = \\phi(\\sigma_1 \\sigma_2),
            \\\\ \\text{so } \\phi \\text{ is a homomorphism.}
            \\\\ \\text{Can show similarly for other cases.} 
    `
  },
  {
    number: 27,
    title: "The Alternating Group is a Normal Subgroup of the Symmetric Group",
    statement: "A_n \\trianglelefteq S_n",
    proof: `\\text{We have } A_n = \\ker(\\phi), 
            \\\\ \\text{where } \\phi: S_n \\to \\Z_2 
            \\\\ \\text{is the parity homomorphism from Theorem 26.}
            \\\\ \\text{Hence, by FIT (Theorem 13), }
            \\\\ A_n \\trianglelefteq S_n. \\ \\ \\blacksquare
    `
  },
  {
    number: 28,
    title: "Cosets of H have the same Cardinality as H",
    statement: `\\text{Let G be a finite group,} \\text{and let } H \\leq G.
                \\\\ \\text{For every } x, y \\in G, \\text{ the map } f: xH \\to yH
                \\\\ \\text{defined by } f(xh) = yh \\ \\ \\forall h \\in H
                \\\\ \\text{is a bijection.}
    `,
    proof: `\\text{To show } f \\text{ is well-defined,}
            \\\\ \\text{let } xh_1, xh_2 \\in xH \\text{ such that } xh_2 = xh_1.
            \\\\ \\text{Then } h_2 = x^{-1}xh_2 = x^{-1}xh_1 = h_1.
            \\\\ \\text{So, } f(xh_2) = yh_2 = yh_1 = f(xh_1).
            \\\\ \\text{Thus, } f \\text{ is well-defined.}
            \\\\ \\text{To show } f \\text{ is injective,}
            \\\\ \\text{let } xh_1, xh_2 \\in xH \\text{ such that } f(xh_1) = f(xh_2).
            \\\\ \\text{Then } yh_1 = yh_2, \\text{ which implies } h_1 = h_2.
            \\\\ \\text{So, } xh_1 = xh_2.
            \\\\ \\text{Thus, } f \\text{ is injective.}
            \\\\ \\text{To show } f \\text{ is surjective,}
            \\\\ \\text{let } yh \\in yH \\text{ for some } h \\in H.
            \\\\ \\text{Then } f(xh) = yh.
            \\\\ \\text{Thus, } f \\text{ is surjective.}  
            \\\\ \\text{Hence, } f \\text{ is a bijection.}
            \\\\ \\text{Therefore, } |xH| = |yH| = |H|.
    `
  },
  {
    number: 29,
    title: "Pretty Much Lagrange's Theorem",
    statement: `\\text{Let } G \\text{ be a finite group, and } H \\leq G.
                \\\\ \\text{Then } o(G) = o(H) [G:H].
                \\\\ ([G:H] = |G:H| = \\text{ Number of distinct left cosets of H in G})
    `,
    proof: `\\text{This follows directly from Theorem 28.}
            \\\\ \\text{Since } G \\text{ is finite and } [G:H] \\in \\N,
            \\\\ G \\text{ is partitioned into [G:H] many distinct left cosets of } H.
            \\\\ \\text{By Theorem 28, each left coset has } |H| \\text{ elements.}
            \\\\ \\text{Thus, } |G| = |H| * [G:H]. \\ \\ \\blacksquare
    `
  },
  {
    number: 30,
    title: "Actually Lagrange's Theorem",
    statement: `\\text{Let } G \\text{ be a finite group, and } H \\leq G.
                \\\\ \\text{Then } o(H) \\text{ divides } o(G).
    `,
    proof: `\\text{By Theorem 29, } o(G) = o(H) * [G:H].
            \\\\ \\text{Since } [G:H] \\in \\N,
            \\\\ \\text{we have that } o(H) \\mid o(G).
    `
  },
  {
    number: 31,
    title: "Order of the Alternating Group",
    statement: `|A_n| = \\frac{n!}{2} \\ \\ \\text{for } n \\geq 2.`,
    proof: `\\text{By Theorem 27, } A_n \\trianglelefteq S_n.
            \\\\ \\text{By Theorem 26, } \\text{Im}(\\phi) = \\Z_2,
            \\\\ \\text{where } \\phi: S_n \\to \\Z_2 \\text{ is the parity homomorphism.}
            \\\\ \\text{By FIT (Theorem 13), } S_n / A_n \\cong \\Z_2.
            \\\\ \\text{Thus, } |S_n / A_n| = |\\Z_2| = 2.
            \\\\ \\text{By Lagrange's Theorem (Theorem 29), }
            \\\\ |S_n| = |A_n| * |S_n / A_n| \\implies n! = |A_n| * 2.
            \\\\ \\text{Therefore, } |A_n| = \\frac{n!}{2}.
    `
  },
  {
    number: 32,
    title: "Direct Product of Groups is a Group",
    statement: `\\text{The set } G = G_1 \\times G_2 \\text{ with operation }
                \\\\ \\text{ defined by } (g_1, g_2) \\cdot (h_1, h_2) = (g_1h_1, g_2h_2)
                \\\\ \\text{ for all } g_1, h_1 \\in G_1, g_2, h_2 \\in G_2 \\text{ is a group.}
    `,
    proof: `\\text{Let } x_1, y_1, z_1 \\in G_1 \\text{ and } x_2, y_2, z_2 \\in G_2.
            \\\\ \\text{Then } ((x_1, x_2) \\cdot (y_1, y_2)) \\cdot (z_1, z_2) = (x_1y_1, x_2y_2) \\cdot (z_1, z_2)
            \\\\ = ((x_1y_1)z_1, (x_2y_2)z_2) = (x_1(y_1z_1), x_2(y_2z_2))
            \\\\ = (x_1, x_2) \\cdot (y_1z_1, y_2z_2) = (x_1, x_2) \\cdot ((y_1, y_2) \\cdot (z_1, z_2)).
            \\\\ \\text{So the operation is associative.}
            \\\\ \\text{Let } e_1 \\in G_1 \\text{ and } e_2 \\in G_2 \\text{ be the identity elements.}
            \\\\ \\text{And let } e = (e_1, e_2) \\in G.
            \\\\ \\text{Then } \\forall (x_1, x_2) \\in G, \\text{ we have}
            \\\\ (x_1, x_2) \\cdot (e_1, e_2) = (x_1e_1, x_2e_2) = (x_1, x_2)
            \\\\ \\text{and } (e_1, e_2) \\cdot (x_1, x_2) = (e_1x_1, e_2x_2) = (x_1, x_2).
            \\\\ \\text{So } e \\text{ is the identity element in } G.
            \\\\ \\text{Let } (x_1, x_2) \\in G.
            \\\\ \\text{Since } G_1 \\text{ and } G_2 \\text{ are groups,}
            \\\\ \\exists x_1^{-1} \\in G_1 \\text{ and } x_2^{-1} \\in G_2 \\text{ such that }
            \\\\ x_1x_1^{-1} = e_1 \\text{ and } x_2x_2^{-1} = e_2.
            \\\\ \\text{Let } (x_1^{-1}, x_2^{-1}) \\in G.
            \\\\ \\text{Then } (x_1, x_2) \\cdot (x_1^{-1}, x_2^{-1}) = (x_1x_1^{-1}, x_2x_2^{-1}) = (e_1, e_2) = e
            \\\\ \\text{and } (x_1^{-1}, x_2^{-1}) \\cdot (x_1, x_2) = (x_1^{-1}x_1, x_2^{-1}x_2) = (e_1, e_2) = e.
            \\\\ \\text{So } (x_1^{-1}, x_2^{-1}) \\text{ is the inverse of } (x_1, x_2).
            \\\\ \\text{Therefore, } (G, \\cdot) \\text{ is a group.}
    `
  },
  {
    number: 33,
    title: "Direct Product Homomorphisms",
    statement: `\\text{Let } G_1 \\text{ and } G_2 \\text{ be groups,}
                \\\\ \\text{and let } G = G_1 \\times G_2.
                \\\\ \\text{For each } i = 1, 2 
                \\\\ \\text{define } \\rho_1: G_1 \\to G \\text{ by } \\rho_1(g_1) = (g_1, e) \\ \\ \\forall g_1 \\in G_1,
                \\\\ \\text{and } \\pi_1: G \\to G_1 \\text{ by } \\pi_1((g_1, g_2))= g_1.
                \\\\ \\text{Then } \\rho_1 \\text{ is an injective homomorphism,}
                \\\\ \\pi_1 \\text{ is a surjective homomorphism},
                \\\\ \\ker(\\pi_1) = \\{e\\} \\times G_2,
                \\\\ \\text{and } G/\\ker(\\pi_1) \\cong G_1. 
                \\\\ \\text{These same homomorphisms can be defined for } G_2.
                \\\\ \\text{Just swap the 1's and 2's and flip } \\rho 
                \\\\ \\text{so } \\rho_2(g_2) = (e, g_2) 
    `,
    proof: `\\text{To see } \\rho_1 \\text{ is injective, let } g_1, h_1 \\in G_1,
            \\\\ \\text{and assume } \\rho_1(g_1) = \\rho_1(h_1).
            \\\\ \\text{Then } (g_1, e) = (h_1, e). 
            \\\\ \\text{Which implies } g_1 = h_1. \\text{ Thus, } \\rho_1 \\text{ is injective.}
            \\\\ \\
            \\\\ \\text{To see } \\rho_1 \\text{ is a homomorphism, let } g_1, h_1 \\in G_1. 
            \\\\ \\text{Then } \\rho_1(g_1h_1) = (g_1h_1,e) = (g_1, e) (h_1, e) = \\rho_1(g_1)\\rho(h_1).
            \\\\ \\text{So } \\rho_1 \\text{ is a group homomorphism.}
            \\\\ \\
            \\\\ \\text{We now show that } \\pi_1 \\text{ is a surjective homomorphism.}
            \\\\ \\text{Let } g_1, h_1 \\in G_1 \\text{ and } g_2, h_2 \\in G_2.
            \\\\ \\text{Then } \\pi_1((g_1,g_2)(h_1,h_2)) = \\pi_1((g_1h_1,g_1h_2)) = g_1h_1
            \\\\ = \\pi_1((g_1,g_2)) \\pi_1((h_1,h_2)). \\text{ Thus, } \\pi_1 \\text{ is homomorphic}.
            \\\\ \\
            \\\\ \\text{Since } g_1 \\in G_1 \\text{ is arbitrary and } \\pi_1((g_1, g_2))= g_1,
            \\\\ \\pi_1 \\text{ is surjective.}
            \\\\ \\
            \\\\ \\text{Let } (g_1, g_2) \\in G_1 \\times G_2.
            \\\\ \\text{Then } (g_1, g_2) \\in \\ker(\\pi_1) \\iff \\pi_1((g_1, g_2)) = e
            \\\\ \\iff g_1 = e.
            \\\\ \\text{Thus, } ker(\\pi_1) = \\{(e,g_2) \\mid g_2 \\in G_2\\} = \\{e\\} \\times G_2.
            \\\\ \\
            \\\\ \\text{Hence, by FIT, } G/\\ker(\\pi_1) \\cong G_1.
    `
  },
  {
    number: 34,
    title: "Direct Product Observation",
    statement: "\\text{Not Exam 3 Material}",
    proof: ""
  },
  {
    number: 35,
    title: "Conditions for G isomorphic to G1 X G2",
    statement: "\\text{Not Exam 3 Material}",
    proof: ""
  },
  {
    number: 36,
    title: "k multiple of order iff a^k = e",
    statement: "\\text{Not Exam 3 Material}",
    proof: ""
  },
  {
    number: 37,
    title: "Cardinality and Order are the same in Cyclic Groups",
    statement: "\\text{Not Exam 3 Material}",
    proof: ""
  },
  {
    number: 38,
    title: "Cyclic Groups with Same Order are Isomorphic",
    statement: `\\text{Let } G \\text{ and } K \\text{ be cyclic groups.}
                \\\\ \\text{Then we have } G \\cong K \\iff |G| = |K|. 
                \\\\ \\
                \\\\ \\text{Not Exam 3 Material}
    `,
    proof: ""
  },
  {
    number: 39,
    title: "All Cyclic Groups are isomorphic to Z",
    statement: "\\text{Not Exam 3 Material}",
    proof: ""
  },
  {
    number: 40,
    title: "Zm X Zn isomorphic to Zmn iff gcd(m,n) = 1",
    statement: "\\text{Not Exam 3 Material}",
    proof: ""
  },
  {
    number: 41,
    title: "Zn is a ring",
    statement: `\\text{Let } n \\in \\N. 
                \\\\ \\text{Then } (\\Z_n, +, \\cdot) \\text{ is a ring where } [k] \\cdot [\\ell] = [k \\ell].
                \\\\ 
    `,
    proof: `\\text{We already have that } (\\Z_n, +) \\text{ is an abelian group.}
            \\\\ \\
            \\\\ \\text{We now show that } \\cdot \\text{ is a well-defined operation.}
            \\\\ \\text{Let } k, k', \\ell, \\ell' \\in \\Z \\text{ s.t. } [k]_n = [k']_n \\text{ and } [\\ell]_n = [\\ell']_n.
            \\\\ \\text{Then } n \\mid (k - k') \\text{ and } n \\mid (\\ell - \\ell').
            \\\\ \\text{We have} 
            \\\\ k \\ell - k' \\ell' = k \\ell - k \\ell' + k \\ell' - k' \\ell' = k ( \\ell - \\ell' ) + (k-k')\\ell'.
            \\\\ \\text{Since } n \\mid k(\\ell - \\ell') \\text{ and } n \\mid (k - k') \\ell'.
            \\\\ \\text{We get } n \\mid k \\ell - k' \\ell'.
            \\\\ \\text{Thus, } [k\\ell]_n = [k' \\ell']_n.
            \\\\ \\
            \\\\ \\text{To show } \\cdot \\text{ is associative,}
            \\\\ \\text{let } a,b,c \\in \\Z.
            \\\\ \\text{Then } [a]_n \\cdot ( [b]_n \\cdot [c]_n ) = [a]_n \\cdot [bc]_n = [abc]_n
            \\\\ \\text{and } ([a]_n \\cdot [b]_n ) \\cdot [c]_n = [ab]_n \\cdot [c]_n = [abc]_n.
            \\\\ \\text{Thus, } [a]_n \\cdot ( [b]_n \\cdot [c]_n ) = ([a]_n \\cdot [b]_n ) \\cdot [c]_n.
            \\\\ \\
            \\\\ \\text{Finally, to check distributive laws,}
            \\\\ \\text{let } a,b,c \\in \\Z.
            \\\\ \\text{Then } ( [a]_n + [b]_n ) \\cdot [c]_n = [a+b]_n \\cdot [c]_n = [(a+b)c]_n
            \\\\ = [ac + bc]_n = [ac]_n + [bc]_n.
            \\\\ \\text{Can show left distribution similarly.}
            \\\\ \\
            \\\\ \\text{Hence, } (\\Z_n, +, \\cdot) \\text{ is a ring.}
            `
  },
  {
    number: 42,
    title: "Algebraic Properties of Rings",
    statement: `\\text{Let } R \\text{ be a ring.}
                \\\\ \\quad 1) \\ r \\cdot 0 = 0 \\cdot r = 0 \\ \\ \\forall r \\in R.
                \\\\ \\quad 2) \\text{ Let } R \\text{ be unital. Then } r \\cdot (-1) = -r \\ \\ \\forall r \\in R.
    `,
    proof: `\\text{We first prove (1).}
            \\\\ \\text{Let } r \\in R. 
            \\\\ \\text{Since } 0 \\text{ is the neutral element of } (R, +),
            \\\\ \\text{we have } 0 = 0 + 0.
            \\\\ \\text{By distributive laws, } 
            \\\\ r \\cdot 0 = r \\cdot (0+0) = (r \\cdot 0)  + (r \\cdot 0).
            \\\\ \\text{Since } (R, +) \\text{ is a group, it follows that }
            \\\\ r \\cdot 0 = 0.
            \\\\ [(r \\cdot0) \\text{ is its own additive inverse on line 5.}]
            \\\\ \\
            \\\\ \\text{We now prove (2).}
            \\\\ \\text{Let } r \\in R.
            \\\\ \\text{We have } 
            \\\\ r \\cdot (-1) + r = r \\cdot (-1) + r \\cdot 1 = r \\cdot (-1+1) = 0.
            \\\\ \\text{So } r \\cdot (-1) = -r.
    `
  },
  {
    number: 43,
    title: "Cancellation Law for Rings",
    statement: `\\text{If R is an integral domain and} 
                \\\\ a,b,c \\in R \\text{ s.t. } ab = ac, 
                \\\\ \\text{then either } a = 0 \\text{ or } b = c.
    `,
    proof: `\\text{Let } a,b,c \\in R \\text{ s.t. } ab = ac.
            \\\\ \\text{Then } ab - ac = 0.
            \\\\ \\text{Which implies, } a(b-c) = 0.
            \\\\ \\text{Since } R \\text{ is an integral domain,}
            \\\\ \\text{either } a = 0 \\text{ or } b - c = 0.
            \\\\ \\text{So, either } a = 0 \\text{ or } b = c.
    `
  },
  {
    number: 44,
    title: "Image of Ring Homomorphism Is Subring of Codomain",
    statement: `\\text{Let } \\phi: R \\to S \\text{ be a ring homomorphism.} 
                \\\\ \\text{Then } \\phi(R) \\leq S.
    `,
    proof: `\\text{Since } \\phi: (R,+) \\to (S,+)
            \\\\ \\text{is a group homomorphism,}
            \\\\ \\phi(R) \\text{ is a subgroup of } S.
            \\\\ \\text{Let } x,y \\in \\phi(R). 
            \\\\ \\text{Then } \\exists a,b \\in R \\text{ s.t. } x = \\phi(a) \\text{ and } y = \\phi(b).
            \\\\ \\text{Then } xy = \\phi(a)\\phi(b) = \\phi(ab) \\in \\phi(R).
            \\\\ \\text{Hence, } \\phi(R) \\leq S.

    `
  },
  {
    number: 45,
    title: "Kernel of Ring Homomorphism is Subring of Domain",
    statement: `\\text{Let } \\phi: R \\to S \\text{ be a ring homomorphism}.
                \\\\ \\text{Then } \\ker(\\phi) \\leq R.
    `,
    proof: `\\text{Since } \\phi: (R, +) \\to (S, +) \\text{ is a group homomorphism,}
            \\\\ \\text{we have } (\\ker(\\phi), +) \\leq (R, +).
            \\\\ \\text{Let } x,y \\in \\ker(\\phi).
            \\\\ \\text{Then } \\phi(xy) = \\phi(x) \\phi(y) = 0.
            \\\\ \\text{So } xy \\in \\ker(\\phi).
            \\\\ \\text{Thus, } \\ker(\\phi) \\leq R.
    `
  },
  {
    number: 46,
    title: "R/I is a Ring only when I is an Ideal",
    statement: `\\text{The formula } (x+I) \\cdot (y+I) = xy+I
                \\\\ \\text{is a well-defined binary operation on } R/I
                \\\\ \\text{iff } I \\text{ is an ideal in } R.
                \\\\ \\text{Moreover, in this case,} (R/I, +, \\cdot) \\text{ is a ring,}
                \\\\ \\text{called the quotient ring of } R \\text{ and } I.
    `,
    proof: `\\text{Assume the formula}
            \\\\ \\text{gives a well-defined binary operation.}
            \\\\ \\text{Let } r \\in R \\text{ and } x \\in I.
            \\\\ \\text{Then } x+I = 0 + I.
            \\\\ \\text{By well-definedness of the operation,}
            \\\\ \\text{We get } (r+I)(x+I) = (r+I)(0+I).
            \\\\ \\text{So } rx+I = 0+I.
            \\\\ \\text{Which implies } rx \\in I.
            \\\\ \\text{Similarly, } xr \\in I.
            \\\\ \\text{Hence, } I \\trianglelefteq R.
            \\\\ \\
            \\\\ \\text{Conversely, assume } I \\trianglelefteq R.
            \\\\ \\text{Let } a, b, x, y \\in R 
            \\\\ \\text{s.t. } x+I = a + I \\text{ and } y + I = b + I.
            \\\\ \\text{Need to show that} 
            \\\\ xy+I = ab+I \\text{ or } xy-ab \\in I.
            \\\\ \\text{So we have } x - a \\in I \\text{ and } y-b \\in I.
            \\\\ \\text{Then } xy - ab = xy - xb + xb - ab 
            \\\\ = x(y-b) + (x-a)b.
            \\\\ \\text{Since } I \\trianglelefteq R, 
            \\\\ x(y-b) \\in I \\text{ and } (x-a)b \\in I,
            \\\\ \\text{so } xy-ab \\in I.
            \\\\ \\text{Thus, } xy+I = ab + I. \\ \\ \\blacksquare
    `
  },
  {
    number: 47,
    title: "FIT for Rings",
    statement: `\\text{Let } \\phi: R \\to S \\text{ be a ring homomorphism.}
                \\\\ \\text{Then } \\ker(\\phi) \\trianglelefteq R,
                \\\\ \\text{and } R/\\ker(\\phi) \\cong \\phi(R) \\text{ canonically.}
    `,
    proof: `\\text{We first show that } \\ker(\\phi) \\trianglelefteq R.
            \\\\ \\text{Note that by theorem 45, } \\ker(\\phi) \\leq R.
            \\\\ \\text{Let } r \\in R \\text{ and } x \\in \\ker(\\phi).
            \\\\ \\text{Then } \\phi(rx) = \\phi(r) \\phi(x) = \\phi(r) \\cdot 0 = 0.
            \\\\ \\text{So } rx \\in ker(\\phi).
            \\\\ \\text{Similarly, } xr \\in \\ker(\\phi).
            \\\\ \\text{Hence, } \\ker(\\phi) \\trianglelefteq R.
            \\\\ \\
            \\\\ \\text{We now show that } R/\\ker(\\phi) \\cong \\phi(R).
            \\\\ \\text{Let } \\ker(\\phi) = N.
            \\\\ \\text{Define } \\psi: R/N \\to \\phi(R)
            \\\\ \\text{by } \\psi(r+N) = \\phi(r) \\ \\ \\forall r \\in R.
            \\\\ \\
            \\\\ \\text{First, we check that } \\psi \\text{ is well-defined}.
            \\\\ \\text{Let } a,b \\in R \\text{ s.t. } a+N = b+N.
            \\\\ \\text{Then } (a-b) + N = 0 + N.
            \\\\ \\text{So } a-b \\in N.
            \\\\ \\text{Therefore, } \\phi(a-b) = \\phi(a) - \\phi(b) = 0.
            \\\\ \\text{Thus, we have } \\phi(a) = \\phi(b).
            \\\\ \\text{Hence, } \\psi \\text{ is well-defined.}
            \\\\ \\
            \\\\ \\text{Next we check that } \\psi \\text{ is a ring homomorphism}.
            \\\\ \\text{Let } a+N, b+N \\in R/N.
            \\\\ \\text{Then } \\psi((a+N)(b+N)) = \\psi(ab+N) = \\phi(ab)
            \\\\ \\text{and } \\psi(a+N) \\psi(b+N) = \\phi(a) \\phi(b) = \\phi(ab).
            \\\\ \\text{So } \\psi((a+N)(b+N)) = \\psi(a+N) \\psi(b+N).
            \\\\ \\text{Similary, } \\psi((a+N) + (b+N)) 
            \\\\ = \\psi((a+b)+N) = \\phi(a+b)
            \\\\ \\text{and } \\psi(a+N) + \\psi(b+N) = \\phi(a) + \\phi(b) = \\phi(a+b).
            \\\\ \\text{So } \\psi((a+N)+(b+N)) = \\psi(a+N) + \\psi(b+N).
            \\\\ \\text{Thus, } \\psi \\text{ is a ring homomorphism.}
            \\\\ \\
            \\\\ \\text{To show } \\psi \\text{ is injective,}
            \\\\ \\text{let } a,b \\in R \\text{ s.t. } \\psi(a+N) = \\psi(b+N).
            \\\\ \\text{Then } 0 = \\psi(b+N) - \\psi(a+N) 
            \\\\ = \\psi((b-a)+N) = \\phi(b-a).
            \\\\ \\text{So } b-a \\in N.
            \\\\ \\text{Therefore, } (b-a) + N = 0 + N,
            \\\\ \\text{and thus, } b+N = a+N.
            \\\\ \\
            \\\\ \\text{Finally, to show } \\psi \\text{ is surjective.}
            \\\\ \\text{Take } z \\in \\phi(R).
            \\\\ \\text{Then } \\exists r \\in R \\text{ s.t. } \\phi(r) = z.
            \\\\ \\text{So } \\psi(r+N) = \\phi(r) = z.
            \\\\ \\text{Thus, } \\psi \\text{ is surjective.} \\ \\ \\blacksquare

    `
  },
  {
    number: 48,
    title: "Proper Ideals can't contain the Multiplicative Identity",
    statement: `\\text{Let } R \\text{ be unital and } I \\trianglelefteq R. 
                \\\\ \\text{I is proper iff } 1 \\not \\in I.
    `,
    proof: `\\text{Assume } 1 \\not \\in I.
            \\\\ \\text{Since } 1 \\in R \\text{ and } 1 \\not \\in I,
            \\\\ I \\neq R.
            \\\\ \\text{Thus, } I \\subset R.
            \\\\ \\
            \\\\ \\text{We proceed by contraposition}
            \\\\ \\text{to show the forward direction}.
            \\\\ \\text{Assume } 1 \\in I.
            \\\\ \\text{Then } \\forall r \\in R, \\ \\ r = 1 \\cdot r \\in I.
            \\\\ \\text{So } I = R. \\ \\ \\blacksquare
    `
  },
  {
    number: 49,
    title: "Zorn's Lemma",
    statement: `\\text{Suppose } (P, \\leq) \\text{ is a non-empty poset}
                \\\\ \\text{with the property that every chain in } P
                \\\\ \\text{has an upper bound}.
                \\\\ \\text{Then } P \\text{ contains a maximal element.}
    `,
    proof: `\\text{Proof left as an exercise}.
            \\\\ \\text{Definitions 56 - 58}.
    `
  },
  {
    number: 50,
    title: "Commutative Unital Rings have Maximal Ideals",
    statement: "\\text{Every commutative unital ring } R \\text{ has a maximal ideal.}",
    proof: `\\text{Let } P = \\{ \\text{All proper ideals in R} \\}.
            \\\\ \\text{Let } \\leq \\text{ denote subset inclusion.}
            \\\\ \\text{Observe that } (P, \\leq) \\text{ is a poset.}
            \\\\ \\text{Because } \\{0\\} \\in P, \\ P \\text{ is nonempty}.
            \\\\ \\
            \\\\ \\text{Let } \\mathcal{C} \\text{ be a chain in } P.
            \\\\ \\text{Set } I = \\bigcup_{J \\in \\mathcal{C}} J.
            \\\\ \\text{We claim that } I \\in P \\text{ and } J \\leq I \\ \\ \\forall J \\in \\mathcal{C}.
            \\\\ \\text{To show } I \\text{ is an ideal, let } s,t \\in I.
            \\\\ \\text{Then } \\exists J_1, J_2 \\in \\mathcal{C} \\text{ with } s \\in J_1, \\text{ and } t \\in J_2.
            \\\\ \\text{WLOG, say } J_1 \\subset J_2. 
            \\\\ \\text{So } s-t \\in \\bigcup_{J \\in \\mathcal{C}} J = I.
            \\\\ \\text{Similarly, we can show that}
            \\\\ \\text{if } s \\in I \\text{ and } r \\in R, \\text{ then } sr \\in I.
            \\\\ I \\text{ is proper because } 1 \\not \\in I.
            \\\\ \\text{Clearly } I \\text{ is an upper bound for } \\mathcal{C}.
            \\\\ \\text{Thus, by Zorn's Lemma, } P \\text{ has a maximal element.} \\ \\ \\blacksquare
    `
  },
  {
    number: 51,
    title: "Properties of Ideals in Unital Rings",
    statement: `\\text{Let } R \\text{ be a unital ring and } I \\trianglelefteq R.
                \\\\ \\quad \\text{1) } I = R
                \\\\ \\quad \\text{2) } 1 \\in I
                \\\\ \\quad \\text{1) } I \\text{ contains an invertible element.}
    `,
    proof: `\\text{We first prove } (1) \\implies (2).
            \\\\ \\text{Assume } I = R.
            \\\\ \\text{Since } R \\text{ is unital,}
            \\\\ I \\text{ must also contain } 1.
            \\\\ \\
            \\\\ \\text{Next we show } (2) \\implies (3).
            \\\\ \\text{Assume } 1 \\in I.
            \\\\ \\text{Since } 1 \\text{ is invertible,}
            \\\\ I \\text{ contains an invertible element.}
            \\\\ \\
            \\\\ \\text{Finally we show } (3) \\implies (1)
            \\\\ \\text{Assume } I \\text{ contains an invertible element } u.
            \\\\ \\text{Then } \\exists u \\in I \\text{ s.t. } ur = ru = r \\ \\ \\forall r \\in R.
            \\\\ \\text{Since } I \\text{ is an ideal, } ur, ru \\in I.
            \\\\ \\text{Thus, } I = R.
    `
  },
  
  {
    number: 52,
    title: "Simple Unital Commutative Rings are Fields",
    statement: `\\text{Let } R \\text{ be a unital commutative ring.}
                \\\\ \\text{Then } R \\text{ is a field.} 
                \\\\ \\text{iff the only ideals of } R 
                \\\\ \\text{are } \\{0\\} \\text{ and } R.
    `,  
    proof: `\\text{Assume } R \\text{ is a field.}
            \\\\ \\text{Let } I \\trianglelefteq R \\text{ s.t. } I \\neq \\{0\\}.
            \\\\ \\text{Then } \\forall x \\in R \\setminus \\{0\\}, \\ x \\text{ is invertible.}
            \\\\ \\text{So } \\exists u \\in R \\text{ s.t. } xu = 1.
            \\\\ \\text{Then } I \\text{ contains an invertible element.}
            \\\\ \\text{By Theorem 51, } I = R.
            \\\\ \\text{Thus, the only ideals of } R \\text{ are } \\{0\\} \\text{ and } R.
            \\\\ \\
            \\\\ \\text{Conversely, assume } \\{0\\} \\text{ and } R \\text{ are the only ideals of } R.
            \\\\ \\text{Let } x \\in R \\setminus \\{0\\}
            \\\\ \\text{and consider } I \\trianglelefteq R \\text{ where } I = \\langle x \\rangle.
            \\\\ \\text{Since } x \\in I, I \\neq \\{0\\}.
            \\\\ \\text{So by assumption, } I = R.
            \\\\ \\text{Thus, } 1 \\in I.
            \\\\ \\text{So } \\exists u \\in R \\text{ s.t. } xu = 1.
            \\\\ \\text{Hence, } x \\text{ is invertible.}
            \\\\ \\text{Therefore, } R \\text{ is a field.}
    ` 
  },
  {
    number: 53,
    title: "Ideals in Chain are the Same iff Quotient Rings are the Same",
    statement: `\\text{Let } I \\trianglelefteq J \\trianglelefteq P \\trianglelefteq R.
                \\\\ \\text{Then } J = P \\text{ iff } J/I = P/J.
    `,
    proof: `\\text{Assume } J = P.
            \\\\ \\text{Let } j+I \\in J/I \\text{ with } j \\in J.
            \\\\ \\text{Since } J = P, \\ j \\in P.
            \\\\ \\text{Therefore, } j+I \\in P/I.
            \\\\ \\text{So } J/I \\subseteq P/I.
            \\\\ \\text{Similarly, we can show } P/I \\subseteq J/I.
            \\\\ \\text{Thus, } J/I = P/I.
            \\\\ \\
            \\\\ \\text{Conversely, assume } J/I = P/I.
            \\\\ \\text{Since } J \\trianglelefteq P, \\ J \\subseteq P.
            \\\\ \\text{Let } p + I \\in P/I \\text{ with } p \\in P.
            \\\\ \\text{By assumption } p+I \\in J/I.
            \\\\ \\text{So } \\exists j \\in J \\text{ s.t. } p + I = j + I.
            \\\\ \\text{Therefore, } (p-j)+I = 0+I. 
            \\\\ \\text{Which implies } p-j \\in I.
            \\\\ \\text{Since } I \\text{ is an ideal, } \\ p = j+p-j \\in J.
            \\\\ \\text{Thus, } P \\subseteq J.
            \\\\ \\text{Hence, } J = P.
    `
  },
  {
    number: 54,
    title: "Surjective Ring Homomorphism Preserves Ideals",
    statement: `\\text{Let } \\phi: R \\to S \\text{ be a surjective ring homomorphism.} 
                \\\\ \\text{ if } I \\trianglelefteq R, \\text{ then } \\phi(I) \\trianglelefteq S.
    `,
    proof: `\\text{By Theorem 44, } \\phi(I) \\leq S.
            \\\\ \\text{Let } y \\in \\phi(I) \\text{ and } s \\in S.
            \\\\ \\text{Then } \\exists x \\in I \\text{ s.t. } y = \\phi(x).
            \\\\ \\text{Also since } \\phi \\text{ is surjective, }
            \\\\ \\exists r \\in R \\text{ s.t. } s = \\phi(r).
            \\\\ \\text{Then } sy = \\phi(r) \\phi(x) = \\phi(rx).
            \\\\ \\text{Since } I \\trianglelefteq R, \\ rx \\in I.
            \\\\ \\text{So } sy = \\phi(rx) \\in \\phi(I).
            \\\\ \\text{Similarly, } ys = \\phi(xr) \\in \\phi(I).
            \\\\ \\text{Hence, } \\phi(I) \\trianglelefteq S.
    `
  },
  {
    number: 55,
    title: "Isaiah Original (From Office Hours)",
    statement: `\\text{Let } \\phi: R \\to S \\text{ be a ring homomorphism.}
                \\\\ \\text{If } J \\trianglelefteq S, \\text{ then } \\phi^{-1}(J) \\trianglelefteq R.
                \\\\ \\
                \\\\ \\text{Preimage: } \\phi^{-1}(J) = \\{ r \\in R \\ | \\ \\phi(r) \\in J \\}.
    `,
    proof: `\\text{Assume } J \\trianglelefteq S.
            \\\\ \\text{Then } 0_S \\in J \\text{ since } J \\text{ is an ideal.}
            \\\\ \\text{So } \\phi^{-1}(J) \\text{ is non-empty because } 
            \\\\ \\phi(0_R) = 0_S \\in J \\implies 0_R \\in \\phi^{-1}(J).
            \\\\ \\text{Let } a,b \\in \\phi^{-1}(J).
            \\\\ \\text{Then } \\phi(a), \\phi(b) \\in J.
            \\\\ \\text{Since } J \\text{ is an ideal, } 
            \\\\ \\phi(a) - \\phi(b) = \\phi(a-b) \\in J.
            \\\\ \\text{So } a-b \\in \\phi^{-1}(J).
            \\\\ \\text{Thus, } \\phi^{-1}(J) \\text{ is a subgroup of } (R, +).
            \\\\ \\
            \\\\ \\text{Let } a \\in \\phi^{-1}(J) \\text{ and } r \\in R.
            \\\\ \\text{Then } \\phi(a) \\in J \\text{ and } \\phi(r) \\in S.
            \\\\ \\text{Since } J \\trianglelefteq S,
            \\\\ \\text{we have } \\phi(r) \\phi(a) = \\phi(ra) \\in J.
            \\\\ \\text{So } ra \\in \\phi^{-1}(J).
            \\\\ \\text{Similarly, } ar \\in \\phi^{-1}(J).
            \\\\ \\text{Hence, } \\phi^{-1}(J) \\trianglelefteq R. \\ \\ \\blacksquare
    `
  },
  {
    number: 56,
    title: "Natural Homomorphism to Quotient Ring",
    statement: `\\text{Let } I \\trianglelefteq R. 
                \\\\ \\text{Then the map } \\pi: R \\to R/I
                \\\\ \\text{defined by } \\pi(r) = r + I \\ \\ \\forall r \\in R
                \\\\ \\text{is a surjective ring homomorphism.}
    `,
    proof: `\\text{Let } x, y \\in R.
            \\\\ \\text{Then } \\pi(x+y) = (x+y) + I = (x+I) + (y+I) = \\pi(x) + \\pi(y)
            \\\\ \\text{and, } \\pi(xy) = xy + I = (x+I)(y+I) = \\pi(x) \\pi(y).
            \\\\ \\text{Thus, } \\pi \\text{ is a ring homomorphism.}
            \\\\ \\
            \\\\ \\text{Let } a + I \\in R/I.
            \\\\ \\text{Then } \\pi(a) = a + I.
            \\\\ \\text{So } \\pi \\text{ is surjective.} 
    `
  },
  {
    number: 57,
    title: "Ideals of Quotient Rings Can be Quotient Rings of Ideals",
    statement: `\\text{Let R be a ring and } I \\trianglelefteq R.
                \\\\ \\text{If } I \\trianglelefteq J \\trianglelefteq R, \\text{ then } J/I \\trianglelefteq R/I.
                \\\\ \\text{Conversely, if } K \\trianglelefteq R/I, 
                \\\\ \\text{then } \\exists I \\trianglelefteq J \\trianglelefteq R \\text{ s.t. } K = J/I.
                \\\\ \\
                \\\\ \\text{This proof is different from the one in the notes.}
                \\\\ \\text{I prefered this method from Theorem 55.}
    `,
    proof: `\\text{Define } \\pi: R \\to R/I \\text{ by } \\pi(r) = r + I \\ \\ \\forall r \\in R.
            \\\\ \\text{Assume } I \\trianglelefteq J \\trianglelefteq R.
            \\\\ \\text{By Theorem 56, } \\pi \\text{ is a surjective ring homomorphism}
            \\\\ \\text{and } J \\trianglelefteq R \\text{ by assumption}.
            \\\\ \\text{So by Theorem 54, we have } \\pi(J) \\trianglelefteq R/I.
            \\\\ \\text{Note that } \\pi(J) = J/I.
            \\\\ \\text{Thus, } J/I \\trianglelefteq R/I.
            \\\\ \\
            \\\\ \\text{Conversely, assume } K \\trianglelefteq R/I.
            \\\\ \\text{Define } J = \\pi^{-1}(K) = \\{ r \\in R \\mid \\pi(r) \\in K \\}.
            \\\\ \\text{By assumption, } (K, +) \\leq (R/I, +).
            \\\\ \\text{So } K \\text{ and } R/I \\text{ share the same identity element } 0 + I.
            \\\\ \\text{Thus, } \\pi(0) = 0 + I \\in K,
            \\\\ \\text{which implies } 0 \\in J.
            \\\\ \\text{Let } a,b \\in J. \\text{ Then } \\pi(a), \\pi(b) \\in K.
            \\\\ \\text{Then } \\pi(a) - \\pi(b) = \\pi(a-b) \\in K,
    `
  },
  {
    number: 100,
    title:"Maximal Ideal iff Quotient Ring is a Field",
    statement: `
    `
  },
  {
    number: 1000,
    title: "Generated Sets are Equivalent when their Generators are divisible of each other.",
    statement: `\\text{Let } a, b \\in R. 
                \\\\ \\text{Then } \\langle a \\rangle = \\langle b \\rangle \\text{ iff } b = au,
                \\\\ \\text{for some invertible } u \\in R.
    `,
    proof: `\\text{Assume } \\langle a \\rangle = \\langle b \\rangle. 
            \\\\ \\text{Then } \\exists u, x \\in R \\text{ such that } b = au \\text{ and } a = bx.
            \\\\ \\text{So by substitution, } a = aux.
            \\\\ \\text{Since } R \\text{ is an integral domain,}
            \\\\ \\text{it follows that } 1 = ux, \\text{ hence } u \\text{ is invertible. }
            \\\\ \\text{Conversely,} \\text{ assume } b = au \\text{ for some invertible } u \\in R.
            \\\\ \\text{Then } \\langle b \\rangle \\subseteq \\langle a \\rangle.
            \\\\ \\text{Since } u \\text{ is invertible, we have } bu^{-1} = a.
            \\\\ \\text{Which implies, } \\langle a \\rangle \\subseteq \\langle b \\rangle.
            \\\\ \\text{Thus, } \\langle a \\rangle = \\langle b \\rangle.
    `
  },
  {
    number: 1001,
    title: "Generators are only Irreducible when the Generating Set is Prime",
    statement: `a \\in R \\text{ is irreducible iff } \\langle a \\rangle \\text{ is prime.}`,
    proof: `\\text{Assume } a \\text{ is irreducible.}
            \\\\ \\text{If } x, y \\in R \\text{ and } xy \\in \\langle a \\rangle, \\text{ then } a | xy.
            \\\\ \\text{So either } a | x \\text{ or } a | y.
            \\\\ \\text{In other words, either } x \\in \\langle a \\rangle \\text{ or } y \\in \\langle a \\rangle.
            \\\\ \\text{So } \\langle a \\rangle \\text{ is prime.} 
            \\\\ \\text{Conversely, assume } \\langle a \\rangle \\text{ is prime}.
            \\\\ \\text{Let } x, y \\in R \\text{ such that } a | xy.
            \\\\ \\text{Then } x, y \\in \\langle a \\rangle. 
            \\\\ \\text{So either } x \\in \\langle a \\rangle \\text{ or } y \\in \\langle a \\rangle.
            \\\\ \\text{So either } a | x \\text{ or } a | y,
            \\\\ \\text{so } a \\text{ is irreducble.}
    `
  },
  {
    number: 1002,
    title: "An ideal of Z is only maximal when its generator is prime",
    statement: `\\text{Let } n \\in \\N.
                \\\\ \\text{Then } n \\text{ is prime iff } n \\Z \\trianglelefteq \\Z \\text{ is maximal}.
    `,
    proof: `\\text{Assume } n \\text{ is prime.}
            \\\\ \\text{Let } J \\trianglelefteq \\Z \\text{ such that } n \\Z \\subseteq J \\subseteq \\Z. 
            \\\\ \\text{Since every ideal in } \\Z \\text{ is principal, } 
            \\\\ \\exists m \\in \\Z \\text{ such that } J = m \\Z.
            \\\\ \\text{So } n \\Z \\subseteq m \\Z, \\text{ which implies } 
            \\\\ \\exists u \\in \\Z \\text{ such that } n = mu.
            \\\\ \\text{Since } n \\text{ is prime, its only divisors are 1 and n.}
            \\\\ \\text{So either } m = 1 \\text{ or } m = n. 
            \\\\ \\text{If } m = 1, \\text{ then } m \\Z = \\Z.
            \\\\ \\text{If } m = n, \\text{ then } m \\Z = n \\Z.
            \\\\ \\text{Thus, by definition } n \\Z \\text{ is maximal.} 
            \\\\ \\text{Conversely, assume } n \\Z \\trianglelefteq \\Z \\text{ is maximal.}
            \\\\ \\text{Let } J \\text{ be an ideal such that } n \\Z \\trianglelefteq J \\trianglelefteq \\Z.
            \\\\ \\text{Since every ideal in } \\Z \\text{ is principal, } 
            \\\\ \\exists m \\in \\Z \\text{ such that } J = m \\Z.
            \\\\ \\text{Since } n \\Z \\text{ is maximal, }
            \\\\ \\text{either } m \\Z = n \\Z \\text{ or } m \\Z = \\Z.
            \\\\ \\text{Which implies } m | n, \\text{ and that } m = n \\text{ or } m = 1. 
            \\\\ \\text{Which implies that } n \\text{ is prime.} \\ \\ \\blacksquare
    `
  },
  {
    number: 1003,
    title: "Generalization of Previous Theorem",
    statement: `\\text{In any Principal Integral Domain (PID),} 
                \\\\ \\text{every non-zero prime ideal is maximal.}`,
    proof: `\\text{Let } R \\text{ be a PID, and let } I \\trianglelefteq R \\text{ be a non-zero prime.} 
            \\\\ \\text{Let } I \\trianglelefteq J \\trianglelefteq R. \\text{ Since R is PID,}
            \\\\ \\exists a, b \\in R \\text{ such that } I = \\langle a \\rangle \\text{ and } J = \\langle b \\rangle.
            \\\\ \\text{Since } I \\subseteq J, a \\in \\langle b \\rangle, \\text{ so } \\exists r \\in R
            \\\\ \\text{such that } a = br. 
            \\\\ \\text{Then } br \\in \\langle a \\rangle \\text{ and equivalently } br \\in I,
            \\\\ \\text{and since } I \\text{ is prime, either } b \\in I \\text{ or } r \\in I.
            \\\\ \\text{If } b \\in I, \\text{ then } \\langle b \\rangle \\subseteq I, \\text{ that is} 
            \\\\ J \\subseteq I. \\text{ Hence } J = I.
            \\\\ \\text{If } r \\in I, \\text{ then } \\exists x \\in R \\text{ such that } r = ax.
            \\\\ \\text{Then } r = bxr. 
            \\\\ \\text{Since } I \\not= \\{0\\}, \\text{ we have } a \\not = 0, \\text{ thus } r \\not = 0.
            \\\\ \\text{Since } R \\text{ is an ID, the cancellation law holds.}
            \\\\ \\text{So we get } 1 = bx. \\text{ Which implies } 1 \\in \\langle b \\rangle,
            \\\\ \\text{and so } J = \\langle b \\rangle = R.
            \\\\ \\text{Hence, we conclude that } I \\text{ is maximal.}
    `
  },
  {
    number: 1004,
    title: "Ott's 2nd Theorem",
    statement: `\\text{Let } R \\text{ be an ID and } I \\trianglelefteq R.
                \\\\ \\text{Then } I \\text{ is prime iff } R/I \\text{ is an ID.}
    `,
    proof: `\\text{First, similarly as seen in Ott's 1st Theorem,}
            \\\\ R/I \\text{ is commutative and unital.}
            \\\\ \\text{Now assume } I \\text{ is prime.}
            \\\\ \\text{Assume } (a+I) \\cdot (b+I) = 0 \\text{ for some } a, b \\in R.
            \\\\ \\text{Then } ab + I = 0 + I, \\text{ so } ab \\in I.
            \\\\ \\text{Since } I \\text{ is prime, either } a \\in I \\text{ or } b \\in I.
            \\\\ \\text{Therefore, either } a+I = 0 + I \\text{ or } b+I = 0+I.
            \\\\ \\text{This shows } R/I \\text{ is an ID.} 
            \\\\ \\text{Conversely, assume } R/I \\text{ is an ID.}
            \\\\ \\text{Let } x, y \\in R \\text{ such that } xy \\in I. 
            \\\\ \\text{Then } xy+I = 0+I, \\text{ so } (x+I) \\cdot (y+I) = 0+I,
            \\\\ \\text{and since } R/I \\text{ is an ID, either } x \\in I \\text{ or } y \\in I.
            \\\\ \\text{This shows that } I \\text{ is prime.} 
    `
  },
  {
    number: 1005,
    title: "Sort of Fundamental Theorem of Algebra",
    statement: `\\text{Let } p(x) \\in \\R[x] \\text{ be a non-constant polynomial.}
                \\\\ \\text{Then } \\exists \\text{ a field } \\mathbb{F} \\text{ containing an isomorphic copy of } \\R
                \\\\ \\text{and } \\alpha \\in \\mathbb{F} \\text{ such that } p(\\alpha) = 0.
    `,
    proof: `\\text{WLOG we may assume } p(x) \\text{ is irreducible,}
            \\\\ \\text{thus } \\langle p(x) \\rangle \\text{ is prime. Since } \\R[x] \\text{ is a PID,}
            \\\\ \\text{by Theorem 1003, } \\langle p(x) \\rangle \\text{ is maximal.}
            \\\\ \\text{By Ott's 1st, } \\R[x]/\\langle p(x) \\rangle \\text{ is a field.}
            \\\\ \\text{We denote it by } \\mathbb{F}.
            \\\\ \\text{We show there exists an injective ring homomorphism}
            \\\\ \\phi: \\R \\to \\mathbb{F} \\text{ defined by } \\phi(r) = r + \\langle p(x) \\rangle,
            \\\\ \\text{where we consider } r \\text{ as a constant polynomial.}
            \\\\ \\text{To show } \\phi \\text{ is a ring homomorphism,}
            \\\\ \\text{let } a, b \\in \\R.
            \\\\ \\text{Then we have } \\phi(a+b) = (a + b) + \\langle p(x) \\rangle,
            \\\\ \\text{and by coset addition, } 
            \\\\ = a + \\langle p(x) \\rangle + b + \\langle p(x) \\rangle = \\phi(a) + \\phi(b).
            \\\\ \\text{Similarly, } \\phi(ab) = ab + \\langle p(x) \\rangle
            \\\\ = (a + \\langle p(x) \\rangle) \\cdot (b + \\langle p(x) \\rangle) = \\phi(a) \\cdot \\phi(b).
            \\\\ \\text{This shows } \\phi \\text{ is a ring homomorphism.}
            \\\\ \\text{Let } r \\in \\R \\text{ such that } \\phi(r) = 0.
            \\\\ \\text{This implies the constant polynomial } r \\text{ belongs to } \\langle p(x) \\rangle.
            \\\\ \\text{So } \\exists q(x) \\in \\R[x] \\text{ such that } p(x)q(x) 
            \\\\ \\text{is the constant polynomial } r.
            \\\\ \\text{The only possibility is } q(x) = 0 \\text{ and } r = 0.
            \\\\ \\text{So } ker(\\phi) = \\{0\\}. \\text{Thus, } \\phi \\text{ is injective.}
            \\\\ \\text{Hence } \\R \\cong \\phi(\\R) \\leq \\mathbb{F}.
            \\\\ \\text{Let } p(x) = a_n x^n + a_{n-1} x^{n-1} + ... + a_1 x + a_0
            \\\\ \\text{where } a_n, a_{n-1}, ..., a_1, a_0 \\in \\R.
            \\\\ \\text{Let } \\alpha = x + \\langle p(x) \\rangle and I = \\langle p(x) \\rangle.
            \\\\ \\text{Then } p(\\alpha) = a_n \\alpha^n + a_{n-1} \\alpha^{n-1} + ... + a_1 \\alpha + a_0
            \\\\ = a_n (x^n + I) + a_{n-1} (x^{n-1} + I) + ... + a_1 (x + I) + a_0
            \\\\ = (a_n x^n + I) + (a_{n-1} x^{n-1} + I) + ... + (a_1 x + I) + a_0
            \\\\ = (a_n x^n + a_{n-1} x^{n-1} + ... + a_1 x + a_0) + I
            \\\\ = p(x) + I = 0 + I.
            \\\\ \\text{Which is the 0 of the field } \\mathbb{F}. \\ \\ \\blacksquare
    `
  }
];
