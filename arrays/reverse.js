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
