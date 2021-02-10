const splitter = function(base, separator) {

    let output = [];
    let activeFragment = '';

    for (let i=0 ; i<base.length ; i++) {
        if ( base[i] === separator ) {
            output.push(activeFragment);
            activeFragment = '';
        } else {
            activeFragment += base[i];
            if ( i === base.length-1 ) {
                output.push(activeFragment);
            }
        }
    }

    return output;
}

console.log(splitter('abc.defg.hi.jklmnop', '.'));