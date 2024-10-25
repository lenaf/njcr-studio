import type { Metadata } from "next";
import '../css/index.css'
import siteData from "@/data/siteData";

export const metadata: Metadata = {
  title: siteData.title,
  description: siteData.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="custom" lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
