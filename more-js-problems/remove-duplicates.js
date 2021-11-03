const names = ['abul', 'babul', 'babul', 'sabul', 'kabul', 'abul'];

function removeDublicats(names) {
    const unique = [];
    for(const e of names) {
       console.log(e); 
       if(unique.indexOf(e) == -1) {
           unique.push(e);
       }
    }
    return unique;
}

const unames = removeDublicats(names);
console.log(unames);