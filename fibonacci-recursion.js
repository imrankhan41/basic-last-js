////[0,1,1,2,3,5,8]

// const fibo =[0,1];
// for( let i=2; i<=6; i++){
//     // fibo[2]=fibo[1]+fibo[0];
//     // fibo[3]=fibo[2]+fibo[1];
//     // fibo[4]=fibo[3]+fibo[2];
//     fibo[i]=fibo[i-1]+fibo[i-2];
//     //[0,1]
//     //[0,1,1,]
//     //[0,1,1,2]
//     //[0,1,1,2,3]
//     //[0,1,1,2,3,5]
//     //[0,1,1,2,3,5,8]
// }
// console.log(fibo);
// function fibo(i){
//     if(i==0){
//         return 0;
//     }
//     if (i == 1){
//         return 1;
//     }
//     return fibo(i-1)+fibo(i-2);
// }
// console.log(fibo(6));
// function fiboSeries(i){
//     if(i==0){
//         return [0];
//     }
//     if (i == 1){
//         return [0,1];
//     }
//     const fibo = fiboSeries(i-1);
//    fibo[i]= fibo[i-1]+fibo[i-2];
//    return fibo;
// }
// console.log(fiboSeries(6));

function fiboSeries(i){
    if( i == 0){
        return [0];
    }
    if ( i == 1){
        return [0,1];
    }

    const fibo = fiboSeries(i-1);
     fibo [i]= fibo [ i-1] + fibo [i-2];
    return fibo ;
}

console.log(fiboSeries(6));