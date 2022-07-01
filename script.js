const gameboard = (() => {
    let board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    const reset = () => board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    const playMove = (x, y) => {
        board[x] = y;
    }
    const getBoard = () => board;
    return { reset, playMove, getBoard };
})();

let tc = 1;

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
});