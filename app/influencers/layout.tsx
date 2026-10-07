import type { Metadata } from "next";

// Unlisted page: reachable by typing /influencers, kept out of search results
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function InfluencersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
