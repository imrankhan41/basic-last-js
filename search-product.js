const products =[
    {name : 'Asus laptop', price : 12000},
    {name : 'Hp Laptop', price : 4000},
    {name : 'Samsung phone ', price : 72000},
    {name : 'Asus Phone', price : 8000},
    {name : 'karnofuli paper', price : 80},
    {name : 'bashundhara tissue', price : 52000},
    {name : 'Samsung earphone', price :121000},
    {name : 'Lg phone', price : 2000}
]

function seacrhProduct(products,searchText){
    let matched = [];
    for ( const product of products){
        if(product.name.indexOf(searchText) != -1){
            matched.push(product);
        }
    }
    return matched;
}
const matchedItem =seacrhProduct(products,'Laptop');
console.log(matchedItem);