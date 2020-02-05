

class Tictactoe
{
    //  board :any;
     human = '0';
     computer = 'x';
     win = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [1,4,8],
        [2,4,6]
    ];
     cells = document.querySelectorAll('.block');
     board = Array.from(Array(9).keys());

    start(i:number)
    {
      
    //  const cells = document.querySelectorAll('.block');
    //  this.board = Array.from(Array(9).keys());
    console.log(this.board);
    // console.log(cells.length);
    // (this.board[i]as HTMLElement).innerText = '';
    this.blockSelected(i,this.human);
    }

blockSelected(num:any , player:any)
{
    console.log(num);
    this.board[num] = player;
    console.log(this.board[num]);
    console.log(this.board[0]);
    
   (document.getElementById(num)as HTMLElement).innerText = player;
   this.winner();
}
winner()
{
    if(this.board[0] === 0&& this.board[1] === 0 && this.board[2] === 0 )
    {
        console.log('winner');
    }
    
}
}
let a = new Tictactoe();
// a.start();