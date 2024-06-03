let n=5;
let tillingPrblm=(n)=>{
    if(n==0||n==1){
        return 1;
    }
    //vertical
    let fnm1=tillingPrblm(n-1);
    //horizontal
    let fnm2=tillingPrblm(n-2);
    //totalways
    let totalways=fnm1+fnm2;
    return totalways;
}
console.log(tillingPrblm(n));