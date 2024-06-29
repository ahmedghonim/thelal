"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "../atoms/carousel";
import Image, { StaticImageData } from "next/image";

function Slider({
  data,
}: {
  data: {
    image: string | StaticImageData;
  }[];
}) {
  return (
    <Carousel
      plugins={[Autoplay({ delay: 2000, stopOnInteraction: true })]}
      className="w-full h-full"
    >
      <CarouselContent className="h-full">
        {data.map((data, index) => (
          <CarouselItem key={index} className="h-full">
            <Image
              src={data.image}
              alt="hero"
              className="h-full w-full z-[-1]  object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default Slider;
