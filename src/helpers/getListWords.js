import { wordsList } from '../constants/words';

function getListWords(length) {
    const indexList = [];

    for (let i = 0; i < length; i++) {
        indexList.push(Math.round(Math.random() * wordsList.length));
    }

    const selectedWords = indexList.map((index) => wordsList[index]);

    return selectedWords;
}

export default getListWords;
