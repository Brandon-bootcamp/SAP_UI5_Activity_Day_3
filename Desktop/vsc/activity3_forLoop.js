let input = prompt('Enter an odd number:');

if(input %2 == 0){
    console.log('Please enter an odd number.')
} else if (input < 0){
    console.log('Please enter a positive odd number.')
} else {
    for(let i = 0; i < input; i++){
        let line = ' ';
        for(let j = 0; j < input; j++){
            if(i === j || i + j === input - 1){
                line += '*';
            } else {
                line += ' ';
            }
        }
        console.log(line);
    }    
}

