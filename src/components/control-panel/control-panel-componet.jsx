import React from "react";

function ControlPanel() {
    return (
      <section id="panel-control">
        <div className="form-metadata">
          <dl className="list-item left gameStarted">
            <dt>Tempo de Jogo:</dt>
            <dd id="gameTime">0</dd>
          </dl>
          <dl className="list-item right gameStarted">
            <dt>Pontuação TOP:</dt>
            <dd id="pointsTop">0</dd>
          </dl>
          <dl className="list-item left gameStarted">
            <dt>Pontuação:</dt>
            <dd id="points">0</dd>
          </dl>
        </div>
      </section>
    );
  }
  
  export default ControlPanel;