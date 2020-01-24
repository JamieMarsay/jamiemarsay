import React, { FunctionComponent } from "react";
import Block from "@Components/Block/Block";

const Home: FunctionComponent = () => (
  <section className="fade--in">
    <Block
      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
      href="https://www.google.com"
      ctaText="Click here"
    />
    <Block
      title="Lorem ipsum dolor sit amet?"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
      ctaText="Click here"
      href="https://www.google.com"
    />
    <Block
      title="Excepteur sint occaecat cupidatat non proident"
      text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      href="https://www.google.com"
    />
  </section>
);

export default Home;
