let color = ['Blue', 'Green', 'Red', 'Orange', 'Violet', 'Indigo', 'Yellow'],
    o     = ['th', 'st', 'nd', 'rd'];

    for(i = 0; i < color.length; i++){
        if(i === 0){
            placement = i + 1 + o[i + 1];
        } else if (i === 1) {
            placement = i + 1 + o[i + 1];
        } else if (i === 2) {
            placement = i + 1 + o[i + 1];
        } else {
            placement = i + 1 + o[0];
        }
        console.log(placement +' choice is '+ color[i]);
    }