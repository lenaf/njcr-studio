import type { Metadata } from "next";
import '../css/index.css'
import siteData from "@/data/siteData";
import localFont from 'next/font/local'

const minion = localFont({ src: "../../public/fonts/MinionPro-Regular.otf" })


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
    <html data-theme="light" lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body>
        <main className={minion.className}>
          {children}
        </main>
      </body>
    </html>
  );
}
