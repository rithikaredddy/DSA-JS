let arr=[5,3,2,4,1];
let insertSort=(arr)=>{
    for(let i=1;i<arr.length;i++){
        let curr=arr[i];
        let prev=i-1;
        while(prev>=0 && arr[prev]>curr){
            arr[prev+1]=arr[prev];
            prev--;
        }
        //insertion:
        arr[prev+1]=curr;
    }
    return arr;
}
console.log(insertSort(arr));