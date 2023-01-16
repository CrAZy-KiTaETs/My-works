import React from "react";
import "./Projects.css";

const Projects = ({ img, text, activeProject, name, style, link }) => {
  return (
    <div className="projectWrapper" id={activeProject}>
      <div className="project" id={style}>
        <button className="imgBtn">
          <a href={link} target="blank" className="fd">
            <img src={img} className="projectImg" />
          </a>
        </button>
        <span className="projectName">{name}</span>
      </div>
      <div className="textWrapper">
        <p className="projectText">{text}</p>
      </div>
    </div>
  );
};

export default Projects;
