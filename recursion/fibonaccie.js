//0 1 1 2 3 5 8 13 21
let num=7;
let fib=(num)=>{
    if(num==0){
        return 0;
    }
    if(num==1){
        return 1;
    }
    return fib(num-1)+fib(num-2);
}
console.log(fib(num));