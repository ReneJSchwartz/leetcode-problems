// "Easy" question (trivial). For kids array (e.g. [1, 2, 3, 4, 5]) that 
// tells how many candies each kid has and extraCandies (e.g. 3) return a 
// list that tracks if after getting the extra candies they'd have the most 
// candies (gte) so for example [true, false, false...].

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let retVal: boolean[] = [];
    let max: number = Math.max(...candies);
    candies.forEach((kid) => retVal.push(kid + extraCandies >= max));
    return retVal;
};
