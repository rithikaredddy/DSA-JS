let x=10;
let n=2;
let myPow=(x,n)=>{
    // if(x==0){
    //     return n;
    // }
    // return myPow(x,n)*myPow(x-1,n);
    let pow=myPow(x-1,n);
    if(x==0){
        pow=1;
        return;
    }
    return Math.pow(n,pow);
}
console.log(myPow(x,n));