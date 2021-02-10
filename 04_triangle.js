const triangle = function(input) {

    let runningSum = 0;
    let activeIncrement = 1;

    for (let i=0 ; i<input ; i++) {
        runningSum += activeIncrement;
        activeIncrement += 1;
    }

    return runningSum;

}

console.log(triangle(9));