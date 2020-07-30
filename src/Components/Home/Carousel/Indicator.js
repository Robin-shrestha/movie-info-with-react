import React from "react";

const Indicator = ({ nowPlaying, activeIndex, setActiveIndex }) => {
  const goToSlide = (index) => {
    setActiveIndex(index);
  };
  return (
    <ul className="carousel__indicators">
      {nowPlaying.slice(0, 10).map((slide, index) => {
        return (
          <li key={index}>
            <a
              className={
                index == activeIndex
                  ? "carousel__indicator carousel__indicator--active"
                  : "carousel__indicator"
              }
              onClick={(e) => goToSlide(index)}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Indicator;
