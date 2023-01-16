import "./App.css";
import React, { useEffect, useState } from "react";
import FirstBox from "./components/First Box/FirstBox";
import SecondBox from "./components/Second Box/SecondBox";
import ThirdBox from "./components/Third Box/ThirdBox";

function App() {
  const [firstActive, setFirstActive] = useState(true);
  const [secondActive, setSecondActive] = useState(false);
  const [thirdActive, setThirdActive] = useState(false);

  const [mainCounter, setMainCounter] = useState(1);

  function handleWheel(event) {
    setTimeout(() => {
      if (event.deltaY > 0) {
        if (mainCounter < 3) setMainCounter(mainCounter + 1);
      } else {
        if (mainCounter > 1) setMainCounter(mainCounter - 1);
      }
    }, 50);
  }

  document.addEventListener("touchstart", handleTouchStart, false);
  document.addEventListener("touchmove", handleTouchMove, false);

  let y = null;

  function handleTouchStart(event) {
    y = event.touches[0].clientY;
  }

  function handleTouchMove(event) {
    if (!y) return false;
    let y2 = event.touches[0].clientY;
    let minusY = y;
    minusY -= 50;
    let plusY = y;
    plusY += 50;
    if (minusY > y2) {
      if (mainCounter < 3) setMainCounter(mainCounter + 1);
      y = null;
    }
    if (plusY < y2) {
      if (mainCounter > 1) setMainCounter(mainCounter - 1);
      y = null;
    }
  }

  useEffect(() => {
    if (mainCounter === 1) {
      setFirstActive(true);
      setSecondActive(false);
    }
    if (mainCounter === 2) {
      setFirstActive(false);
      setSecondActive(true);
      setThirdActive(false);
    }
    if (mainCounter === 3) {
      setSecondActive(false);
      setThirdActive(true);
    }
  }, [mainCounter]);

  return (
    <div className="App" onWheel={handleWheel}>
      <FirstBox firstActive={firstActive} secondActive={secondActive} />
      <SecondBox secondActive={secondActive} thirdActive={thirdActive} />
      <ThirdBox thirdActive={thirdActive} secondActive={secondActive} />
    </div>
  );
}

export default App;
