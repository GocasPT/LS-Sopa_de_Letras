function GameOverModel({ isOpen, points, timer }) {
    if (!isOpen) return null;

    return (
        <div>
            <header>GAME OVER</header>
            <div>
                <p>Points: {points}</p>
                <p>Time: {timer}s</p>
            </div>
        </div>
    );
}

export default GameOverModel;
