// let matrix=[[1,2,3,4],
//             [5,6,7,8],
//             [9,10,11,12],
//             [13,14,15,16]];

let matrix=[[1,2,3,4,5],
            [6,7,8,9,10],
            [11,12,13,14,15],
            [16,17,18,19,20],
            [21,22,23,24,25]];
let spiralMatrix=(matrix)=>{
    let startRow=0;
    let startCol=0;
    let endRow=matrix.length-1;
    let endCol=matrix[0].length-1;
    while(startCol<=endCol&&startRow<=endRow){
        //top
        for(let j=startCol;j<=endCol;j++){
            console.log(matrix[startRow][j]+" ");
        }
        //right
        for(let i=startRow+1;i<=endRow;i++){
            console.log(matrix[i][endCol]+" ");
        }
        //bottom
        for(let j=endCol-1;j>=startCol;j--){
            console.log(matrix[endRow][j]+" ");
        }
        //left
        for(let i=endRow-1;i>=startRow+1;i--){
            console.log(matrix[i][startCol]+" ");
        }
        startRow++;
        startCol++;
        endRow--;
        endCol--;
    }
}
spiralMatrix(matrix);