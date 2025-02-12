import type { Metadata } from "next";
import '../css/index.css'
import siteData from "@/data/siteData";
import MobileNav from "@/components/nav/MobileNav";
import DesktopNav from "@/components/nav/DesktopNav";

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
        <main>
          <div className="flex p-24 sm:gap-24">
            <div>
              <MobileNav />
              <DesktopNav />
            </div>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
