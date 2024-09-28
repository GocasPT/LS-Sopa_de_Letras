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
    'rgba(255, 0, 0, 0.5)', // Red
    'rgba(0, 255, 0, 0.5)', // Green
    'rgba(0, 0, 255, 0.5)', // Blue
    'rgba(255, 255, 0, 0.5)', // Yellow
    'rgba(0, 255, 255, 0.5)', // Cyan
    'rgba(255, 0, 255, 0.5)', // Magenta
    'rgba(128, 0, 0, 0.5)', // Maroon
    'rgba(0, 128, 0, 0.5)', // Dark Green
    'rgba(0, 0, 128, 0.5)', // Navy Blue
    'rgba(255, 165, 0, 0.5)', // Orange
    'rgba(128, 128, 0, 0.5)', // Olive
    'rgba(128, 0, 128, 0.5)', // Purple
    'rgba(0, 128, 128, 0.5)', // Teal
    'rgba(192, 192, 192, 0.5)', // Silver
    'rgba(128, 128, 128, 0.5)', // Gray
    'rgba(255, 192, 203, 0.5)', // Pink
    'rgba(75, 0, 130, 0.5)', // Indigo
    'rgba(240, 230, 140, 0.5)', // Khaki
    'rgba(255, 69, 0, 0.5)', // Orange Red
    'rgba(173, 216, 230, 0.5)', // Light Blue
];

export const WINDOWS_HEIGHT = window.innerHeight; //  Valor da altura da janela
export const WINDOWS_WEIGHT = window.innerWidth; //  Valor do comprimento da janela
export const PATHOLDER_LETTERS_PATH = '../assets/letters/'; //  Path para a pasta "letters"

export const LETTERS = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
];
