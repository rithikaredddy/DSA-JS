let n =10;
let increasing=(n)=>{
    if(n==1){
        console.log("1");
        return ;
    }
    increasing(n-1);
    console.log(n);
}
console.log(increasing(n));