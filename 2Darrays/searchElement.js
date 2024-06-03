let matrix=[[1,2,3,4],
            [5,6,7,8],
            [9,10,11,12],
            [13,14,15,16]];
let target =15;
let searchElement=(matrix,target)=>{
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(matrix[i][j]==target){
                console.log(`Index of ${target} is:(${i},${j})`);
            }
        }
    }
}
searchElement(matrix,target);