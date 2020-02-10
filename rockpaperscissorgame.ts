class RockPaperScissorGame {
    scores = [0 , 0];   
    items = [
        'rock',
        'paper',
        'scissors'
      ];
      player1 = -1;
  computer  = -1;
  theResult = 0;
  pick( weapon: number): void {
    this.player1 = weapon;
   
      // generate a number from 0 -2 
      const randomNum =  Math.floor(Math.random() * 3 ) ;
      console.log(randomNum);
      this.computer = randomNum;
      this.checkResult();
      }
  reset(): void {
    this.scores = [0,0];
   }
   checkResult(): void {
    const playerPick = this.player1;
    const enemyPick = this.computer;
   // if you and the enemy have the same weapon, then it is a tie.
    if( playerPick ==  enemyPick)
     {
     this.theResult = 2;
     (document.getElementById("result1") as HTMLElement).innerHTML = "Tie";
   }
  else if ( (playerPick - enemyPick + 3)% 3 == 1)    {
       // YOU WIN
       this.theResult = 0;
       this.scores[0] = this.scores[0]+1;
       (document.getElementById("result1") as HTMLElement).innerHTML = "you win";
     }
     else{
       // YOU LOSE
       this.theResult = 1;
         this.scores[1] = this.scores[1]+1;
         (document.getElementById("result1") as HTMLElement).innerHTML = "you lose";
     }
  }
}
 
 
  
