var Tictactoe = /** @class */ (function () {
    function Tictactoe() {
        //  board :any;
        this.human = '0';
        this.computer = 'x';
        this.win = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [1, 4, 8],
            [2, 4, 6]
        ];
        this.cells = document.querySelectorAll('.block');
        this.board = Array.from(Array(9).keys());
    }
    Tictactoe.prototype.start = function (i) {
        console.log(i);
        //  const cells = document.querySelectorAll('.block');
        //  this.board = Array.from(Array(9).keys());
        console.log(this.board);
        // console.log(cells.length);
        // (this.board[i]as HTMLElement).innerText = '';
        this.blockSelected(i, this.human);
    };
    Tictactoe.prototype.blockSelected = function (num, player) {
        this.board[num] = player;
        console.log(this.board[num]);
        console.log(this.board[0]);
        document.getElementById(num).innerText = player;
        this.winner();
    };
    Tictactoe.prototype.winner = function () {
        if (this.board[0] === 0 && this.board[1] === 0 && this.board[2] === 0) {
            console.log('winner');
        }
    };
    return Tictactoe;
}());
var a = new Tictactoe();
// a.start();
