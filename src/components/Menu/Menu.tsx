import React, { FunctionComponent, useState } from "react";
import Typography from "@Components/Typography/Typography";
import { List, ListItem } from "@Components/List/List";
import Anchor from "@Components/Anchor/Anchor";
import Icon from "@Components/Icon/Icon";
import menuIcon from "@Assets/menu.svg";
import { IMenu } from "./IMenu";
import clsx from "clsx";
import "./Menu.scss";

const Menu: FunctionComponent<IMenu> = ({ items, title }) => {
  const [open, toggleOpen] = useState(false);

  return (
    <div className="menu">
      <div className="menu__inner flex flex--v-centre flex--between">
        <Anchor
          children={<Typography text={title} variant="h2" />}
          ariaLabel="Home"
          href="/"
        />
        <Icon
          className="menu__icon interactable"
          action={() => toggleOpen(!open)}
          src={menuIcon}
          alt="Menu"
        />
      </div>
      <nav
        className={clsx("menu__nav", {
          "menu__nav--open": open
        })}
      >
        <List
          children={items.map((item: string, index: number) => (
            <ListItem className="menu__item" key={item}>
              <Anchor
                href={`/${item.toLowerCase()}`}
                children={item}
                ariaLabel={item}
              />
            </ListItem>
          ))}
          className="menu__nav-items"
        />
      </nav>
    </div>
  );
};

export default Menu;
