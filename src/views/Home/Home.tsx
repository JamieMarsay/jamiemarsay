import React, { FunctionComponent, Fragment } from "react";
import Block from "@Components/Block/Block";

const paragraphs = [
  "I'm a front-end web developer specialising in ReactJs & TypeScript. Possessing a passion for crafting clean, performant experiences, I deliver quality work and focus on quality over quantity every time.",
  "I am currently one of two directors over at Nest Agency, a brand new, tech-first agency specialising in building slick digital experiences.",
];

const Home: FunctionComponent = () => {
  return (
    <Fragment>
      <Block
        ctaUrl="mailto:jamie@nestagency.io"
        paragraphs={paragraphs}
        ctaText="Get in touch"
        title="Hi, I'm Jamie"
      />
    </Fragment>
  );
};

export default Home;
