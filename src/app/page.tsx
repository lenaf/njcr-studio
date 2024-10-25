"use client"

import Image from "next/image"
import background from "public/images/photography/background.jpg"

export default function Home() {
  return (
    <div className="relative flex flex-col items-center h-screen	bg-white">

      <section id='home' className="h-full w-full">
        <Image
          src={background}
          alt="Living room designed by Noah"
          fill
          className="absolute object-cover object-middle"
        />
        <div className="relative h-full w-full flex flex-col items-center justify-between z-10 py-8">
          <h1>NJCR STUDIO</h1>
          <h1>NJCRSTUDIO@GMAIL.COM</h1>
        </div>
      </section>
    </div>
  );
}
