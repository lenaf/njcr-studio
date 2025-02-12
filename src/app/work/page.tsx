import { Carousel } from "@/components/common/Carousel"
import { genPageMetadata } from "../seo"
import Image from "next/image"
import koreaTown1 from "public/images/photography/koreaTown1.jpeg"
import koreaTown2 from "public/images/photography/koreaTown2.jpeg"
import koreaTown3 from "public/images/photography/koreaTown3.jpeg"
import koreaTown4 from "public/images/photography/koreaTown4.jpeg"
import koreaTown5 from "public/images/photography/koreaTown5.jpeg"
import koreaTown6 from "public/images/photography/koreaTown6.jpeg"
import koreaTown7 from "public/images/photography/koreaTown7.jpeg"
import koreaTown8 from "public/images/photography/koreaTown8.jpeg"
import upperEastSide from "public/images/photography/upperEastSide.jpg"

export const metadata = genPageMetadata({ title: 'Work' })
const carouselSrcs = [koreaTown1, koreaTown2, koreaTown3, koreaTown4, koreaTown5, koreaTown6, koreaTown7, koreaTown8, upperEastSide]

export default function Page() {
  return (
    <div>
      <Carousel id='home-hero-carousel' isAutoPlay={false}>
        {carouselSrcs.map((src, i) =>
          <Image
            key={i}
            src={src}
            alt="Pride Photography"
            width={500}
            className="w-full brightness-75	"
          />)}
      </Carousel>
    </div>
  )
}
