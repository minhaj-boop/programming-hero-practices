const products = [
    {name: 'Samsung s3 phone', price: 12000},
    {name: 'Asus Laptop', price: 80000},
    {name: 'Apple smart watch', price: 32000},
    {name: ' A4 paper', price: 500},
    {name: 'Smart Tv', price: 100000},
    {name: 'watch', price: 11000},
]


function searchProducts(products, searchText) {
    pro = [];
    for(const product of products) {
        const name = product.name.toLowerCase();;
        if(name.indexOf(searchText.toLowerCase()) != -1){
            pro.push(product);
        }
    }
    return pro;
}

const matched = searchProducts(products, 'waTch');
console.log(matched);
