"use client";

import React from "react";
import tw from "twin.macro";

export default function Home() {
  return (
    <Main>
      <Title>Next.js Tailwind CSS</Title>
    </Main>
  );
}

const Main = tw.main`flex h-screen flex-col items-center p-24 gap-8`;
const Title = tw.h1`text-2xl font-bold mb-4`;
