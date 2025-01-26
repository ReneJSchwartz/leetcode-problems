// Return words you can type on a keyboard row (e.g. qwertyuiop).
console.log("answer: " + findWords(["Hello", "Alaska", "Dad", "Peace"]));

function findWords(words: string[]): string[] {
    let retVal: string[] = [];
    for (let i = 0; i < words.length; ++i) {
        let wordLen = words[i].length;
        let word = words[i];

        if ((word.match(/[QWERTYUIOPqwertyuiop]/g) || []).length === wordLen || (word.match(/[ASDFGHJKLasdfghjkl]/g) || []).length === wordLen || (word.match(/[ZXCVBNMzxcvbnm]/g) || []).length === wordLen) {
            retVal.push(word);
            continue;
        }
    }
    return retVal;
};
