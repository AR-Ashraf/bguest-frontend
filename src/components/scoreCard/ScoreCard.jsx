import React from "react";
import Title from "../title/Title";
import "./scoreCard.css";

function ScoreCard({width, height, src, text, score}) {

  return (
    <div className="bguest__scoreCard" style={{width: width, height: height}}>
    <div className="bguest__scoreCard-icon">
    {src}
    </div>
    <div className="bguest__scoreCard-name">
        <h2>{text}</h2>
        <Title firstLineText={score} fontSize="3em"/>
    </div>
    </div>
  );
}

export default ScoreCard;
