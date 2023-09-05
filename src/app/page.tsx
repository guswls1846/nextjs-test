"use client";

import React from "react";
import tw from "twin.macro";
import { useDispatch, useSelector } from "@/lib/redux";
import { decrement, increment } from "@/lib/redux/slices";

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
      <h1>Next.js + Tailwind CSS</h1>

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
    </Main>
  );
}

const Main = tw.main`flex min-h-screen flex-col items-center p-24 gap-8`;
const Row = tw.div`flex flex-row items-center justify-center gap-4`;
const Text = tw.p`text-2xl font-bold`;
const Button = tw.button`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`;
