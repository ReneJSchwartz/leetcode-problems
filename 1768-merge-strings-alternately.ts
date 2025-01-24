function mergeAlternately(word1: string, word2: string): string {
    let joined: string = "";
    let origLengths: number = word1.length + word2.length;
    for (let i = 0; i < origLengths; ++i)
    {
        if (i % 2 == 0)
        {
            if (word1.length > 0)
            {
                joined += word1.split("").shift();
                word1 = word1.substring(1);
            }
            else
            {
                joined += word2.split("").shift();
                word2 = word2.substring(1);
            }
        }
        else
        {
            if (word2.length > 0)
            {
                joined += word2.split("").shift();
                word2 = word2.substring(1);
            }
            else
            {
                joined += word1.split("").shift();
                word1 = word1.substring(1);
            }
        }
    }
    return joined;
};
