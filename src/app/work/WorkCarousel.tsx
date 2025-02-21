"use client"

import { Carousel } from "@/components/common/Carousel"
import Image from "next/image"
import boot from "public/images/photography/interiors/koreatown/boot.jpeg"
import dining from "public/images/photography/interiors/koreatown/dining.jpeg"
import bed from "public/images/photography/interiors/koreatown/bed.jpeg"
import couch from "public/images/photography/interiors/koreatown/couch.jpeg"
import chairs from "public/images/photography/interiors/koreatown/chairs.jpeg"
import kitchen from "public/images/photography/interiors/koreatown/kitchen.jpeg"
import pillows from "public/images/photography/interiors/koreatown/pillows.jpeg"
import table from "public/images/photography/interiors/koreatown/table.jpeg"
import office from "public/images/photography/interiors/ues/office.jpg"
import stairs from "public/images/photography/interiors/williamsburg/stairs.jpg"
import living from "public/images/photography/interiors/williamsburg/living.jpeg"
import { useState } from "react"

const carouselImages = [
  { src: office, alt: 'upper east side' },
  { src: chairs, alt: 'koreatown' },
  { src: living, alt: 'williamsburg' },
  { src: boot, alt: 'koreatown' },
  { src: table, alt: 'koreatown' },
  { src: bed, alt: 'koreatown' },
  { src: dining, alt: 'upper east side' },
  { src: pillows, alt: 'koreatown' },
  { src: stairs, alt: 'williamsburg' },
  { src: kitchen, alt: 'koreatown' },
  { src: couch, alt: 'koreatown' },
]

export default function WorkCarousel() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="h-full w-full">
      <Carousel setActiveIndexCb={setActiveIndex} className="relative w-full h-1/2 xs:h-3/4 sm:h-full sm:pb-10" isAutoPlay={false}>
        {carouselImages.map(({ src, alt }, i) =>
          <div key={i} className="relative flex grow">
            <Image
              src={src}
              alt={alt}
              fill
              style={{
                objectFit: 'contain',
                objectPosition: 'bottom right'
              }}
              placeholder="blur"
            />
          </div>)}
      </Carousel>
      <div className="absolute left-16 pt-6 sm:pt-0">{carouselImages[activeIndex].alt}</div>
    </div>
  )
}
