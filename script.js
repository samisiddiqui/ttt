const gameState = (() => {
    let turnCounter = 0;
    let gameOver = false;

    const gameboard = (() => {
        let board = [7, 71, 731, 751, 76, 77, 73, 713, 743];
        const reset = () => { 
            board = [7, 71, 731, 751, 76, 77, 73, 713, 743];
            for (let i = 0; i < gridList.length; i++) {
                gridList[i].removeAttribute('style');
            } 
        };
        const playMove = (x, y) => {
            board[x] = y;
        }
        const getBoard = () => board;
        const gridList = document.getElementsByClassName('grid');
        for (let i = 0; i < gridList.length; i++) {
            gridList[i].addEventListener('click', function () { test(i) });
        }
        function test(i) {
            if (gameOver) {
                //This space intentionally left blank
            } else {
                if ((gridList[i].getAttribute('style') === 'background-color: red') || (gridList[i].getAttribute('style') === 'background-color: blue')) {
                    //This space intentionally left blank
                } else {
                    gridList[i].setAttribute('style', (turnCounter % 2 === 0) ? 'background-color: red' : 'background-color: blue');
                    gameboard.playMove(i, (turnCounter % 2 == 0) ? 1 : 2);
                    turnCounter++;
                    if (turnCounter >= 4) {
                        checkIfWin();
                    }
                }
            }

        }
        function checkIfWin() {
            //Line win
            let winStates = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
            for (let z = 0; z < winStates.length; z++) {
                if (board[winStates[z][0]] == board[winStates[z][1]] & board[winStates[z][1]] == board[winStates[z][2]]) {
                    gameOver = true;
                    const res = document.getElementById('result');
                    res.innerHTML = 'Player ' + board[winStates[z][0]] + ' wins';
                }
            }
            if (turnCounter == 9) {
                document.getElementById('result').innerHTML = 'Draw';
                gameOver = true;
            }
        }

        return { getBoard, reset, playMove };
    })();

    const getBoard = () => gameboard.getBoard();
    const Player = (id, name) => { };
    const initialize = () => {
        turnCounter = 0;
        gameOver = false;
        gameboard.reset();
        const p1 = Player(1, 'Alice');
        const p2 = Player(2, 'Bob');
        document.getElementById('result').innerHTML = '';
    }
    
    return { initialize, getBoard };
})();

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', gameState.initialize);


/* let tc = 1;

const gridList = document.getElementsByClassName('grid');
for (let i = 0; i < gridList.length; i++) {
    gridList[i].addEventListener('click', function() {
        if ((gridList[i].getAttribute('style') === 'background-color: red') || (gridList[i].getAttribute('style') === 'background-color: blue')) {
            //This space intentionally left blank
        } else {
            gridList[i].setAttribute('style', (tc % 2 === 0) ? 'background-color: red' : 'background-color: blue');
            gameboard.playMove(i, (tc % 2 == 0) ? 2 : 1);
            tc++;
        }
    });
}

const button = document.getElementById('reset');
button.addEventListener('click', function() {
    gameboard.reset();
    tc = 1;
    for (let i = 0; i < gridList.length; i++) {
        gridList[i].removeAttribute('style');
    }
}); */