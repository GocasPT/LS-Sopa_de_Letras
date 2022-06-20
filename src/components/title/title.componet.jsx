import React from "react";
import "./title.css"

import {
    GamePanel,
} from "../"

function Title({ gameStarted, onGameStart, animationEnd, onAnimation, selectedLevel, selectedMode, boardSize}) {
    const gameClass =
        gameStarted
        ? "fadeOut"
        : "w3-animate-opacity"

    const handleEnter = (event) => {
        if(event.key === "Enter"){
            onGameStart()
        }
    }

    if(!animationEnd){
        return(
            <section id="title" onAnimationEnd={onAnimation} className={`title ${gameClass}`}>
                <img src="/assets/SopaDeLetras-Logo.png" alt="" className="logo" />
                <input type="text" className="w3-input w3-text-white w3-border w3-border-amber w3-round-xxlarge" placeholder="Nickname" onKeyDown={handleEnter}/>
                <button className="w3-button w3-amber w3-hover-yellow w3-round-xxlarge"
                    type="button" 
                    disabled={(selectedLevel === "0" || selectedMode === "0")}
                    onClick={onGameStart}  
                >
                    Jogar
                </button>
            </section>
        );
    }

    return(
        <GamePanel
            gameStarted={gameStarted}
            onGameStart={onGameStart}
            boardSize={boardSize}
        />
    )
}

export default Title;