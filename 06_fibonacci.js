const fibonacci = function(input) {

    let output = [];

    for (let i=1 ; i <= input ; i++) {
        if (i === 1 || i === 2) {
            output.push(1);
        } else {
            const newValue = output[i-3] + output[i-2];
            output.push(newValue);
        }
    }

    return output;

}

console.log(fibonacci(9))