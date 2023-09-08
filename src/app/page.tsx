"use client";

import React from "react";
import tw from "twin.macro";
import { useDispatch, useSelector } from "@/lib/redux";
import { decrement, increment } from "@/lib/redux/slices";
import Link from "next/link";
import { Carousel } from "@/components/organism";

const items = [
  {
    imageUrl: "https://picsum.photos/id/1/200/300",
    altText: "Image 1",
    caption: "Caption 1",
  },
  {
    imageUrl: "https://picsum.photos/id/2/200/300",
    altText: "Image 2",
    caption: "Caption 2",
  },
  {
    imageUrl: "https://picsum.photos/id/3/200/300",
    altText: "Image 3",
    caption: "Caption 3",
  },
];

export default function Home() {
  const dispatch = useDispatch();
  const { value: count } = useSelector((state) => state.counter);
  const handleDecrementButtonClick = () => {
    dispatch(decrement());
  };

  const handleIncrementButtonClick = () => {
    dispatch(increment());
  };

  return (
    <Main>
      <Title>Next.js + Tailwind CSS</Title>

      <Row>
        <Button
          aria-label="Decrement value"
          onClick={handleDecrementButtonClick}
        >
          -
        </Button>
        <Text>{count}</Text>
        <Button
          aria-label="Increment value"
          onClick={handleIncrementButtonClick}
        >
          +
        </Button>
      </Row>

      <Title>Carousel Example</Title>
      <Carousel items={items} />

      <Link href={"/form"}>
        <Button>Go Form Page</Button>
      </Link>
    </Main>
  );
}

const Main = tw.main`flex h-screen flex-col items-center p-24 gap-8`;
const Title = tw.h1`text-2xl font-bold mb-4`;
const Row = tw.div`flex flex-row items-center justify-center gap-4`;
const Text = tw.p`text-2xl font-bold`;
const Button = tw.button`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`;
