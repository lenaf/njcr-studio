"use client"

import Image from "next/image";
import contact_1 from "public/images/photography/fabrics/contact_1.jpeg"
import contact_2 from "public/images/photography/fabrics/contact_2.jpeg"
import { useEffect, useState } from "react";

const contactImages = [contact_1, contact_2]

export default function ContactImage() {
  const [randomIndex, setRandomIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    const prevRandomIndex = localStorage.getItem("prevIndexContact");
    const newRandomIndex = prevRandomIndex === '0' ? 1 : 0;
    setRandomIndex(newRandomIndex);
    setIsReady(true);
    localStorage.setItem("prevIndexContact", newRandomIndex.toString());

  }, [])

  return isReady ? (
    <Image
      src={contactImages[randomIndex]}
      alt="Noah"
      fill
      style={{
        objectFit: 'contain',
        objectPosition: 'top left'
      }}
      placeholder="blur"
    />
  ) : null
}

