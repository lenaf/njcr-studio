import { Carousel } from "@/components/common/Carousel"
import { genPageMetadata } from "../seo"
import Image from "next/image"
import boot from "public/images/photography/interiors/koreatown/boot.jpeg"
import dining from "public/images/photography/interiors/koreatown/dining.jpeg"
import bed from "public/images/photography/interiors/koreatown/bed.jpeg"
import chairs from "public/images/photography/interiors/koreatown/chairs.jpeg"
import kitchen from "public/images/photography/interiors/koreatown/kitchen.jpeg"
import pillows from "public/images/photography/interiors/koreatown/pillows.jpeg"
import table from "public/images/photography/interiors/koreatown/table.jpeg"

export const metadata = genPageMetadata({ title: 'Work' })

const carouselImages = [
  { src: boot, alt: '' },
  { src: bed, alt: '' },
  { src: dining, alt: '' },
  { src: table, alt: '' },
  { src: kitchen, alt: '' },
  { src: pillows, alt: '' },
  { src: chairs, alt: '' },
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
            className="w-half ml-auto"
          />)}
      </Carousel>
    </div>
  )
}
