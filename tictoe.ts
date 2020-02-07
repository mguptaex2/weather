

class Tictactoe1
{
    //  board :any;
     human = 0;
     computer = 1;
     turn:number = 0;
    totalturn :number =0;
    //  cells = document.querySelectorAll('.block');
     board = Array.from(Array(9).keys());

    start(id:string)
    {
//    console.log(typeof(this.board));
    this.turn === this.human;
    
    // if(this.turn === this.human)
    // {
    this.blockSelected(id,this.human);
    this.turn = this.computer;
    // }
    // else
    // { 
    // this.blockSelected(id, this.computer);
    // // this.computerPlayer();
    // this.turn = this.human;
    // }
    this.totalturn++;
     }

blockSelected(id:string, player:number)
{
            var num:number =+id;
            this.board[num] = player;
            // if(player === 0)
            // {
            (document.getElementById(id)as HTMLElement).innerText = '0';
            // (document.getElementById(id)as HTMLElement).setAttribute("disabled","true");
            // }
                 // (document.getElementById(id)as HTMLElement).innerHTML="X";
                // else
                // {
                this.computerPlayer();
                // }
            // }

        let win = this.winner(0);
        if(win === 0){
            alert("winner is human" );
        }
}

computerPlayer()
{
    while(true)
    {
    let random = Math.floor(Math.random()*8)+1;
    let randomNumber = random.toString(); 
    // console.log(randomNumber);
        let emptySlots= (document.getElementById(randomNumber)as HTMLElement).innerHTML;
        // console.log(emptySlots);
        if(emptySlots==="")
        {
            var num:number =+randomNumber;
            this.board[num] = 1;
         (document.getElementById(randomNumber)as HTMLElement).innerHTML="X";
        //  (document.getElementById(randomNumber)as HTMLElement).setAttribute("disabled","true");   
       this.turn = this.human;
        this.totalturn++;
        let win = this.winner(1);
        if(win === 1){
            alert("winner is computer" );
        } 
        return true;
        
        }
    }
        // return false;
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
        
       if(this.totalturn === 8)
       {
           alert("game draw");
           this.replay();
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
