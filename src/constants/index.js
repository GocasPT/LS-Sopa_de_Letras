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
]

export const TIMEOUTGAME = 10 //   seconds
export const WINDOWS_HEIGHT = window.innerHeight //  Valor da altura da janela
export const WINDOWS_WEIGHT = window.innerWidth //  Valor do comprimento da janela
export const PATHOLDER_LETTERS_PATH = '/assets/letters/' //  Path para a pasta "letters"

export const LEVELS = [
    { value: 'easy', text: 'Easy' },
    { value: 'normal', text: 'Normal' },
    { value: 'hard', text: 'Hard' },
]

export const LEVELS_CONFIG = [
    { value: '', size: 0, words: 0 }, // default
    { value: LEVELS[0].value, size: 15, words: 5 }, // easy
    { value: LEVELS[1].value, size: 25, words: 10 }, // normal
    { value: LEVELS[2].value, size: 50, words: 15 }, // hard
]

export const WORDS_FILE = '' //TODO: link to words file
