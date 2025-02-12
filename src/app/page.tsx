"use client"

import Image from "next/image"
import background from "public/images/photography/background.jpg"

export default function Home() {
  return (
    <div className="w-full">

      <section id='home' className="">
        <Image
          src={background}
          alt="Living room designed by Noah"
        />
        <div className="relative h-full w-full flex flex-col items-center justify-between py-8 z-10">
          <h1>NJCR STUDIO</h1>

          <a href="mailto:njcrstudio@gmail.com" >
            <h1>NJCRSTUDIO@GMAIL.COM</h1>
          </a>
        </div>
      </section>
    </div>
  );
}
