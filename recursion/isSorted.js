let arr=[1,2,3,4,5,6];
let isSorted=(arr,i)=>{
    if(i==arr.length-1){
        return true;
    }
    if(arr[i]>=arr[i+1]){
        return false;
    }
    return isSorted(arr,i+1);
}
console.log(isSorted(arr,0));