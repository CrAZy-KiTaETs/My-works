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
      text: "Целеустремленный, ответственный, исплонительный и т.д. Наверняка вы уже устали это слышать поэтому скажу коротко, я просто хороший и веселый парень без вредных привычек который считает что программирование это его стезя. Я ищу компанию с дружным коллективом который поможет расскрыть мои сильные стороны. ",
    },
    {
      id: "2",
      name: "Почему ты выбрал программирование?",
      text: "У меня всегда была тяга к компьютерам и после окончания колледжа стоя на перепутье дорог я решил попробовать себя в программировании. Оказалось что учиться может быть интересно и именно изучения языка программирования мне приносило большое удовольствие, поэтому я решил двигаться в этом направлении",
    },
    {
      id: "3",
      name: "Как с тобой связаться",
      text: "Вы можете позвонить по номеру +77073284047 или написать на WhatsApp",
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
      <div className="dialogWindow">
        <div className="dialogBlock"></div>
        <span className="myName">Алим</span>
        <div id="textWrapper">
          <span className="text">{text}</span>
        </div>
        <img src={image} className="meme" />
      </div>
    </div>
  );
};

export default ThirdBox;
