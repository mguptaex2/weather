var Tictactoe1 = /** @class */ (function () {
    function Tictactoe1() {
        //  board :any;
        this.human = 0;
        this.computer = 1;
        this.turn = 0;
        this.totalturn = 0;
        //  cells = document.querySelectorAll('.block');
        this.board = Array.from(Array(9).keys());
    }
    Tictactoe1.prototype.start = function (id) {
        //    console.log(typeof(this.board));
        this.turn === this.human;
        // if(this.turn === this.human)
        // {
        this.blockSelected(id, this.human);
        this.turn = this.computer;
        // }
        // else
        // { 
        // this.blockSelected(id, this.computer);
        // // this.computerPlayer();
        // this.turn = this.human;
        // }
        this.totalturn++;
        // (document.getElementById(id)as HTMLElement).setAttribute("disabled","true");
        // let win = this.winner(player);
        // if(win === 0||win === 1){
        //     alert("winner" );
        // }
    };
    Tictactoe1.prototype.blockSelected = function (id, player) {
        var num = +id;
        this.board[num] = player;
        // if(player === 0)
        // {
        document.getElementById(id).innerText = '0';
        // (document.getElementById(id)as HTMLElement).setAttribute("disabled","true");
        // }
        // (document.getElementById(id)as HTMLElement).innerHTML="X";
        // else
        // {
        this.computerPlayer();
        // }
        // }
        var win = this.winner(0);
        if (win === 0) {
            alert("winner is human");
        }
    };
    Tictactoe1.prototype.computerPlayer = function () {
        while (true) {
            var random = Math.floor(Math.random() * 8) + 1;
            var randomNumber = random.toString();
            // console.log(randomNumber);
            var emptySlots = document.getElementById(randomNumber).innerHTML;
            // console.log(emptySlots);
            if (emptySlots === "") {
                var num = +randomNumber;
                this.board[num] = 1;
                document.getElementById(randomNumber).innerHTML = "X";
                //  (document.getElementById(randomNumber)as HTMLElement).setAttribute("disabled","true");   
                this.turn = this.human;
                this.totalturn++;
                var win = this.winner(1);
                if (win === 1) {
                    alert("winner is computer");
                }
                return true;
            }
        }
        // return false;
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
        if (this.totalturn === 8) {
            alert("game draw");
            this.replay();
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
