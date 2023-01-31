import React from "react";
import { Blog, Possibility, Features, WhatGPT3, Header } from "../containers";
import { CTA, Brand } from "../components";

function Home() {
  return (
    <>
      <div className="gradient__bg">
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
    </>
  );
}

export default Home;
