"use client"

import Image from "next/image"
import background from "public/images/photography/background.jpg"

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen	">

      <section id='home' className="h-full w-full animate-fade">
        <Image
          src={background}
          alt="Living room designed by Noah"
          fill
          className="object-cover object-top"
        />
      </section>
    </div>
  );
}
