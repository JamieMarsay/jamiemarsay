import React, { FunctionComponent, Fragment } from "react";
import Header from "@Components/Header/Header";
import Nav from "@Components/Nav/Nav";
import { IMain } from "./IMain";
import "./Main.scss";

const Main: FunctionComponent<IMain> = ({ Current }) => (
  <Fragment>
    <Header title="Jamie Marsay" />
    <Nav />
    <main className="main">
      <div className="main__inner pos--rel">
        <Current />
      </div>
    </main>
  </Fragment>
);

export default Main;
