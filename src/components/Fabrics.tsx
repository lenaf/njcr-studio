"use client"

import Image from "next/image"
import Link from "next/link";
import embroidery1 from "public/images/photography/fabrics/_0004_NJCR-embroidery-2.png"
import embroidery2 from "public/images/photography/fabrics/_0003_NJCR-embroidery-3.png"
import embroidery3 from "public/images/photography/fabrics/_0002_NJCR-embroidery-4.png"
import embroidery4 from "public/images/photography/fabrics/_0001_NJCR-embroidery-5.png"
import embroidery5 from "public/images/photography/fabrics/_0000_NJCR-embroidery-6.png"
import { useCallback, useEffect, useState } from "react";

const fabrics = [embroidery1, embroidery2, embroidery3, embroidery4, embroidery5]

function getNextIndex(currentIndex) {
  const nextIndex = (currentIndex + 1) % fabrics.length;
  return nextIndex;
}

export default function Fabrics() {

  const [randomIndex, setRandomIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const scrollRandomIndex = useCallback(() => {
    const nextIndex = getNextIndex(randomIndex);
    setRandomIndex(nextIndex);
  }, [randomIndex, setRandomIndex])

  useEffect(() => {
    const prevRandomIndex = localStorage.getItem("prevIndex");
    let newRandomIndex = Math.floor(Math.random() * fabrics.length);

    if (prevRandomIndex === newRandomIndex.toString()) {
      newRandomIndex = getNextIndex(newRandomIndex);
    }

    setRandomIndex(newRandomIndex);
    setIsReady(true);
    localStorage.setItem("prevIndex", newRandomIndex.toString());

  }, [])

  return isReady ? (
    <div className="flex flex-col items-center justify-center gap-4 h-screen w-full">
      <div className="relative h-1/3 xs:h-1/2 sm:h-2/3 md:h-3/4 w-full -mt-16 md:-mt-8">
        <Image
          src={fabrics[randomIndex]}
          alt="Noah"
          fill={true}
          objectFit="contain"
          onClick={scrollRandomIndex}
          className="cursor-pointer"
        />
      </div>
      <Link className="uppercase text-xl" href='/projects'>{'< Enter >'} </Link>
    </div>
  ) : <div></div>;
}
