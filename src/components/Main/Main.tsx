import React, { FunctionComponent, Fragment } from "react";
import Heading from "@Components/Heading/Heading";
import { IMain } from "./IMain";
import "./Main.scss";

const Main: FunctionComponent<IMain> = ({ Current }) => (
  <Fragment>
    <Heading title="Jamie Marsay" />
    <main className="main">
      <div className="main__inner fade--in pos--rel">
        <Current />
      </div>
    </main>
  </Fragment>
);

export default Main;
