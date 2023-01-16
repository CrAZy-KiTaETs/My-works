import React from "react";
import "./FirstBox.css";
import Raindrop from "./Raindrop";
import Nav from "../Nav/Nav";

const FirstBox = ({ firstActive, secondActive }) => {
  return (
    <div
      className={
        secondActive
          ? "firstBox"
          : firstActive
          ? "firstBox active"
          : "firstBoxUp"
      }
    >
      <header className="header">
        <Raindrop />
        <p className="greeting">
          <span className="console">console</span>
          <span className="attribute">"Hello world! Alim is Here!"</span>
          <span className="hiddenbox">&nbsp;</span>
        </p>
      </header>
      <div className="browserConsole">
        <Nav />
        <div className="wrapper">
          <span className="triangle"></span>
          <span className="text_aboutme">
            &nbsp; Здравствуйте, меня зовут Косаев Алим и я делаю первые шаги к
            становлению Frontend разрaботчиком. <br />Я осовил HTML, CSS, SCSS,
            Js, React, Git, немного знаю Jquery и продолжаю улучшать свои навыки
            в этих областях. При написании проектов я множество раз сталкивался
            с трудностями и нехваткой знаний, но мне не важно на сколько трудной
            или невыполнимой изначально кажется задача, я встречу ее лицом к
            лицу и решу её. С моими проектами вы познакометесь далее проскролив
            вниз. В данный момент я решил сконцетрироваться на подготовке к
            собеседованиям и изучаю все необходимое для их прохождения.
          </span>
        </div>
      </div>
    </div>
  );
};

export default FirstBox;
