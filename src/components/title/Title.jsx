import React from "react";
import "./title.css";

function Title(props) {
  const firstLineWords = props.firstLineText?.split(" ");
  const secondLineWords = props.secondLineText?.split(" ");
  const thirdLineWords = props.thirdLineText?.split(" ");

  const highlightClass = (word) => {
    return word === props.highlightedWord ? "highlight" : null;
  };

  return (
    <div className="bguest__title">
      <h1>
        {firstLineWords?.map((word, index) => (
          <span
            key={index}
            className={highlightClass(word)}
          >
            {word}{" "}
          </span>
        ))}
      </h1>
      <h1>
        {secondLineWords?.map((word, index) => (
          <span
            key={index}
            className={highlightClass(word)}
          >
            {word}{" "}
          </span>
        ))}
      </h1>
      <h1>
        {thirdLineWords?.map((word, index) => (
          <span
            key={index}
            className={highlightClass(word)}
          >
            {word}{" "}
          </span>
        ))}
      </h1>
    </div>
  );
}

export default Title;
