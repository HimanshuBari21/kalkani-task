const NearestTenth = (x) => {
    if ((x % 10) == 0) {
        return x
    }
    else {
        var newX = x % 10;
        if (newX <= 5) {
            for (let i = 0; i < 5; i++) {
                x = x - 1;
                if (x % 10 == 0) {
                    return x
                }
            }
        } else {
            for (let i = 0; i < 5; i++) {
                x = x + 1;
                if (x % 10 == 0) {
                    return x
                }
            }
        }
    }
}


console.log("The Nearest Tenth is " + NearestTenth(556));
console.log("The Nearest Tenth is " + NearestTenth(553));
console.log("The Nearest Tenth is " + NearestTenth(550));