import React from "react";
import "./ThirdBox.css";
import { useState } from "react";
import Man from "../images/man.gif";
import meme from "../images/meme.jpg";
import noodles from "../images/noodles.png";

const ThirdBox = ({ thirdActive, secondActive }) => {
  const [text, setText] = useState();
  const [image, setImage] = useState();

  const btnData = [
    {
      id: "1",
      name: "Расскажи о себе",
      text: "опущу все эти слова которые вы уже устали слышать по типу 'целеустремленный, общительный, пунктуальный' и т.д. Я просто хороший и веселый 20 летний парень без вредных привычек который считает что программирование это его стезя, ищущий хорошую работу с классным коллективом",
    },
    {
      id: "2",
      name: "Почему выбрать именно тебя?",
      text: "Потому что вам нужен адекватный т добросовестный сотрудник",
    },
    {
      id: "3",
      name: "Почему ты выбрал программирование?",
      text: "У меня всегда была тяга к компьютерам и после окончания колледжа стоя на перепутье дорог я решил попробовать себя в программировании. Оказалось что учиться может быть интересно и именно изучения языка программирования мне приносило большое удовольствие я решил двигаться в этом направлении",
    },
    {
      id: "4",
      name: "Мы вам перезвоним",
      image: meme,
    },
  ];

  return (
    <div
      className={
        secondActive
          ? "thirdBox"
          : thirdActive
          ? "thirdBox active"
          : "thirdBoxDown"
      }
    >
      <div className="background-wrapper"></div>
      <div className="mainWindow">
        <img src={Man} alt="" className="character" />
        <div className="askme">
          {btnData.map((btnData) => (
            <button
              className="askBtn"
              key={btnData.id}
              onClick={() => {
                setText(btnData.text);
                setImage(btnData.image);
              }}
            >
              {btnData.name}
            </button>
          ))}
        </div>
      </div>
      <div className="dialogsWindow">
        <span className="myName">Алим</span>
        <span className="text">{text}</span>
        <img src={image} className="meme" />
      </div>
    </div>
  );
};

export default ThirdBox;
