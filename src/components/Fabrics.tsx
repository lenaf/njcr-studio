"use client"

import Image from "next/image"
import Link from "next/link";
import fabric_green from "public/images/photography/fabrics/green.png"
import fabric_bw from "public/images/photography/fabrics/bw.png"
import fabric_red from "public/images/photography/fabrics/red.png"
import fabric_blue_red from "public/images/photography/fabrics/blue_red.png"
import fabric_blue_green from "public/images/photography/fabrics/blue_green.png"
import { useCallback, useEffect, useState } from "react";

const fabrics = [fabric_green, fabric_bw, fabric_red, fabric_blue_red, fabric_blue_green]

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
      <Link className="uppercase text-xl" href='/nav'>{'< Enter >'} </Link>
    </div>
  ) : <div></div>;
}
