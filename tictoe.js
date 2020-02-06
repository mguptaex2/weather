var Tictactoe1 = /** @class */ (function () {
    function Tictactoe1() {
        //  board :any;
        this.human = 0;
        this.computer = 1;
        this.turn = 0;
        this.cells = document.querySelectorAll('.block');
        this.board = Array.from(Array(9).keys());
    }
    Tictactoe1.prototype.start = function (id) {
        //    console.log(typeof(this.board));
        this.turn === this.human;
        if (this.turn === this.human) {
            this.blockSelected(id, this.human);
            this.turn = this.computer;
        }
        else {
            this.blockSelected(id, this.computer);
            this.turn = this.human;
        }
    };
    Tictactoe1.prototype.blockSelected = function (id, player) {
        var num = +id;
        this.board[num] = player;
        // console.log(typeof(num));
        // console.log(this.board[0]);
        if (player === 0) {
            document.getElementById(id).innerText = '0';
        }
        else {
            document.getElementById(id).innerText = 'x';
        }
        var win = this.winner(player);
        if (win === 0 || win === 1) {
            alert("winner is " + win);
            // this.replay();
            // console.log(this.board);
        }
        this.isFull();
    };
    Tictactoe1.prototype.isFull = function () {
    };
    Tictactoe1.prototype.winner = function (player) {
        var gameWon = null;
        // console.log(typeof(this.board[0]));
        if (this.board[0] === player) {
            if ((this.board[1] === player && this.board[2] === player) || (this.board[3] === player && this.board[6] === player) || (this.board[4] === player && this.board[8] === player)) {
                gameWon = player;
                // console.log("winner");
            }
        }
        if (this.board[1] === player) {
            if ((this.board[4] === player && this.board[7] === player) || (this.board[0] === player && this.board[2] === player)) {
                gameWon = player;
            }
        }
        if (this.board[2] === player) {
            if ((this.board[5] === player && this.board[8] === player) || (this.board[0] === player && this.board[1] === player) || (this.board[4] === player && this.board[6] === player)) {
                // console.log("winner");
                gameWon = player;
            }
        }
        if (this.board[3] === player) {
            if ((this.board[4] === player && this.board[5] === player) || (this.board[0] === player && this.board[6] === player)) {
                // console.log("winner");
                gameWon = player;
            }
        }
        if (this.board[6] === player) {
            if ((this.board[7] === player && this.board[8] === player) || (this.board[0] === player && this.board[3] === player) || (this.board[4] === player && this.board[2] === player)) {
                // console.log("winner");
                gameWon = player;
            }
        }
        return gameWon;
    };
    Tictactoe1.prototype.replay = function () {
        // this.board = [0,0,0,0,0,0,0,0,0];
        for (var i = 0; i < 9; i++) {
            var str = i.toString();
            this.board[i] = 0;
            document.getElementById(str).innerHTML = '';
        }
    };
    return Tictactoe1;
}());
// a.start();
