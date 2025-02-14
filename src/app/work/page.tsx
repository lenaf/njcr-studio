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

const carouselImages = [
  { src: koreaTown1, alt: '' },
  { src: koreaTown2, alt: '' },
  { src: koreaTown3, alt: '' },
  { src: koreaTown4, alt: '' },
  { src: koreaTown5, alt: '' },
  { src: koreaTown6, alt: '' },
  { src: koreaTown7, alt: '' },
  { src: koreaTown8, alt: '' },
  { src: upperEastSide, alt: '' }
]

export default function Page() {
  return (
    <div>
      <Carousel id='home-hero-carousel' isAutoPlay={false}>
        {carouselImages.map(({ src, alt }, i) =>
          <Image
            key={i}
            src={src}
            alt={alt}
            width={500}
            className="w-full brightness-75	"
          />)}
      </Carousel>
    </div>
  )
}
