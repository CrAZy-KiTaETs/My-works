import React from "react";
import "./Nav.css";
import console_left from "../images/left-console.png";
import console_right from "../images/right-console.png";

const Nav = () => {
  return (
    <nav className="nav">
      <img src={console_left} className="console_left" />
      <ul>
        <li id="e1">Elements</li>
        <li id="active_element">Console</li>
        <li id="e3">Sources</li>
        <li id="e4">Network</li>
        <li id="e5">Perfomace</li>
        <li id="e6">Memory</li>
        <li id="e7">Application</li>
        <li id="e8">Security</li>
        <li id="e9">Lighthouse</li>
      </ul>
      <img src={console_right} className="console_right" />
    </nav>
  );
};

export default Nav;
