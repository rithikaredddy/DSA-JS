let x=2;
let n=5;
let xPowern=(x,n)=>{
    if(n==1){
        return x;
    }
    return x*xPowern(x,n-1);
}
console.log(xPowern(x,n));