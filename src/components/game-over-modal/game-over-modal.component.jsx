import './game-over-modal.css';

function GameOverModel({ isOpen, points, handleClose }) {
    const modalClass = `w3-modal ${isOpen ? 'show-modal' : ''}`;

    return (
        <div id="modal-gameOver" className={modalClass}>
            <div className="w3-modal-content w3-card-4 w3-animate-zoom estilos">
                <header>
                    <span
                        className="w3-button w3-display-topright closeModal"
                        data-modalid="gameOver"
                        onClick={handleClose}>
                        &times;
                    </span>
                    <div>Jogo Terminado</div>
                </header>
                <div className="info" id="messageGameOver">
                    <p>Pontuação: {points}</p>
                </div>
            </div>
        </div>
    );
}

export default GameOverModel;
