import { useEffect, useState } from "react";
import "./Triangle.css";

import triangleSfx from "./assets/triangle_sound_effect.mp3";

function Triangle() {
  const play = () => {
    new Audio(triangleSfx).play();
  };

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [divPosition, setDivPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: { clientX: number; clientY: number }) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    setDivPosition({
      x: cursorPosition.x + 25,
      y: cursorPosition.y - 1,
    });
  }, [cursorPosition]);

  return (
    <>
      <div className="wrapper">
        <div onMouseOver={play} className="line-1"></div>
        <div onMouseOver={play} className="line-2"></div>
        <div onMouseOver={play} className="line-3"></div>
      </div>

      <button onClick={play}>PLAy</button>

      <div className="beater"
        style={{
          position: "absolute",
          left: `${divPosition.x}px`,
          top: `${divPosition.y}px`,
          width: "50px",
          height: "250px",
          
        }}
      ></div>
    </>
  );
}

export default Triangle;
