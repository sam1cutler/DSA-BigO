const sheep = function(input) {
    for (let i = input ; i >= 0 ; i--) {
        if (i > 0){
            console.log(`${i}: Another sheep jumps over the fence`);
        } else if (i === 0) {
            console.log('All sheep jumped over the fence.')
        }
    }
}

sheep(5);