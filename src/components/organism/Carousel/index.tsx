import React, { useState } from "react";
import tw from "twin.macro";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { useCarousel } from "@/components/organism/Carousel/hooks/useCarousel";
import { CarouselItem } from "@/components/organism/Carousel/type";

interface CarouselProps {
  items: CarouselItem[];
}

export const Carousel = ({ items }: CarouselProps) => {
  const { activeIndex, handlePrev, handleNext } = useCarousel(items);
  return (
    <Container>
      <Button onClick={handlePrev} className="left-0 z-10">
        {"<"}
      </Button>
      <AnimatePresence mode="wait">
        <Content
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Image
            width={window.innerWidth}
            height={300}
            src={items[activeIndex].imageUrl}
            alt={items[activeIndex].altText}
            style={{ height: "300px" }}
          />
        </Content>
      </AnimatePresence>
      <Caption>{items[activeIndex].caption}</Caption>
      <Button className="right-0" onClick={handleNext}>
        {">"}
      </Button>
    </Container>
  );
};
const Container = tw.div`relative w-full max-w-screen-lg mx-auto h-[300px]`;
const Button = tw.button`absolute top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600`;
const Content = styled(motion.div)``;
const Caption = tw.p`bg-gray-800 text-white p-2 text-center`;
