import React from "react";
import LangCard from "../LangCard/LangCard";
import ProjectCard from "../ProjectCard/ProjectCard";
import {
  faHtml5,
  faCss3,
  faSass,
  faNodeJs,
  faReact,
  faJsSquare,
} from "@fortawesome/free-brands-svg-icons";
import jfImage from "../../imgs/jfrestoration.png";

function MainContent() {
  return (
    <div className="mainContainer">
      <div className="titleContainer">
        <h2>Front end web developer residing in Auckland, New Zealand</h2>
      </div>
      <h2 className="titleText">Proficient in</h2>
      <div className="displayCards">
        <LangCard icon={faHtml5} title="HTML 5" />
        <LangCard icon={faCss3} title="CSS3" />
        <LangCard icon={faSass} title="Sass" />
        <LangCard icon={faJsSquare} title="JavaScript" />
        <LangCard icon={faNodeJs} title="Node.js" />
        <LangCard icon={faReact} title="ReactJs" />
      </div>
      <h2 className="titleText">Current Projects</h2>
      <div className="displayCards">
        <ProjectCard
          img={jfImage}
          siteLink="https://www.jfrestoration.co.nz/"
          siteLinkEasy="www.jfrestoration.co.nz"
        />
      </div>
      <div className="contactContainer">
        <h2 className="titleText">Contact:</h2>
        <h3>Phone: 021 903 800</h3>
        <h3>Email: louis.fowler@gmail.com</h3>
      </div>
    </div>
  );
}

export default MainContent;
