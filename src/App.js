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

function App() {
    const [gameStarted, setGameStarted] = useState(false);
    const [configShow, setConfigShow] = useState(false);
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

    const handleAnimation = () => {
        if(gameStarted){
            onAnimation(true)
        }
    };

    const handleBackground = () => {
        /*Se botao selecionado, mostrar background animado*/
        if (backgroundOn) {
            setBackground(false);
          } else {
            setBackground(true);
          }
    };

    const renderBackground = () => {
        if(backgroundOn) {
            return(
                <Background 
                    height={WINDOWS_HEIGHT}
                    weight={WINDOWS_WEIGHT}
                /> 
            )
        }
    };

    return (
        <div>
            <Title 
                    gameStarted={gameStarted}
                    onGameStart={handleGameStart}
                    animationEnd={animationEnd}
                    onAnimation={handleAnimation}
                />
                <Footer 
                    gameStarted={gameStarted}
                    onBackground={handleBackground}
                    configShow={configShow}
                    onConfig={handleCondif}
                />
                {renderBackground()}
        </div>
    )
}
export default App;