import "./App.css";
import { bankOne } from "./drum.data";
import { useState } from "react";

function App() {
  const [descript, setDescript] = useState("Heater-1");

  const handleKeyPress = (e) => {
    bankOne.forEach((items) => {
      if (e.keyCode === items.keyCode) {
        playSound(items.id, items.keyTrigger);
      }
    });
  };

  const activateKeys = () => {
    document.addEventListener("keydown", handleKeyPress);
  };

  activateKeys();

  const playSound = (descr, key) => {
    const sound = document.getElementById(key);
    sound.currentTime = 0;
    sound.play();
    setDescript(descr);
  };

  return (
    <div className="container">
      <h1 className="title">Drum Machine</h1>
      <div className="drum-machine" id="drum-machine">
        <div className="drum-pad-chunk" id="drum-pad-chunk">
          {bankOne.map((drum) => {
            return (
              <button
                onClick={() => playSound(drum.id, drum.keyTrigger)}
                id={drum.id}
                key={drum.keyCode}
                className="btn drum-pad"
              >
                {drum.keyTrigger}
                <audio
                  className="clip"
                  id={drum.keyTrigger}
                  src={drum.url}
                ></audio>
              </button>
            );
          })}
        </div>
        <div className="settings">
          <h2 className="display" id="display">
            {descript}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default App;
