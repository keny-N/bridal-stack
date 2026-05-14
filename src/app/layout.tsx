import type { Metadata } from "next";
import "./globals.css";
import GitHubLink from "@/components/GitHubLink";

export const metadata: Metadata = {
  title: "Bridal Stack - BGM & Messages",
  description: "BGM setlist and special messages for our wedding guests.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {children}
        <GitHubLink />
      </body>
    </html>
  );
}