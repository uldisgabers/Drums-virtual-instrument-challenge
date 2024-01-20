import "./App.css";
import stressedOut from "./assets/twent-one-pilots-stressed-out-drumless.mp3";
// import tempo from "./assets/tempo.gif"
import kick from "./assets/kick-floppy.wav";
import snare1 from "./assets/snare-acoustic01.wav";
import snare2 from "./assets/snare-acoustic02.wav";
import hiHat1 from "./assets/hihat-acoustic01.wav";
import hiHat2 from "./assets/hihat-acoustic02.wav";
import openHat from "./assets/openhat-acoustic01.wav";
import crash1 from "./assets/crash-acoustic.wav";
import ride1 from "./assets/ride-acoustic02.wav";
import tom1 from "./assets/tom-acoustic01.wav";
import tom2 from "./assets/tom-acoustic02.wav";
import oky from "./assets/oky-lets-go.mp3";
import crowd from "./assets/crowd-cheer.mp3"
import { useState } from "react";

function App() {
  const [lightShow, setLightShow] = useState(false);

  const playStressedOut = () => {
    setLightShow(true);
    const audio = new Audio(stressedOut);
    audio.volume = 0.6;
    audio.play();
  };

  const playKick = () => {
    new Audio(kick).play();
  };

  const playSnare1 = () => {
    new Audio(snare1).play();
  };

  const playSnare2 = () => {
    new Audio(snare2).play();
  };

  const playHiHat1 = () => {
    new Audio(hiHat1).play();
  };

  const playHiHat2 = () => {
    new Audio(hiHat2).play();
  };

  const playCrash1 = () => {
    new Audio(crash1).play();
  };

  const playRide1 = () => {
    new Audio(ride1).play();
  };

  const playOpenHat = () => {
    new Audio(openHat).play();
  };

  const playTom1 = () => {
    new Audio(tom1).play();
  };

  const playTom2 = () => {
    new Audio(tom2).play();
  };

  const playOkyLetsGo = () => {
    new Audio(oky).play();
  };

  const playCrowd = () => {
    new Audio(crowd).play();
  };

  const [isLightsActive, setIsLightsActive] = useState(false);

  const keyDown = (event: { key: unknown }) => {
    if (event.key === "v") {
      playKick();
    } else if (event.key === "h") {
      playSnare1();
    } else if (event.key === "j") {
      playSnare2();
    } else if (event.key === "d") {
      playHiHat1();
    } else if (event.key === "f") {
      playHiHat2();
    } else if (event.key === "t") {
      playCrash1();
    } else if (event.key === "r") {
      playRide1();
    } else if (event.key === "s") {
      playOpenHat();
    } else if (event.key === "u") {
      playTom1();
    } else if (event.key === "y") {
      playTom2();
    }

    // LIGHTS

    setIsLightsActive((current) => !current);
  };

  //Set the lights off

  const turnOffLights = () => {
    setIsLightsActive(false);
  };

  return (
    <>
      <div className="background">
        <div
          className="photo"
          tabIndex={0}
          onKeyDown={keyDown}
          onKeyUp={turnOffLights}
        >
          <div
            className={`${isLightsActive ? "lights" : ""} ${
              lightShow ? "lightshow" : ""
            }`}
          >
            <button className="music-play" onClick={playStressedOut}>
              ▶
            </button>
          </div>

          <div>
            <div onClick={playSnare1} className="snare"></div>
            <div onClick={playKick} className="kick"></div>
            <div onClick={playHiHat1} className="hihat"></div>
            <div onClick={playCrash1} className="crash"></div>
            <div onClick={playRide1} className="ride"></div>
            <div onClick={playTom2} className="tom-1"></div>
            <div onClick={playTom1} className="tom-2"></div>
            <div onClick={playOpenHat} className="open-hat"></div>
            <div onClick={playOkyLetsGo} className="oky-lets-go"></div>
            <div onClick={playCrowd} className="crowd"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
