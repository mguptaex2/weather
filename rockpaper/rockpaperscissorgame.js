var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var RockPaperScissorGame = /** @class */ (function () {
    function RockPaperScissorGame() {
        this.player1Score = 0;
        this.player2Score = 0;
        this.items = [
            'rock',
            'paper',
            'scissors'
        ];
        this.player = -1;
        this.computer = -1;
        this.noOfChances = 0;
    }
    return RockPaperScissorGame;
}());
var Winner = /** @class */ (function (_super) {
    __extends(Winner, _super);
    function Winner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Winner.prototype.choice = function (selectedChoice) {
        this.player = selectedChoice;
        var randomNum = Math.floor(Math.random() * 3);
        this.computer = randomNum;
        this.checkResult();
    };
    Winner.prototype.checkResult = function () {
        var playerOption = this.player;
        var computerOption = this.computer;
        document.getElementById("computerOption").innerHTML = "Computer selected " + this.items[computerOption];
        this.noOfChances++;
        if (playerOption == computerOption) {
            document.getElementById("result1").innerHTML = "Game Tied";
        }
        else if ((playerOption - computerOption + 3) % 3 == 1) {
            this.player1Score++;
            document.getElementById("Player1").innerHTML = " Player1 Score :" + this.player1Score;
            document.getElementById("result1").innerHTML = "You Won";
        }
        else {
            this.player2Score++;
            document.getElementById("Player2").innerHTML = " Player2 Score :" + this.player2Score;
            document.getElementById("result1").innerHTML = " Computer Won";
        }
    };
    return Winner;
}(RockPaperScissorGame));
var Reset = /** @class */ (function () {
    function Reset() {
    }
    Reset.prototype.reset = function () {
        location.reload();
    };
    return Reset;
}());
