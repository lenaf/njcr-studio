import { genPageMetadata } from "../seo";
import Link from "next/link";
import ContactImage from "./ContactImage";

export const metadata = genPageMetadata({ title: "Contact" });

export default function Page() {
  return (
    <div className="md:grid md:grid-cols-2 gap-8 md:gap-16 flex flex-col h-full w-full">
      <div className="md:mt-10">
        <div>
          <Link className="no-underline" href="mailto: njcrstudio@gmail.com">
            njcrstudio@gmail.com
          </Link>
        </div>
        <div>
          {" "}
          <Link className="no-underline" href="tel:+1 917 209 9253">
            {" "}
            917.209.9253{" "}
          </Link>
        </div>
        <div>
          <Link
            className="no-underline"
            target="_blank"
            href="https://www.instagram.com/noahruttenberg/"
          >
            @noahruttenberg
          </Link>
        </div>
      </div>
      <div className="relative flex-grow md:mt-10">
        <ContactImage />
      </div>
    </div>
  );
}
