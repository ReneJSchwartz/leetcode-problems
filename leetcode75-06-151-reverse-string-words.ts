// "Medium" (easy and fast). Reverse words in a string and return them separated by " ".

function reverseWords(s: string): string {
    return s.match(/\w+/g)!.reverse().join(" ");
};
