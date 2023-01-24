import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Projects from "./Projects";
import "./SecondBox.css";
import tictak from "../images/tic-tac.jpg";
import todo from "../images/to-do.png";
import superPC from "../images/SUPER-PC.jpg";
import arrow from "../images/Arrow.png";

const SecondBox = ({ secondActive, thirdActive }) => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      activeProject: "activeProject",
      style: "project1",
      link: "https://crazy-kitaets.github.io/ToDo-List/",
      img: todo,
      name: "Список дел",
      text: "Это мой первый нормальный проект который изначально писался на Jquery как дипломный проект для Skill-box, но когда я узнал что эта библиотека устарела то решил перейти на более популярный React",
    },
    {
      id: 2,
      style: "project2",
      link: "https://crazy-kitaets.github.io/",
      img: superPC,
      name: "Сайт по сборке и покупке Пк",
      text: "Этим проектом я хотел проверить и укрепить свои знания, моей задачей было как можно реже прибегать к помощи интернета из-за чего на самые банальные вещи уходило много времени. Каждый шаг создания сайта давался мне с трудом, например селектор, оказалось, что нельзя кастомизировать стандартный селектор, поэтому я изучил SCSS и создал собственный. К концу проекта я стал лучше разбираться в хуках, пропсах, SCSS, деструктуризации, адаптивности, функциональных компонентах и DOOM дереве",
    },
    {
      id: 3,
      style: "project3",
      link: "https://crazy-kitaets.github.io/Tic-Tac-Toe/",
      img: tictak,
      name: "Крестики нолики",
      text: "Игру с самим собой в крестики нолики было реализовать не сложно, не считая функции выявления победителя, ее я скопировал, но разобравшись понял на сколько это было просто. После этого последовала реализация ИИ. На скорую руку создал функционал, который ставит нолик в рандомную пустую клетку, а если она занята, то в первую пустую по счету, а также функционал, препятствующий составлению 3 крестиков в ряд занимая соответствующую ячейку. Затем я нахожу скрипт непобедимого ИИ, в нем я разобрался не сразу но это было удивительно интересно. Этим проектом я прокачал понимание массивов, циклов, повысил общее понимание JS и научился с 0 создавать SVG анимации",
    },
  ]);

  const [counter, setCounter] = useState(-1);
  const [counter2, setCounter2] = useState(0);

  function timeOut() {
    const next = document.getElementsByClassName("nextBtn")[0];
    const prev = document.getElementsByClassName("prevBtn")[0];
    prev.disabled = true;
    next.disabled = true;
    setTimeout(() => {
      prev.disabled = false;
      next.disabled = false;
    }, 1000);
  }

  useEffect(() => {
    if (counter2 >= 2) {
      return;
    } else {
      const next = document.getElementsByClassName("nextBtn")[0];
      next.addEventListener("click", () => {
        setCounter(counter + 1);
        setCounter2(counter2 + 1);
      });
    }
  }, [counter, counter2]);

  function next() {
    const active = document.getElementsByClassName("projectWrapper")[counter];
    active.style.animationName = "slideOut";
    const next = document.getElementsByClassName("projectWrapper")[counter2];
    next.style.animationName = "slideIn";
    timeOut();
  }

  function prev() {
    if (counter <= -1) {
      return;
    } else {
      const active = document.getElementsByClassName("projectWrapper")[counter];
      active.style.animationName = "slideIn2";
      const next = document.getElementsByClassName("projectWrapper")[counter2];
      next.style.animationName = "slideOut2";
      setCounter(counter - 1);
      setCounter2(counter2 - 1);
      timeOut();
    }
  }

  return (
    <div
      className={
        thirdActive
          ? "secondBox up"
          : secondActive
          ? "secondBox active"
          : "secondBox down"
      }
    >
      {projects.map((projects) => (
        <Projects
          key={projects.id}
          activeProject={projects.activeProject}
          img={projects.img}
          name={projects.name}
          text={projects.text}
          style={projects.style}
          link={projects.link}
        />
      ))}

      <button className="prevBtn" onClick={prev}>
        <img src={arrow} className="arrow" id="leftArrow" />
      </button>
      <button className="nextBtn" onClick={next}>
        <img src={arrow} className="arrow" />
      </button>
    </div>
  );
};

export default SecondBox;
