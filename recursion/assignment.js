let arr=[3,2,4,5,6,2,7,2,2];
let key=2;
let repeatedIdx=(arr,key)=>{
    let output="";
    for(let i=0;i<arr.length;i++){
        if(arr[i]==key){
            output+=i+" ";
        }
    }
    return output
}
console.log(repeatedIdx(arr,key));

//with recursion
let arr1=[3,2,4,5,6,2,7,2,2];
let key1=2;
let repeated=(arr1,key1,i)=>{
    if(i==arr1.length){
        return;
    }
    if(arr[i]==key){
        console.log(i+" ");
    }
    return repeated(arr1,key1,i+1);
}
repeated(arr1,key1,0);
