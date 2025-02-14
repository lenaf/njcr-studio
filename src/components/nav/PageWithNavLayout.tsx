import DesktopNav from "@/components/nav/DesktopNav";
import MobileNav from "@/components/nav/MobileNav";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex p-16 sm:gap-16">
      <div className="mt-16">
        <MobileNav />
        <DesktopNav />
      </div >
      {children}
    </div >
  );
}
