let n=4;
let board=[];
for(let i=0;i<n;i++){
    board[i]=[];
    for(let j=0;j<n;j++){
        board[i][j]="X";
    }
}
let isSafe=(board,row,col)=>{
    //vertical up
    for(let i=row-1;i>=0;i--){
        if(board[i][col]=="Q"){
            return false;
        }
    }
    //top-left-up
    for(let i=row-1,j=col-1;i>=0&&j>=0;i--,j--){
        if(board[i][j]=="Q"){
            return false;
        }
    }
    //top-rght-up
    for(let i=row-1,j=col+1;i>=0&&j<board.length;i--,j++){
        if(board[i][j]=="Q"){
            return false;
        }
    }
    return true;
}
let nQueens=(board,row)=>{
    if(row==board.length){
        printBoard(board);
        return;
    }
    for(let j=0;j<board.length;j++){
        if(isSafe(board,row,j)){
            board[row][j]="Q";
            nQueens(board,row+1);
            board[row][j]="X";
        }  
    }
}
let printBoard=(board)=>{
    let output="";
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board.length;j++){
            output+=board[i][j]+" ";
        }
        output+=("\n");
    }
    console.log("-----QueenTable-----");
    console.log(output);
}
nQueens(board,0);
