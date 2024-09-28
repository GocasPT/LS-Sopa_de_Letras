import { useState } from 'react';
import { GAME_STATES, LEVELS } from '../../constants';
import './control-panel.css';

function ControlPanel({
    gameState,
    onGameState,
    selectedLevel,
    onSelectLevel,
    customWords,
    onCustomWords,
}) {
    const [showCustomWords, setShowCustomWords] = useState(false);
    const [wordInput, setWordInput] = useState('');

    const handleLevelChange = (event) => {
        onSelectLevel(event.target.value);
    };

    const handleAddCustomWord = (word, event) => {
        event.preventDefault();
        if (word.trim()) {
            onCustomWords(word);
            setWordInput('');
        }
    };

    const handleToggleCustomWords = (event) => {
        event.preventDefault();
        setShowCustomWords((prevState) => !prevState);
    };

    const handleStartGame = (event) => {
        event.preventDefault();
        onGameState();
    };

    return (
        <section id="panel-control">
            <form className="form">
                <fieldset className="form-group">
                    <label htmlFor="btLevel">Nível:</label>
                    <select
                        id="btLevel"
                        value={selectedLevel}
                        disabled={gameState === GAME_STATES.InGame}
                        onChange={handleLevelChange}>
                        <option value={LEVELS.Default.value}>
                            {LEVELS.Default.text}
                        </option>
                        <option value={LEVELS.Easy.value}>
                            {LEVELS.Easy.text}
                        </option>
                        <option value={LEVELS.Medium.value}>
                            {LEVELS.Medium.text}
                        </option>
                        <option value={LEVELS.Hard.value}>
                            {LEVELS.Hard.text}
                        </option>
                    </select>
                </fieldset>
                <button
                    disabled={gameState === GAME_STATES.InGame}
                    onClick={handleToggleCustomWords}>
                    {showCustomWords ? '˄' : '˅'} Custom words
                    {/* TODO: improve UI */}
                </button>
                {showCustomWords && (
                    <fieldset className="form-group">
                        <label htmlFor="btCustomWords">Custom words:</label>
                        <input
                            id="btCustomWords"
                            type="text"
                            placeholder="Add your word"
                            value={wordInput}
                            disabled={gameState === GAME_STATES.InGame}
                            onChange={(event) =>
                                setWordInput(event.target.value)
                            }
                        />
                        <button
                            id="btAddCustomWord"
                            disabled={gameState === GAME_STATES.InGame}
                            onClick={(event) =>
                                handleAddCustomWord(wordInput, event)
                            }>
                            Add
                        </button>
                        <ul>
                            {customWords.map((word, index) => (
                                <li key={index}>{word}</li>
                            ))}
                        </ul>
                    </fieldset>
                )}
                <button
                    id="btPlay"
                    onClick={handleStartGame}
                    disabled={
                        gameState === GAME_STATES.InGame ||
                        selectedLevel === LEVELS.Default.value
                    }>
                    {gameState === GAME_STATES.InGame ? 'In game...' : 'Start'}
                    {/* TODO: improve UI */}
                </button>
            </form>
        </section>
    );
}

export default ControlPanel;
