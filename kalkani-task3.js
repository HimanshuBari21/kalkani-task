// Task 3

const DrawPattern = (N) => {

    if (N <= 0) {
        console.log("N Should greater than 0");
        return 0
    }

    var Arr = [];

    for (let i = 0; i < N; i++) {
        Arr.push(" ")
    }


    var a = 1

    for (let i = 1; i <= N; i++) {
        Arr.unshift(a)
        a = a + 2
        let outputString = ""
        for (let i = N - 1; i >= 0; i--) {
            outputString = outputString + Arr[i]
        }
        console.log(outputString);
    }

}

DrawPattern(5)