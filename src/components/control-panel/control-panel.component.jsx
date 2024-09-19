import './control-panel.css';

function ControlPanel({
    levels,
    gameStarted,
    onGameStart,
    selectedLevel,
    onSelectLevel,
}) {
    // TODO: array to handle custom words

    return (
        <section>
            <form>
                <fieldset disabled={gameStarted}>
                    <label htmlFor="selectLevel">Level: </label>
                    <select
                        id="selectLevel"
                        onChange={(event) => onSelectLevel(event.target.value)}>
                        {levels.map((level, index) => (
                            <option key={index} value={level.value}>
                                {level.text}
                            </option>
                        ))}
                    </select>
                </fieldset>
                {/* TODO: add button to show/hide this */}
                <fieldset disabled={gameStarted}>
                    <label htmlFor="customWord">Add your word: </label>
                    <input type="text" id="customWord" />
                    <button>Submit</button>
                    {/* TODO: Disable button when the textbox is empty */}
                </fieldset>
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
