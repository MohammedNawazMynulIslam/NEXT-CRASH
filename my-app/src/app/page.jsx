import React from "react";
import { Feed } from "@components/Feed";
const Home = () => {
  return (
    <section className="">
      <h1 className="head_text">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptopia is a open-source AI prompting tool for modern world to
        discover, create and share creative prompts
      </p>
      <Feed />
    </section>
  );
};
export default Home;
// watched 56min
