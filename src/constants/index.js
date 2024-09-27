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

export const WINDOWS_HEIGHT = window.innerHeight; //  Valor da altura da janela
export const WINDOWS_WEIGHT = window.innerWidth; //  Valor do comprimento da janela
export const PATHOLDER_LETTERS_PATH = '/assets/letters/'; //  Path para a pasta "letters"

export const LEVELS_CONFIG = [
    { value: '', size: 0, words: 0, time: 0 }, // default
    { value: '1', size: 10, words: 5, time: 120 }, // easy
    { value: '2', size: 20, words: 10, time: 90 }, // normal
    { value: '3', size: 30, words: 15, time: 60 }, // hard
];

export const LEVELS = [
    {
        value: LEVELS_CONFIG[1].value,
        text: 'Easy (words:' + LEVELS_CONFIG[1].words + ')',
    },
    {
        value: LEVELS_CONFIG[2].value,
        text: 'Normal (words:' + LEVELS_CONFIG[2].words + ')',
    },
    {
        value: LEVELS_CONFIG[3].value,
        text: 'Hard (words:' + LEVELS_CONFIG[3].words + ')',
    },
];

export const WORDS_DIR = ''; // TODO: link to words dir
