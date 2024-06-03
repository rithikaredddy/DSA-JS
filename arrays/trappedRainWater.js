let arr=[0,1,0,2,1,0,1,3,2,1,2,1];
let trapped=(arr)=>{
    //leftMax
    let leftMax = [];
    leftMax[0] = arr[0];
    for(let i=1;i<arr.length;i++){
        leftMax[i]=Math.max(arr[i],leftMax[i-1])
    }
    //rightMax
    let rightMax =[];
    rightMax[arr.length-1]=arr[arr.length-1];
    for(let i=arr.length-2;i>=0;i--){
        rightMax[i]=Math.max(arr[i],rightMax[i+1])
    }
    //trapped rain water
    let trappedRainWater = 0;
    for(let i=0;i<arr.length;i++){
        let waterLevel=Math.min(leftMax[i],rightMax[i]);
        trappedRainWater += waterLevel - arr[i];
    }
    return trappedRainWater;
}
console.log(trapped(arr));

