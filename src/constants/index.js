export const GAME_STATES = {
    Ready: 'ready',
    InGame: 'inGame',
    GameOver: 'gameOver',
};

export const LEVELS_CONFIG = {
    Default: { size: 0, words: 0, time: 0 },
    Easy: { size: 10, words: 5, time: 240 },
    Medium: { size: 15, words: 10, time: 120 },
    Hard: { size: 25, words: 15, time: 90 },
};

export const LEVELS = {
    Default: {
        value: '',
        text: '--- Select Level ---',
    },
    Easy: {
        value: 'Easy',
        text: 'Easy (words:' + LEVELS_CONFIG.Easy.words + ')',
    },
    Medium: {
        value: 'Medium',
        text: 'Medium (words:' + LEVELS_CONFIG.Medium.words + ')',
    },
    Hard: {
        value: 'Hard',
        text: 'Hard (words:' + LEVELS_CONFIG.Hard.words + ')',
    },
};

export const COLORS = [
    'red',
    'blue',
    'green',
    'yellow',
    'orange',
    'purple',
    'pink',
];

export const WINDOWS_HEIGHT = window.innerHeight; //  Valor da altura da janela
export const WINDOWS_WEIGHT = window.innerWidth; //  Valor do comprimento da janela
export const PATHOLDER_LETTERS_PATH = '../assets/letters/'; //  Path para a pasta "letters"
