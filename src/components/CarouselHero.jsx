import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import heroImg from "../assets/images/heroImg.png"

export function CarouselHero() {
  return (
  
    <div className="w-full flex flex-row items-center justify-center bg-amber-400 ">
      <Carousel className="w-full">
      <CarouselContent className={"w-full"}>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className={"pl-0"}>
            <div className="w-ful">
             <img className="w-full object-cover bg-no-repeat" src={heroImg} alt="" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className={"absolute w-12 h-12 left-[10%] rounded-[10px] text-primary bg-[#D9D9D980] hover:bg-muted"} />
      <CarouselNext className={"absolute w-12 h-12  right-[10%] rounded-[10px] text-primary bg-[#D9D9D980] hover:bg-muted"}/>
    </Carousel>
    </div>
  );
}
