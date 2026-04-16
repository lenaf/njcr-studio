import DesktopNav from "@/components/nav/DesktopNav";
import MobileNav from "@/components/nav/MobileNav";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="mobile">
        <MobileNav />
        <div className="flex justify-center pt-6">
          <span className="uppercase tracking-[0.3em] text-sm">NJCR Studio</span>
        </div>
      </div>
      <div className="flex p-8 sm:p-16 sm:gap-16 md:gap-24 flex-1 min-h-0 overflow-y-auto sm:overflow-hidden">
        <div className="mt-10">
          <DesktopNav />
        </div>
        {children}
      </div>
      <div className="mobile pb-12 text-center flex-shrink-0">
        <div className="uppercase text-xs font-semibold tracking-[0.25em] leading-5">
          <div>150 W 28th St</div>
          <div>New York, NY</div>
        </div>
        <a href="mailto:info@njcrstudio.com" className="text-[10px] tracking-wide mt-1 no-underline text-inherit">info@njcrstudio.com</a>
      </div>
    </div>
  );
}
