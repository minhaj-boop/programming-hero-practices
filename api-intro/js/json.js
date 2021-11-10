const user = {id: 11, name: 'Mairan', job: 'actor'};
const stringify = JSON.stringify(user);
console.log(stringify);
const converted = JSON.parse(stringify);
console.log(converted);