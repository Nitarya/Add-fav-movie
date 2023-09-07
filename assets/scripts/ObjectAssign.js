// OBJECT ASSIGN

const person = {name: 'Max'};
// undefined

const person2 = Object.assign({}, person);
// undefined

person2
// {name: "Max"}

person.name = 'Maximilian'
// "Maximilian"

person2
// {name: "Max"}