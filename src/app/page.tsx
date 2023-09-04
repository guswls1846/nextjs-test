"use client"

import React from 'react'
import tw from 'twin.macro'

export default function Home() {
  return (
    <Main>
      <h1>Next.js + Tailwind CSS</h1>
    </Main>
  );
}

const Main = tw.main`flex min-h-screen flex-col items-center justify-between p-24`;
