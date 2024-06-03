let matrix=[[1,2,3,4],
            [5,6,7,8],
            [9,10,11,12],
            [13,14,15,16]];
let diagonalSum=(matrix)=>{
    let sum=0;
    // for(let i=0;i<matrix.length;i++){
    //     for(let j=i;j<matrix[0].length;j++){
    //         if(i==j){
    //             sum+=matrix[i][j];
    //         }
    //     }
    // }
    // return sum;

    for(let i=matrix.length-1;i>=0;i--){
        for(let j=matrix[0].length-1;j>=i;j--){
            if(i==j){
                sum+=matrix[i][j];
            }
        } 
    }
    return sum;
}
console.log(diagonalSum(matrix));