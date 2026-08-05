import React from "react";
import Hero from "./Home-components/Hero";
import Articles from "./Home-components/Articles";
import Categories from "./Home-components/Categories";
import Recently from "./Home-components/Recently";
import Subscription from "./Home-components/Subscription";

export default function Home() {
  return (
    <>
      <Hero />
      <Articles/>
      <Categories/>
      <Recently/>
      <Subscription/>
    </>
  );
}
