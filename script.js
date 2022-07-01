const gameboard = (() => {
    let board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    const reset = () => board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    const inc = (x, y) => {
        //let x = Math.floor(Math.random() * 9);
        //let y = Math.floor(Math.random() * 100);
        board[x] = y;
    }
    const getBoard = () => board;
    return { reset, inc, getBoard };
})();

let tc = 1;

const gridList = document.getElementsByClassName('grid');
for (let i = 0; i < gridList.length; i++) {
    gridList[i].addEventListener('click', function() {
        if ((gridList[i].getAttribute('style') === 'background-color: red') || (gridList[i].getAttribute('style') === 'background-color: blue')) {
            
        } else {
            gridList[i].setAttribute('style', (tc % 2 === 0) ? 'background-color: red' : 'background-color: blue');
            gameboard.inc(i, (tc % 2 == 0) ? 1 : -1);
            tc++;
        }
        console.log(i);
    });
}

const button = document.getElementById('reset');