import { useState } from "react";
import { CarouselItem } from "@/components/organism/Carousel/type";

export const useCarousel = (items: CarouselItem[]) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1,
    );
  };
  return { activeIndex, handleNext, handlePrev };
};
