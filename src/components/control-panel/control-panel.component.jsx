import { useState } from 'react';
import './control-panel.css';

function ControlPanel({
    levels,
    gameStarted,
    onGameStart,
    selectedLevel,
    onSelectLevel,
    customWords,
    onCustomWords,
}) {
    const [showCustomWords, setShowCustomWords] = useState(false);
    const [wordInput, setWordInput] = useState('');

    const handlerAddWord = (event) => {
        event.preventDefault();
        if (wordInput.trim()) {
            onCustomWords(wordInput.trim());
            setWordInput('');
        }
    };

    return (
        <section>
            <form>
                <fieldset disabled={gameStarted}>
                    <label htmlFor="selectLevel">Level: </label>
                    <select
                        id="selectLevel"
                        onChange={(event) => onSelectLevel(event.target.value)}>
                        <option value="" defaultChecked>
                            -- Select level --
                        </option>
                        {levels.map((level, index) => (
                            <option key={index} value={level.value}>
                                {level.text}
                            </option>
                        ))}
                    </select>
                </fieldset>
                <button onClick={setShowCustomWords(!showCustomWords)}>
                    {showCustomWords ? 'Hide' : 'Show'}
                </button>
                {showCustomWords && (
                    <fieldset disabled={gameStarted}>
                        <label htmlFor="customWord">Add your word: </label>
                        <input
                            type="text"
                            id="customWord"
                            value={wordInput}
                            onChange={(event) =>
                                setWordInput(event.target.value)
                            }
                        />
                        <button
                            onClick={handlerAddWord}
                            disabled={wordInput.length === 0}>
                            Submit
                        </button>
                        {customWords.map((word, index) => (
                            <p key={index}>{word}</p>
                        ))}
                    </fieldset>
                )}
                <button
                    disabled={selectedLevel === levels[0].value || gameStarted}
                    onClick={onGameStart}>
                    {gameStarted ? 'In game...' : 'Start'}
                </button>
            </form>
        </section>
    );
}

export default ControlPanel;
