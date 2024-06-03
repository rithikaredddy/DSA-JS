// let matrix=[[4,5,7,6],
//             [8,7,9,7]];
// let target=7;
// let repeatElement=(matrix,target)=>{
//     let sum=0;
//     for(let i=0;i<matrix.length;i++){
//         for(let j=0;j<matrix[0].length;j++){
//             if(matrix[i][j]==target){
//                 sum++;
//             }
//         }
//     }
//     return sum;
// }
// console.log(repeatElement(matrix,target));

//problem 2:
// let matrix=[[1,4,9],
//             [11,4,3],
//             [2,3,2]];
// let secondRow=(matrix)=>{
//     let sum=0;
//     for(let j=0;j<matrix[1].length;j++){
//         sum+=matrix[1][j];
//     }
//     return sum;
// }
// console.log(secondRow(matrix));

//problem 3:
//Transpose of Matrix:
let matrix=[[2,3,7],
            [5,6,7]];
let transposeMatrix=(matrix)=>{
    let rows=2;
    let cols=3;
    let transpose=[];
    for(let i=0;i<cols;i++){
        // transpose[i]=[];
        for(let j=0;j<rows;j++){
            transpose[i][j]=matrix[j][i];
        }
    }
    return transpose;
}
console.log(transposeMatrix(matrix));