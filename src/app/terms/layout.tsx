import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kullanım Şartları · Dragon",
  description: "Dragon Kullanım Şartları / Terms of Use",
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
