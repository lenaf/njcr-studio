import { genPageMetadata } from "../seo"
import Image from "next/image";
import koreaTown7 from "public/images/photography/interiors/koreaTown7.jpeg"

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  return (
    <div className="grid grid-cols-2 gap-16">
      <div>
        <div className="uppercase mb-4"> About</div>
        <div>
          Noah Ruttenberg is a designer based in New York
          City. He received a Masters in Interior Design from
          the Paris College of Art and a B.A. in History of Art
          and Architecture and French from Brown University.
          Ruttenberg’s projects include both residential and
          commercial spaces, with an eye for handcrafted details,
          thoughtful layering, and a clever mix of old and new.
        </div>
      </div>
      <Image
        src={koreaTown7}
        alt=''
        width={500}
        className="w-full "
      />
    </div>
  )
}
