let arr=[1,3,4,7,9,9,0];
let duplicate=(arr)=>{
    for(let i=0;i<arr.length;i++){
        let x=arr[i];
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]==x){
                console.log(arr[j]);
                break;
            }
        }
    }
    
}
duplicate(arr);

//duplicate using splice method:
let array=[1,3,10,5,3,0];
let Duplicate=(array)=>{
    for(let i=0;i<array.length;i++){
        for(let j=i+1;j<array.length;j++){
            if(array[i]==array[j]){
                array.splice(j,1);
                return array;
            }
        }
    }
}
console.log(Duplicate(array));