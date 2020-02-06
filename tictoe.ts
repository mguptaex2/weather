

class Tictactoe1
{
    //  board :any;
     human = 0;
     computer = 1;
     turn:number = 0;
    
     cells = document.querySelectorAll('.block');
     board = Array.from(Array(9).keys());

    start(id:string)
    {
//    console.log(typeof(this.board));
    this.turn === this.human;
    
    if(this.turn === this.human)
    {
    this.blockSelected(id,this.human);
    this.turn = this.computer;
    }
    else
    { 
    this.blockSelected(id, this.computer);
    this.turn = this.human;
    }
    }

blockSelected(id:string, player:number)
{
    var num:number =+id;
 
    this.board[num] = player;
    // console.log(typeof(num));
    // console.log(this.board[0]);
    if(player === 0)
    {
   (document.getElementById(id)as HTMLElement).innerText = '0';
    }
    else
    {
        (document.getElementById(id)as HTMLElement).innerText = 'x';
    }
   let win = this.winner(player);
   
   if(win === 0||win === 1){
   alert("winner is " +win);
    // this.replay();
    // console.log(this.board);
    }
    this.isFull();
    
        
    
   
}
isFull()
{
    for(var i = 0;i<9;i++)
    {
        var str:string = i.toString();
        
       if( (document.getElementById(str)as HTMLElement).innerHTML = '0'||document.getElementById(str)as HTMLElement).innerHTML = 'x')
       {
           
       }
        
    }
}
winner(player:number)
{   
    
       
        let gameWon = null;
        // console.log(typeof(this.board[0]));
        if(this.board[0] === player)
        {
            if((this.board[1] === player && this.board[2] === player)||(this.board[3] === player && this.board[6] === player)||(this.board[4] === player && this.board[8] === player))
            {
                gameWon = player;
                
                // console.log("winner");
            }
           
        }
        if(this.board[1] === player)
        {
            if((this.board[4] === player && this.board[7] === player)||(this.board[0] === player && this.board[2] === player))
            {
                gameWon = player;
            }
           
        }
        if(this.board[2] === player)
        {
            if((this.board[5] === player && this.board[8] === player)||(this.board[0] === player && this.board[1] === player)||(this.board[4] === player && this.board[6] === player))
            {
                // console.log("winner");
                gameWon = player;
            }
           
        }
        if(this.board[3] === player)
        {
            if((this.board[4] === player && this.board[5] === player)||(this.board[0] === player && this.board[6] === player))
            {
                // console.log("winner");
                gameWon = player;
            }
           
        }
        if(this.board[6] === player)
        {
            if((this.board[7] === player && this.board[8] === player)||(this.board[0] === player && this.board[3] === player)||(this.board[4] === player && this.board[2] === player))
            {
                // console.log("winner");
                gameWon = player;
            }
           
        }
        
       
        return gameWon;
    }

    replay()
    {
        // this.board = [0,0,0,0,0,0,0,0,0];
        for(var i = 0;i<9;i++)
        {
            var str:string = i.toString();
            this.board[i] = 0;
            (document.getElementById(str)as HTMLElement).innerHTML = '';
            
        }
    }

}

// a.start();