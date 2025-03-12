import { genPageMetadata } from "../seo"
import Image from "next/image";
import boot from "public/images/photography/interiors/koreatown/boot.jpeg"

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  return (
    <div className="md:grid md:grid-cols-2 gap-8 md:gap-16 flex flex-col h-full w-full">
      <div>
        <div className="md:mt-10">
          Noah Ruttenberg is a designer based in New York
          City. He received a Masters in Interior Design from
          the Paris College of Art and a B.A. in History of Art
          and Architecture and French from Brown University.
          Ruttenberg’s projects include both residential and
          commercial spaces, with an eye for handcrafted details,
          thoughtful layering, and a clever mix of old and new.
        </div>
      </div>
      <div className="relative flex-grow md:mt-10">
        <Image
          src={boot}
          alt="Noah"
          fill
          style={{
            objectFit: 'contain',
            objectPosition: 'top left'
          }}
          placeholder="blur"
        />
      </div>
    </div>
  )
}
