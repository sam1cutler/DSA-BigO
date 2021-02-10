const power = function(base, exponent) {

    let answer = 1;

    for (let i=0 ; i<exponent ; i++) {
        answer *= base;
    }

    return answer;

}

console.log(power(4,4));