import React from 'react';
import './background.css';

import { LETTERS, PATHOLDER_LETTERS_PATH } from '../../constants';

function Background({ display, height, weight }) {
    const displayClass = display ? '' : 'hide';

    const gackgroundRow = (index, max) => {
        const rows = [];

        for (index; index < max; index++) {
            const letter = LETTERS[Math.floor(Math.random() * LETTERS.length)];

            rows.push(
                <img
                    key={index}
                    src={`${PATHOLDER_LETTERS_PATH}${letter}.png`}
                    alt={`${letter}`}
                />,
            );
        }

        return rows;
    };

    const generateBackground = (rows) => {
        const background = [];

        for (let i = 0; i < rows * 1.5; i++) {
            background.push(
                <div className="row" key={i}>
                    <div>{gackgroundRow(i, (weight * 2) / 25)}</div>
                </div>,
            );
        }

        return background;
    };

    return (
        <section id="background" className={displayClass}>
            {generateBackground(height / 100)}
        </section>
    );
}

export default Background;
