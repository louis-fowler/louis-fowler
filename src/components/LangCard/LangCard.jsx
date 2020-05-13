import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LangCard(props) {
  return (
    <div className="cardContainer">
      <div className="card">
        <i>
          <FontAwesomeIcon icon={props.icon} />
        </i>
      </div>
      <h3>{props.title}</h3>
    </div>
  );
}

export default LangCard;
