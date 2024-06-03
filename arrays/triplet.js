//triplets of arr:
let arr = [-1,0,1,-1,2,-4];
let tripSum = (arr)=>{
    let output = "";
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            for(let k=j+1;k<arr.length;k++){
                if(arr[i]+arr[j]+arr[k]==0){
                    output+=`(${arr[i]},${arr[j]},${arr[k]},)`;
                }
            }
        }
    }
    return output;
}
console.log(tripSum(arr));