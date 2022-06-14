import React from "react";
import "./game-panel.css"
import { Board } from "../"

function GamePanel({ gameStarted, onGameStart }) {
    const gameClass =
        gameStarted
        ? "gameStarted"
        : "" 

    return(
        <section id="game-control" className="w3-rows">
            <div id="panel-control" className={`list ${gameClass}`}>
                <p>Game Panel</p>
                <button type="button" onClick={onGameStart}> Menu</button>
            </div>
            <Board />
        </section>
    );
}

export default GamePanel;