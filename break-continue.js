const products =[
    {name : 'Asus laptop', price : 12000},
    {name : 'Hp Laptop', price : 40000},
    {name : 'Samsung phone ', price : 72000},
    {name : 'Asus Phone', price : 8000},
    {name : 'karnofuli paper', price : 80},
    {name : 'bashundhara tissue', price : 52000},
    {name : 'Samsung earphone', price :121000},
    {name : 'Lg phone', price : 2000}
]
for ( const product of products){
    // if(product.price<8000){
    //     break;
    // }
    if(product.price<8000){
        continue;
    }
    console.log(product);
}