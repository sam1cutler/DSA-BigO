const factorial = function(input) {

    let output = 1;

    for (let i=1; i <= input ; i++) {
        output *= i;
    }

    return output

}

console.log(factorial(4));