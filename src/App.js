import React, { useState } from 'react';
import "./assets/styles/App.css"

import {
    WINDOWS_HEIGHT,
    WINDOWS_WEIGHT,
} from "./constants"

import {
    Footer,
    Title,
    Background,
} from "./components"

let boardSize;
let modeGame;

function App() {
    const [gameStarted, setGameStarted] = useState(false);
    const [selectedLevel, setSelectionLevl] = useState("0");
    const [selectedMode, setSelectionMode] = useState("0");
    const [configShow, setConfigShow] = useState(false);

    //const [gameOver, setGamerOver] = useState(false)
    //const [totalPoints, setTotalPoints] = useState(0);

    const [animationEnd, onAnimation] = useState(false);
    const [backgroundOn, setBackground] = useState(true);
    
    const handleGameStart = () => {
        if (gameStarted) {
            console.log("Termina Jogo");
            setGameStarted(false);
            onAnimation(false)
        } else {
            console.log("Inicia Jogo");
            setGameStarted(true);
        }
    };

    const handleCondif = () => {
        if (configShow) {
          console.log("Config fecha");
          setConfigShow(false);
        } else {
          console.log("Config aberta");
          setConfigShow(true);
        }
    };

    const handleLevelChange = (event) => {
        const { value } = event.currentTarget;
        setSelectionLevl(value)

        switch (value) {
            // Level: Beginner
            case '1':
                boardSize = 8;
              break;
            // Level: Intermediate
            case '2':
                boardSize = 12;
              break;
            // Level: Advanced
            case '3':
                boardSize = 15;
              break;
            default:
                boardSize = 0;
              break;
          }
    }

    const handleModeChange = (event) => {
        const { value } = event.currentTarget;
        setSelectionMode(value)

        switch (value) {
            // Level: Beginner
            case '1':
                modeGame = 8;
              break;
            // Level: Intermediate
            case '2':
                modeGame = 12;
              break;
            // Level: Advanced
            case '3':
                modeGame = 15;
              break;
            default:
                modeGame = 0;
              break;
          }
    }

    const handleAnimation = () => {
        if(gameStarted){
            onAnimation(true)
        }
    };

    const handleBackground = () => {
        if (backgroundOn) {
            setBackground(false);
          } else {
            setBackground(true);
          }
    };

    return (
        <div>
            <Title 
                gameStarted={gameStarted}
                onGameStart={handleGameStart}
                animationEnd={animationEnd}
                onAnimation={handleAnimation}
                selectedLevel={selectedLevel}
                selectedMode={selectedMode}
                boardSize={boardSize}
            />
            <Footer 
                gameStarted={gameStarted}
                onLevelChange={handleLevelChange}
                onModeChange={handleModeChange}
                onBackground={handleBackground}
                configShow={configShow}
                onConfig={handleCondif}
            />
            <Background
                display={backgroundOn}
                height={WINDOWS_HEIGHT}
                weight={WINDOWS_WEIGHT}
            />
        </div>
    )
}
export default App;