// let arr=[3,6,2,1,8,7,4,5,3,1];
// let Duplicate=(arr)=>{
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]==arr[j]){
//                 arr.splice(j,1);
//             }
//         }
//     }
// }
// Duplicate(arr);
// let bubbleSort=(arr)=>{
//     for(let turns=0;turns<arr.length-1;turns++){
//         for(let j=0;j<arr.length-1-turns;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp=arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=temp;
//             }
//         }
//     }
//     return arr;
// }
// console.log(bubbleSort(arr));

let selectionSort=(arr)=>{
    for(i=0;i<arr.length;i++){
        let smallest=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[smallest]>arr[j]){
                smallest=j;
            }
        }
        let temp=arr[i];
        arr[i]=arr[smallest];
        arr[smallest]=temp;
    }
    return arr;
}
// console.log(selectionSort(arr));
let nums=[1,2,3,4];
var runningSum = function(nums) {
    for(let i=0;i<nums.length;i++){
        if(i=0){
            nums[i]=nums[i];
        }else{
            nums[i]=nums[i-1]+nums[i];
        }
    }
    return nums;
}
console.log(runningSum(nums));