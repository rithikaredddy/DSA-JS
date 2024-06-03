//problem 1:
// let arr=[3,5,4,1,9];
// let maxMin=(arr)=>{
//     let max=-1;
//     let min=1000;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i];
//         }
//     }
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<min){
//             min=arr[i];
//         }
//     }
//     console.log(max,min);   
// }
// (maxMin(arr));

//problem 2:
// let arr=[1,2,3,4,5];
// let reverse=(arr)=>{
//     let start=0;
//     let end=arr.length-1;
//     while(start<end){
//         let temp=arr[start];
//         arr[start]=arr[end];
//         arr[end]=temp;
//         start++;
//         end--;
//     }
//     return arr;
// }
// console.log(reverse(arr));

//problem 3:
// let arr=[4,5,6,7,0,1,2]
// let target=10;
// let search=(arr,target)=>{
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==target){
//             return i;
//         }
//     }
//     return -1;
// }
// console.log(search(arr,target));

//problem 4:
let x=4;
let y=4;
let distance=(x,y)=>{
    // if(x==y){
    //     return x+y;
    // }else if(x>y){
    //     return (x+y)+2;
    // }else{
    //     return x+y;
    // }

    // if(x>y){
    //     return (x+y)+2;
    // }else{
    //     return x+y;
    // }
    
    if(x<=y){
        return x+y;
    }
    else{
        return (x+y)+2;
    }
}
console.log(distance(x,y));