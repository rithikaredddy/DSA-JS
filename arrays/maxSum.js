//maxsum of pairs of arr:
let arr=[1,2,3,4,5,6];
let pairs=(arr)=>{
    let sum = 0;
    let max = -1;
    for(let i = 0;i<arr.length;i++){
        let start=i;
        for(let j = i;j<arr.length;j++){
            let end=j;
            sum=0;
            for(let k=start;k<=end;k++){
                sum+=arr[i];
            }
            // console.log(sum);
            if(sum>max){
                max=sum;
            }
        }
    }
    return max;
} 
console.log(pairs(arr));