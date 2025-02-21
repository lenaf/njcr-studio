import DesktopNav from "@/components/nav/DesktopNav";
import MobileNav from "@/components/nav/MobileNav";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex py-16 px-10 md:px-16 sm:gap-16 md:gap-24 h-screen">
      <div className="mt-10">
        <MobileNav />
        <DesktopNav />
      </div >
      {children}
    </div >
  );
}
