import React from "react"
import "./board.css"

import Square from "../square/square.components"

function Board({ boardSize, onSelect }) {
    const generateRow = (index, max) => {
        let rows = [];

        for (index; index < max; index++) {
            rows.push(
                <Square
                    key={index}
                    onSelect={onSelect}
                />
            );
        };

        return rows;
    };

    const generateBoard = (columns, rows) => {
        let board = [];

        for(let i=0; i< columns * rows; i++){
            if(i%columns === 0){
                board.push(
                    <div className="row" key={i}>
                        {generateRow(i, i + columns)}
                    </div>
                )
            }
        };

        return board;
    }

    return(
        <section id="board" className="">
            {generateBoard(boardSize,boardSize)}
        </section>
    )
};

export default Board;