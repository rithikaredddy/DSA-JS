let string="navan";
let isPal=(string)=>{
    // for(let i=0;i<string.length/2;i++){
    //     for(let j=string.length-1;j>=string.length/2;j--){
    //         if(string.charAt(i)===string.charAt(j)){
    //             return true;
    //         }
    //     }
    // }
    // return false;

    for(let i=0;i<string.length/2;i++){
        if(string.charAt(i)!=string.charAt(string.length-i-1)){
            return false;
        }
    }
    return true;
}
console.log(isPal(string));