// Easy. Plant seeds to flowerbed. You can plant a flower (1) if adjacent slots are empty (0).

console.log("answer: " + canPlaceFlowers([1,0,0,0,1], 2));

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let seedsPlaced: number = 0;

    // edge case for short flowerbed to ease condition checking in the loop
    if (n == 1 && flowerbed.length === 1 && flowerbed[0] == 0) {
        return true;
    }

    for (let i = 0; i < flowerbed.length; ++i)
    {
        // We're only interested in planting seeds to where zeroes are.
        if (flowerbed[i] == 1) {
            continue;
        }

        if (i == 0) {
            if (flowerbed[0] == 0 && flowerbed[1] == 0) {
                ++seedsPlaced;
                flowerbed[0] = 1;
            }
        }
        else if (i == flowerbed.length - 1) {
            if (flowerbed[flowerbed.length - 1] == 0 && flowerbed[flowerbed.length - 2] == 0) {
                ++seedsPlaced;
                flowerbed[flowerbed.length - 1] = 1;
            }
        }

        if (flowerbed[i] == 0 && flowerbed[i - 1] == 0 && flowerbed[i + 1] == 0) {
            ++seedsPlaced;
            flowerbed[i] = 1;
        }

        if (seedsPlaced >= n) {
            return true;
        }
    }

    console.log("seeds placed: " + seedsPlaced);
    return seedsPlaced >= n;
};
