import { wordsList } from '../constants/words';

function getListWords(length) {
    const indexList = [];

    for (let i = 0; i < length; i++) {
        const index = Math.round(Math.random() * wordsList.length);

        if (!indexList.includes(index)) {
            indexList.push(index);
        }
    }

    const selectedWords = indexList.map((index) => wordsList[index]);

    return selectedWords;
}

export default getListWords;
