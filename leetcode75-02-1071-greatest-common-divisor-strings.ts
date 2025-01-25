// For example for strings ABCABC and ABC the result should be ABC (since the strings consist of it repeated by some amount of times). 

// Assumption is that str1 len is ge than str2
function gcdOfStrings(str1: string, str2: string): string {
    let joined: string = "";
    let index: number = str2.length;
    for (let i = 0; index >= 0; ++i)
    {
        joined = str2.substring(0, index);
        if (str1.length % joined.length === 0 && str2.length % joined.length === 0)
        {
            if (str1 === (joined.repeat(str1.length / joined.length)) && str2 === (joined.repeat(str2.length / joined.length)))
            {
                break;
            }
        }
        --index;
    }
    return joined;
};
