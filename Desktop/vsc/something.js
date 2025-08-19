// Randomizer

let programmer = ['Brandon', 'Arjake', 'Stanlee', 'Regina', 'Mark'];
let partCaseStudy = ['Order Main Page', 'Create page', 'Detail Page', 'Edit Page'];

for(var i = 1; i <= 4; i++){
    const p_rand_index = Math.floor(Math.random() * programmer.length);
    const p_rand = programmer[p_rand_index];
    const pcs_rand_index = Math.floor(Math.random() * partCaseStudy.length);
    const pcs_rand = partCaseStudy[pcs_rand_index];
    
    programmer.splice(p_rand_index, 1)
    partCaseStudy.splice(pcs_rand_index, 1)
    console.log(p_rand, pcs_rand);
};

    console.log("support: ",programmer[0]);