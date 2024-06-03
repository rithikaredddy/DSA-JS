let arr=[5,4,3,2,1];
let bubbleSort=(arr)=>{
    for(let turns=0;turns<arr.length-1;turns++){
        for(let j=0;j<arr.length-1-turns;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort(arr));

let array=[2,1,3,4,5];
let BubbleSort=(arr)=>{
    let swap=0;
    for(let turns=0;turns<array.length-1;turns++){
        for(let j=0;j<array.length-1-turns;j++){
            if(array[j]>arr[j+1]){
                let temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
                swap++;
            }
        }
    }
    return swap;
}
console.log(BubbleSort(array));