"use client";
import { useEffect, useState, useRef } from "react";

const Page = () => {
  const [timer, setTimer] = useState(6000);
  const countRef = useRef(null);
  // const addTime = () => {
  //   setTimer((prev) => prev + 1);
  // };
  // useEffect(() => {
  //   const intervalTimer = setInterval(addTime, 1000);
  //   return () => clearInterval(intervalTimer);
  // }, []);

  // const min = Math.floor(timer / 60);
  // const sec = timer % 60;

  // const formattedTime = (time) => {
  //   if (time <= 9) return `0${time}`;
  //   return time;
  // };
  // const addFifteen = () => {
  //   setTimer((prev) => prev + 15);
  // };
  // const minusFifteen = () => {
  //   setTimer((prev) => (prev > 15 ? prev - 15 : 0));
  // };
  const minusTime = () => {
    setTimer((prev) => (prev > 0 ? prev - 1 : 0));
  };

  useEffect(() => {
    const intervalTimer = setInterval(minusTime, 1000);
    return () => clearInterval(intervalTimer);
  }, []);

  const min = Math.floor(timer / 60);
  const sec = timer % 60;
  const hour = Math.floor(min / 60);

  const formattedTime = (time) => {
    if (time >= 60) {
      return time - hour * 60;
    }
    if (time <= 9) return `0${time}`;
    return time;
  };

  const handlePause = () => {
    clearInterval(countRef.current);
  };
  return (
    <div className="main-wrapper">
      <div className="main-timer">
        {formattedTime(hour)}:{formattedTime(min)}:{formattedTime(sec)}
      </div>
      <div>
        <button className="pause" onClick={handlePause}>
          Pause
        </button>
      </div>
    </div>
  );
};
export default Page;
