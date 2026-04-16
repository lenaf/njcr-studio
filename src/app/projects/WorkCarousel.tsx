"use client";

import { Carousel } from "@/components/common/Carousel";
import Image from "next/image";
import boot from "public/images/photography/interiors/koreatown/boot.jpeg";
import dining from "public/images/photography/interiors/koreatown/dining.jpeg";
import bed from "public/images/photography/interiors/koreatown/bed.jpeg";
import bedside from "public/images/photography/interiors/koreatown/bedside.jpeg";
import couch from "public/images/photography/interiors/koreatown/couch.jpeg";
import chairs from "public/images/photography/interiors/koreatown/chairs.jpeg";
import kitchen from "public/images/photography/interiors/koreatown/kitchen.jpeg";
import pillows from "public/images/photography/interiors/koreatown/pillows.jpeg";
import table from "public/images/photography/interiors/koreatown/table.jpeg";
import office from "public/images/photography/interiors/ues/office.jpg";
import stairs from "public/images/photography/interiors/williamsburg/stairs.jpg";
import kitchenW from "public/images/photography/interiors/williamsburg/kitchen.jpg";
import living from "public/images/photography/interiors/ues/living.jpeg";
import diningUES from "public/images/photography/interiors/ues/dining.jpg";
import checkers from "public/images/photography/interiors/ues/checkers.jpg";
import board from "public/images/photography/interiors/ues/board.jpeg";
import nook from "public/images/photography/interiors/ues/nook.jpg";
import shot01 from "public/images/photography/interiors/ues/shot01.jpg";
import shot02 from "public/images/photography/interiors/ues/shot02.jpg";
import shot03 from "public/images/photography/interiors/ues/shot03.jpg";
import shot04 from "public/images/photography/interiors/ues/shot04.jpg";
import shot05 from "public/images/photography/interiors/ues/shot05.jpg";
import shot06a from "public/images/photography/interiors/ues/shot06a.jpg";
import shot06b from "public/images/photography/interiors/ues/shot06b.jpg";
import shot07a from "public/images/photography/interiors/ues/shot07a.jpg";
import shot07b from "public/images/photography/interiors/ues/shot07b.jpg";
import shot07c from "public/images/photography/interiors/ues/shot07c.jpg";

import { useState } from "react";

const carouselImages = [
  { src: office, alt: "E 82nd" },
  { src: shot01, alt: "E 64th" },
  { src: chairs, alt: "koreatown" },
  { src: shot02, alt: "E 64th" },
  { src: living, alt: "williamsburg" },
  { src: shot03, alt: "E 64th" },
  { src: boot, alt: "koreatown" },
  // { src: table, alt: 'koreatown' },
  { src: shot04, alt: "E 64th" },
  { src: bedside, alt: "koreatown" },
  { src: diningUES, alt: "E 82nd" },
  { src: shot05, alt: "E 64th" },
  { src: kitchenW, alt: "williamsburg" },
  // { src: dining, alt: 'koreatown' },
  { src: shot06a, alt: "E 64th" },
  { src: checkers, alt: "custom backgammon table" },
  { src: shot06b, alt: "E 64th" },
  { src: board, alt: "custom backgammon table" },
  { src: shot07a, alt: "E 64th" },
  { src: nook, alt: "E 82nd" },
  { src: shot07b, alt: "E 64th" },
  // { src: pillows, alt: 'koreatown' },
  // { src: stairs, alt: 'williamsburg' },
  { src: kitchen, alt: "koreatown" },
  { src: shot07c, alt: "E 64th" },
  // { src: couch, alt: 'koreatown' },
];

export default function WorkCarousel() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="h-full w-full py-8 ">
      <Carousel
        setActiveIndexCb={setActiveIndex}
        className="relative w-full h-[60vh] sm:h-full sm:pb-10"
        isAutoPlay={false}
      >
        {carouselImages.map(({ src, alt }, i) => (
          <div key={i} className="relative flex grow">
            <Image
              src={src}
              alt={alt}
              fill
              style={{
                objectFit: "contain",
                objectPosition: "center center",
              }}
              className="pr-1"
            />
          </div>
        ))}
      </Carousel>
      <div className="absolute left-16 pt-6 sm:pt-0">
        {carouselImages[activeIndex].alt}
      </div>
    </div>
  );
}
