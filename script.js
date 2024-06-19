function createChessboard(){
    
    let chessBoard = document.getElementById("chessboard");
    for(let row = 0; row < 8; row++){
        for(let col = 0; col < 8; col++){
            let cell = document.createElement("div");
            cell.classList.add('cell')
            if((row+col)%2 === 0){
                cell.classList.add('white');
            }
            else{
                cell.classList.add('black');
            }
            chessBoard.appendChild(cell);
        }
    }
}

createChessboard();
