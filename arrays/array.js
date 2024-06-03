//LINEAR SEARCH
sum of 1 and last index
let arr =[2,3,4,5,1,7,12,9,0];
let sum = (arr)=>{
    sum = arr[0] + arr[arr.length - 1];
    return sum;
}
console.log(sum(arr));

let arr =[2,3,4,5,1,7,12,9,0];
let key = 0;
let adjSum = (arr)=>{
    let sum = 0;
    for(let i = 0; i<arr.length;i++){
        if(arr[i]== key){
            sum+= arr[i-1] + arr[i+1];
            return sum;
        }
    }
    return "AdjKey is not present";
}
console.log(adjSum(arr,key));

let arr =[2,3,4,5,1,7,12,9,0];
let key = 7;
let sum =(arr,key)=>{
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===key){
            sum+= (i-1)+(i+1);
            
        }
    }
    return sum;
}
console.log(sum(arr,key));

//BINARY SEARCH
let arr =[2,4,6,8,10,12,14];
let key = 8;
let binary = (arr,key)=>{
    let start = 0;
    let end = arr.length - 1;
    
    while(start<=end){
        let middle = (start+end)/2;
        if(arr[middle]==key){
            return middle;
        }
        if(arr[middle]>key){
            end = middle - 1;
        }
        else{
            start = middle + 1;
        }
    }
    return -1;
}
console.log(binary(arr,key));

let nums=[1,2,3,4]
let repeat =(nums)=>{
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[j] == nums[i]){
                return true;
            }
        }
    }
    return false;
}
console.log(repeat(nums));

let arr = [4,5,6,7,0,1,2];
let target = 8;
let idx = (arr,target)=>{
    for(i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i;
        }
    }
    return -1;
}
console.log(idx(arr,target));

// let array=[7,1,5,3,6,4];
// let stork = (array)=>{
//     let least = 0;
//     let highest = 0;
//     for(let i=0;i<array.length;i++){//1
//         for(let j=i+1;j<array.length;j++){//5
//             if(array[j]<array[i]){//1<7
//                 least = array[j];
//                 break;
//             }
//             // else(array[i]<array[j]){
//             //     highest += array[j]-array[i];
//             // }
                
            
//         }
        
//     }
//     return least;
// }
// console.log(stork(array));

//reverse of array
let arr = [1,2,3,4,5,6];
let reverse = (arr)=>{
    arr.reverse();
    return arr;
}
console.log(reverse(arr));

//reverse of array
let arr=[6,5,4,3,2,1];
let reverse=(arr)=>{
    let output = '';
    for(let i=arr.length-1;i>=0;i--){
        output += arr[i]+" ";
    }
    return output;
}
console.log(reverse(arr));

//reverse of arr:
let arr=[6,5,4,3,2,1];
let reverse=(arr)=>{
    let start = 0;
    let end = arr.length-1;
    while(start<end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    let output = '';
    for(let i=0;i<arr.length;i++){
        output += arr[i]+" ";
    }
    return output;
}
console.log(reverse(arr));

//print pairs of array:
let arr=[1,2,3,4,5,6];
let pairs=(arr)=>{
    for(let i=0;i<arr.length;i++){
        console.log(`(${arr[i]},${arr[i]})`);
        for(let j=i+1;j<arr.length;j++){
            console.log(`(${arr[i]},${arr[j]})`);
        }
        console.log();
    }
    
}
console.log(pairs(arr));

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