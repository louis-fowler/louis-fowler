import React from "react";

function ProjectCard(props) {
  return (
    <div className="proCardContainer">
      <div className="imgContainer">
        <a href={props.siteLink}>
          <img src={props.img} alt={props.siteLinkEasy} />
        </a>
      </div>
      <a href={props.siteLink}>
        <h2 className="projectLink">{props.siteLinkEasy}</h2>
      </a>
    </div>
  );
}

export default ProjectCard;
