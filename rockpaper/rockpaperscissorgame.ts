class RockPaperScissorGame {
  player1Score = 0;
  player2Score = 0;
  items = [
    'rock',
    'paper',
    'scissors'
  ];
  player = -1;
  computer = -1;
  noOfChances = 0;
  }
class Winner extends RockPaperScissorGame
{
  choice(selectedChoice: number) {
    this.player = selectedChoice;
    const randomNum = Math.floor(Math.random() * 3);
    this.computer = randomNum;
    this.checkResult();
     }
  checkResult() {
    var playerOption = this.player;
    var computerOption = this.computer;
    (document.getElementById("computerOption") as HTMLElement).innerHTML = "Computer selected "+this.items[computerOption];
    this.noOfChances++;
    if(playerOption == computerOption) {
    
      (document.getElementById("result1") as HTMLElement).innerHTML = "Game Tied";
    }
    else if ((playerOption - computerOption + 3) % 3 == 1) {
      this.player1Score++;
       (document.getElementById("Player1") as HTMLElement).innerHTML = " Player1 Score :"+this.player1Score;
       (document.getElementById("result1") as HTMLElement).innerHTML = "You Won";
     
    }
    else {
       this.player2Score++;
       (document.getElementById("Player2") as HTMLElement).innerHTML = " Player2 Score :"+this.player2Score;
       (document.getElementById("result1") as HTMLElement).innerHTML = " Computer Won";
    }
  }  
}
class Reset{
  reset()
  {
  location.reload();
}
}


