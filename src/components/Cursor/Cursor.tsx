import React, { createRef, useState, Fragment } from "react";
import clsx from "clsx";
import "./Cursor.scss";

const Cursor = () => {
  const cursorRef = createRef<HTMLDivElement>();
  const [hovering, toggleHovering] = useState(false);
  const [currentX, setX] = useState(window.innerWidth / 2);
  const [currentY, setY] = useState(window.innerHeight / 2);

  window.onmousemove = (e: any) => {
    const { clientX, clientY } = e;
    setX(clientX);
    setY(clientY);

    if (Array.from(e.target.classList).includes("interactable")) {
      toggleHovering(true);
    } else {
      toggleHovering(false);
    }
  };

  return (
    <Fragment>
      <div
        style={{
          left: `${currentX}px`,
          top: `${currentY}px`,
        }}
        className={clsx("cursor cursor__outer", {
          "cursor--hover": hovering,
        })}
        ref={cursorRef}
      />
      <div
        style={{
          left: `${currentX}px`,
          top: `${currentY}px`,
        }}
        className={clsx("cursor cursor__inner", {
          "cursor--hover-inner": hovering,
        })}
      />
    </Fragment>
  );
};

export default Cursor;
