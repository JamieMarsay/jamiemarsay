import React, { FunctionComponent, Fragment } from "react";
import { List, ListItem } from "@Components/List/List";
import { navLinks, ILink } from "@Data/navLinks";
import Icon from "@Components/Icon/Icon";
import { ISocial } from "./ISocial";
import clsx from "clsx";
import "./Social.scss";

const Social: FunctionComponent<ISocial> = ({ className }) => (
  <div
    className={clsx("social", {
      [`${className}`]: className
    })}
  >
    <List className="flex">
      {navLinks.map((link: ILink) => (
        <ListItem key={link.url}>
          <a
            children={<Icon name={link.name} label={link.label} />}
            className="interactable m--right-xmd"
            aria-label={link.name}
            target="_blank"
            href={link.url}
            rel="noopener"
          />
        </ListItem>
      ))}
    </List>
  </div>
);

export default Social;
