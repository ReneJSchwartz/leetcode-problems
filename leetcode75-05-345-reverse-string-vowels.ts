// Easy. Should return AceCreIm
console.log("answer: " + reverseVowels("IceCreAm"));

function reverseVowels(s: string): string {
    // seems like the whole word needs to be returned and not just the vowels.
    //return s.match(/[aeiouAEIOU]/g)?.reverse().join("") ?? "";

    let matches: string = s.match(/[aeiouAEIOU]/g)?.reverse().join("") ?? "";
    if (matches.length < 2) {
        console.log("early return");
        return s;
    }
    let reversed: string = "";
    let reversedIndex = 0;
    // Reverse vowels
    for (let i = 0; i < s.length; ++i) {
        if (s[i].match(/[aeiouAEIOU]/)) {
            console.log("reversing " + s[i]);
            reversed += matches[reversedIndex++];
        }
        else {
            // keep normal consonants
            reversed += s[i];
        }
    }
    return reversed; 
};
