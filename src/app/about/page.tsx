import { genPageMetadata } from "../seo";
import Image from "next/image";
import boot from "public/images/photography/interiors/koreatown/boot.jpeg";

export const metadata = genPageMetadata({ title: "About" });

export default function Page() {
  return (
    <div className="md:grid md:grid-cols-2 gap-8 md:gap-16 flex flex-col h-full w-full">
      <div>
        <div className="md:mt-10">
          NJCR Studio is an interior design firm based in New York City, led by
          founder Noah Ruttenberg. The studio designs residential, hospitality
          and commercial spaces, as well as custom furniture and objects, all
          defined by handcrafted details and a considered mix of old and new.
          Noah holds a Masters in Interior Design from the Paris College of Art,
          and a B.A. in Art History and French from Brown University.
        </div>
      </div>
      <div className="relative h-[50vh] md:h-auto md:flex-grow md:mt-10">
        <Image
          src={boot}
          alt="Noah"
          fill
          style={{
            objectFit: "contain",
            objectPosition: "top center",
          }}
          placeholder="blur"
        />
      </div>
    </div>
  );
}
