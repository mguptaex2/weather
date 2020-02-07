

class Tictactoe1 {

    human = 0;
    computer = 1;
    turn: number = 0;
    totalturn: number = 0;
    board = Array.from(Array(9).keys());

    start(id: string) {

        this.turn === this.human;
        this.blockSelected(id, this.human);
        this.turn = this.computer;
        this.totalturn++;
    }

    blockSelected(id: string, player: number) {
        var flag = 0;
        var num: number = +id;
        this.board[num] = player;
        (document.getElementById(id) as HTMLElement).innerText = '0';
        (document.getElementById(id)as HTMLElement).setAttribute("disabled","true");   
        if(this.totalturn === 7)
        {
            flag =0;
        }
        let win = this.winner(0);
        if (win === 0) {
            alert("winner is human");
            flag = 1;
        }
        if (flag === 0) {
            this.computerPlayer();
        }
    }

    computerPlayer() {
        while (true) {
            let random = Math.floor(Math.random() * 8) + 1;
            let randomNumber = random.toString();
            let emptySlots = (document.getElementById(randomNumber) as HTMLElement).innerHTML;
            if (emptySlots === "") {
                var num: number = +randomNumber;
                this.board[num] = 1;
                (document.getElementById(randomNumber) as HTMLElement).innerHTML = "X";
                 (document.getElementById(randomNumber)as HTMLElement).setAttribute("disabled","true");   
                this.turn = this.human;
                this.totalturn++;
                let win = this.winner(1);
                if (win === 1) {
                    alert("winner is computer");
                }
                return true;

            }
        }

    }
    winner(player: number) {
        let gameWon = null;
        if (this.board[0] === player) {
            if ((this.board[1] === player && this.board[2] === player) || (this.board[3] === player && this.board[6] === player) || (this.board[4] === player && this.board[8] === player)) {
                gameWon = player;
            }

        }
        if (this.board[1] === player) {
            if ((this.board[4] === player && this.board[7] === player) || (this.board[0] === player && this.board[2] === player)) {
                gameWon = player;
            }

        }
        if (this.board[2] === player) {
            if ((this.board[5] === player && this.board[8] === player) || (this.board[0] === player && this.board[1] === player) || (this.board[4] === player && this.board[6] === player)) {
                
                gameWon = player;
            }

        }
        if (this.board[3] === player) {
            if ((this.board[4] === player && this.board[5] === player) || (this.board[0] === player && this.board[6] === player)) {
               
                gameWon = player;
            }

        }
        if (this.board[6] === player) {
            if ((this.board[7] === player && this.board[8] === player) || (this.board[0] === player && this.board[3] === player) || (this.board[4] === player && this.board[2] === player)) {
                
                gameWon = player;
            }

        }
        

        if (this.totalturn === 8) {
            alert("game draw");
            this.replay();
        }
        return gameWon;
    }

    replay() {
        
        for (var i = 0; i < 9; i++) {
            var str: string = i.toString();
            this.board[i] = 2;
            (document.getElementById(str)as HTMLElement).setAttribute("disabled","false");
            (document.getElementById(str) as HTMLElement).innerHTML = '';
            //

        }
    }

}
