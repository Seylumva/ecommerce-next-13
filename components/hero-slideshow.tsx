"use client"

import * as React from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"

export default function HeroSlideshow() {
  const [slide, setSlide] = React.useState<number>(0)

  return (
    <div className="relative aspect-video">
      <div className="absolute inset-0 z-20 bg-black/60"></div>
      <Image
        draggable={false}
        src={images[slide].file}
        alt={images[slide].alt}
        fill={true}
        className="object-cover"
      />
      <div className="absolute flex gap-2 z-30 bottom-4 left-1/2 -translate-x-1/2">
        {images.map((_, index) => (
          <button
            onClick={() => setSlide(index)}
            className={cn(
              "h-[6px] w-[40px] hover:bg-white transition",
              index === slide ? "bg-white" : "bg-gray-400"
            )}
          ></button>
        ))}
      </div>
    </div>
  )
}

const images = [
  {
    file: "/hero-1.jpg",
    alt: "First slide image",
  },
  {
    file: "/hero-2.jpg",
    alt: "Second slide image",
  },
  {
    file: "/hero-3.jpg",
    alt: "Third slide image",
  },
  {
    file: "/hero-4.jpg",
    alt: "Fourth slide image",
  },
  {
    file: "/hero-5.jpg",
    alt: "Fifth slide image",
  },
]
