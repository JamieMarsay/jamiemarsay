import React, { FunctionComponent } from "react";
import Menu from "@Components/Menu/Menu";
import { IHeading } from "./IHeading";
import "./Heading.scss";

const Heading: FunctionComponent<IHeading> = ({ title }) => {
  return (
    <header className="heading m--bottom-xxl flex flex--between flex--v-centre">
      <Menu title={title} items={["About", "Work", "Contact"]} />
    </header>
  );
};

export default Heading;
