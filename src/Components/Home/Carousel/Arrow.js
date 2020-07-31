import React, { useEffect } from "react";

const Arrow = ({ direction, activeIndex, setActiveIndex }) => {
  const onArrowClick = (e) => {
    e.preventDefault();
    let index = activeIndex;
    let slideLength = 9;
    if (direction === "left") {
      if (index < 1) {
        index = slideLength;
      } else {
        --index;
      }
    } else if (direction === "right") {
      if (index == slideLength) {
        index = 0;
      } else {
        ++index;
      }
    }
    setActiveIndex(index);
  };

  return (
    <a
      href="#"
      // className="carousel__arrow carousel__arrow--right"
      className={`carousel__arrow carousel__arrow--${direction}`}
      onClick={(e) => onArrowClick(e)}
    >
      <span className={`fa fa-2x fa-angle-${direction}`} />
    </a>
  );
};

export default Arrow;
