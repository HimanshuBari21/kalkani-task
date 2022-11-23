// task 4

// Incomplete

const DrawPattern = (N) => {

    const AlphaArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', "N", 'O', 'P', 'Q', 'R', 'S', 'T'];

    var Arr = []

    for (let i = 0; i < N; i++) {
        Arr.push(AlphaArray[i])
    }

    var otherArray = ""

    for (let i = 0; i < N; i++) {
        let tempStr = ""
        for (let j = 0; j < (N - i); j++) {
            tempStr = tempStr + " "
        }
        for (let j = ((N - 1) - i); j < (N - 1); j++) {
            tempStr = tempStr + Arr[j]
            // console.log(Arr[j]);
        }
        console.log(tempStr);
    }

    // for (let i = 1; i < otherArray.length; i++) {
    //     otherArray.split("")[i] = " ";
    // }
    // console.log(otherArray);


    // console.log(Arr);

    // var Arr = [];

    // for (let i = 0; i < N; i++) {
    //     Arr.push(" ")
    // }

    // for (let i = 0; i < N; i++) {

    //     Arr.unshift(AlphaArray[i])

    //     let outputString = ""

    //     for (let j = N; j >= 0; j--) {
    //         outputString = outputString + Arr[j]
    //     }

    //     console.log(outputString);

    // }

}

DrawPattern(5)