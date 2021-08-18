
const players = { tic: 'x', tac: 'o'};

class TicTacToe {

    constructor() {
        this.player = players.tic;
        this.matrix = [];
        this.winner = null;
        this.fillMatrix();
    }

    fillMatrix() {
        for (let i = 0; i < 3; i++) {
            this.matrix.push(new Array(3).fill(''));
        }
    }

    getCurrentPlayerSymbol() {
        return this.player;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.matrix[rowIndex][columnIndex] == '') {
            this.matrix[rowIndex][columnIndex] = this.player;
            this.player = (this.player === players.tic) ? players.tac : players.tic;

            // Check winner by diagonal
            if (this.matrix[1][1] != '' && 
                    (this.matrix[1][1] === this.matrix[0][0] && this.matrix[1][1] === this.matrix[2][2] || 
                        this.matrix[1][1] === this.matrix[0][2] && this.matrix[1][1] === this.matrix[2][0])) {
                this.winner = this.matrix[1][1];
            }
            // Check winner by rows and cols
            for(let i = 0; i < this.matrix.length; i++) {
                if (this.matrix[i][0] != '' && this.matrix[i][0] === this.matrix[i][1] && this.matrix[i][1] === this.matrix[i][2]) {
                    this.winner = this.matrix[i][0];
                    break;
                } else if (this.matrix[0][i] != '' && this.matrix[0][i] === this.matrix[1][i] && this.matrix[1][i] === this.matrix[2][i]) {
                    this.winner = this.matrix[0][i];
                    break;
                }
            }
            // console.log("Matrix: ", this.matrix);
            // console.log("Winner: ", this.getWinner());
        }
    }

    isFinished() {
        return (this.isDraw() || this.winner != null);
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        for(let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                if (this.matrix[i][j] === '') {
                    return false;
                }
            }
        }

        return true;
    }

    isDraw() {
        return (this.noMoreTurns() && !this.getWinner());
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex] !== '' ? this.matrix[rowIndex][colIndex] : null;
    }
}

module.exports = TicTacToe;
