var computer = {
    price: 29000,
    storage: '156gb',
    processor: 'intel i5'
}
// console.log(computer);
console.log(computer.processor);

var computerPrice = computer.price;
console.log(computerPrice);

computer.price = 40000;
console.log(computer);

computer["price"] = 24000;
console.log(computer);

var newPrice = "price";
computer[newPrice] = 25000;
console.log(computer);

