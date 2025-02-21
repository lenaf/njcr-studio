"use client"

import Image from "next/image"
import Link from "next/link";
import fabric_green from "public/images/photography/fabrics/green.png"
import fabric_bw from "public/images/photography/fabrics/bw.png"
import fabric_red from "public/images/photography/fabrics/red.png"
import fabric_blue_red from "public/images/photography/fabrics/blue_red.png"
import fabric_blue_green from "public/images/photography/fabrics/blue_green.png"

const fabrics = [fabric_green, fabric_bw, fabric_red, fabric_red, fabric_blue_red, fabric_blue_green]

export default function Home() {
  const randomFrabric = fabrics[Math.floor(Math.random() * fabrics.length)];

  return (
    <div className="flex flex-col items-center justify-center gap-4 h-screen w-full">
      <div className="relative h-2/5 xs:h-1/2 sm:h-2/3 md:h-3/4 w-full">
        <Image
          src={randomFrabric}
          alt="Noah"
          fill={true}
          objectFit="contain"
        />
      </div>
      <Link className="uppercase text-xl font-black" href='/nav'>{'< Enter >'} </Link>
    </div>
  );
}
