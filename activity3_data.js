var records = [{
    name:  'Gibo',
    age: 16,
    skill: [
        'SAP UI5',
        'SAP HANA'
    ]
},{
    name: 'Patrick',
    age: 22,
    skill: [
        'SAP UI5',
        'SAP HANA',
        'SAP ABAP'
    ]
},{
    name: 'MJ',
    age: 24,
    skill: ['SAP HANA']
}];

    maxSkillsCount = 0;
records.forEach(record => {
    if(record.skill.length > maxSkillsCount){
        maxSkillsCount = record.skill.length;
        recordMostSkilled = record;
    }    
});

console.log('Name: ' + recordMostSkilled.name);
console.log('Age: ' + recordMostSkilled.age);
