var RockPaperScissorGame = /** @class */ (function () {
    function RockPaperScissorGame() {
        this.scores = [0, 0];
        this.items = [
            'rock',
            'paper',
            'scissors'
        ];
        this.player1 = -1;
        this.computer = -1;
        this.theResult = 0;
    }
    RockPaperScissorGame.prototype.pick = function (weapon) {
        this.player1 = weapon;
        // generate a number from 0 -2 
        var randomNum = Math.floor(Math.random() * 3);
        console.log(randomNum);
        this.computer = randomNum;
        this.checkResult();
    };
    RockPaperScissorGame.prototype.reset = function () {
        this.scores = [0, 0];
    };
    RockPaperScissorGame.prototype.checkResult = function () {
        var playerPick = this.player1;
        var enemyPick = this.computer;
        // if you and the enemy have the same weapon, then it is a tie.
        if (playerPick == enemyPick) {
            this.theResult = 2;
            document.getElementById("result1").innerHTML = "Tie";
        }
        else if ((playerPick - enemyPick + 3) % 3 == 1) {
            // YOU WIN
            this.theResult = 0;
            this.scores[0] = this.scores[0] + 1;
            document.getElementById("result1").innerHTML = "you win";
        }
        else {
            // YOU LOSE
            this.theResult = 1;
            this.scores[1] = this.scores[1] + 1;
            document.getElementById("result1").innerHTML = "you lose";
        }
    };
    return RockPaperScissorGame;
}());
