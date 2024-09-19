import { useEffect, useState } from 'react';
import { Board } from '../';
import {
    generateBoard,
    generateBoardWithWords,
    getWord,
    highlightCells,
} from '../../helpers';
import './game-panel.css';

function GamePanel({
    boardConfig,
    wordsList,
    gameStarted,
    onGameStart,
    points,
    onUpdatePoints,
    timer,
}) {
    const [board, setBoard] = useState([]);
    const [selectedCells, setSelectedCells] = useState([]);
    const [foundWords, setFoundWords] = useState([]);
    // TODO: array of color for highlight words (set when game start)

    const handleClickCell = (row, col) => {
        if (gameStarted) {
            // TODO: temp highlight cell (div layer and move on mouse)

            setSelectedCells((previouseState) => [
                ...previouseState,
                { row, col },
            ]);
        }
    };

    const checkWord = () => {
        const [cell1, cell2] = selectedCells;
        const selectedWord = getWord(cell1, cell2, board);

        wordsList.forEach((word) => {
            word = word.toUpperCase();

            if (
                word === selectedWord ||
                word === selectedWord.split('').reverse().join('')
            ) {
                setFoundWords((previouseState) => [...previouseState, word]);
                onUpdatePoints(
                    (previouseState) => previouseState + word.length * 10,
                ); // TODO: see this part (handle from App.js)
                setBoard(highlightCells(cell1, cell2, board)); // TODO: improve highlight system (not background color → layer)
            }
        });

        setSelectedCells([]);
    };

    /* useEffect(() => {
        // TODO: see this useEffect
    }, [gameStarted]) */

    // TODO: see this useEffect
    useEffect(() => {
        if (wordsList.length === 0) {
            setBoard(generateBoard(boardConfig.size));
        } else {
            setBoard(generateBoardWithWords(boardConfig.size, wordsList));
        }
    }, [boardConfig, wordsList]);

    useEffect(() => {
        if (selectedCells.length === 2) {
            checkWord();
        }
    }, [selectedCells]);

    // TODO: see this useEffect
    useEffect(() => {
        if (gameStarted && foundWords.length === wordsList.length) {
            onGameStart(false);
        }
    }, [foundWords]);

    if (board.length === 0) {
        return null;
    }

    return (
        <section className="gamePanel">
            {gameStarted ? (
                <>
                    <p>Timer: {timer}</p>
                    {/* TODO: show better timer */}
                    <p>Points: {points}</p>
                </>
            ) : null}
            <Board
                board={board}
                boardSize={boardConfig.size}
                onSelect={handleClickCell}
            />
            {gameStarted || wordsList.length > 0 ? (
                <ul>
                    {wordsList.map((word, index) => (
                        <li
                            key={index}
                            className={
                                foundWords.includes(word.toUpperCase())
                                    ? 'done'
                                    : ''
                            }>
                            {word}
                        </li>
                    ))}
                </ul>
            ) : null}
        </section>
    );
}

export default GamePanel;
