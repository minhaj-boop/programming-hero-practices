// var i = 1;

// while(i < 9) {
//     console.log(i);
//     i++;
// }

var numbers = [10,60,101,55,95,66];

for(var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if(number > 90) {
        continue;
    }
    console.log(number);
}