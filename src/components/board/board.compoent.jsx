import React from "react"
import "./board.css"

import Square from "../square/square.components"

function Board() {
    const generateRow = (index, max) => {
        let rows = [];

        for (index; index < max; index++) {
            rows.push(
                <Square
                    key={index}
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
        <section id="board" className="w3-half vertical-middle">
            {generateBoard(8,8)}
        </section>
    )
};

export default Board;