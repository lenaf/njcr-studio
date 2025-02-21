import DesktopNav from "@/components/nav/DesktopNav";
import MobileNav from "@/components/nav/MobileNav";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex p-16 sm:gap-16 md:gap-24 h-screen">
      <div className="mt-10">
        <MobileNav />
        <DesktopNav />
      </div >
      {children}
    </div >
  );
}
