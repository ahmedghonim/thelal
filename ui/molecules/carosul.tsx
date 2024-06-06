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
    title: string;
  }[];
}) {
  return (
    <Carousel
      plugins={[Autoplay({ delay: 2000, stopOnInteraction: true })]}
      className="w-full "
    >
      <CarouselContent>
        {data.map((data, index) => (
          <CarouselItem key={index}>
            <Image
              src={data.image}
              alt="hero"
              className="h-full w-full z-[-1]"
            />
            <h1 className="text-5xl font-bold w-1/2  text-white absolute top-1/2 translate-x-1/2 -translate-y-1/2">
              {data.title}
            </h1>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default Slider;
