const gameboard = (() => {
    let board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    const reset = () => board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    const inc = () => {
        let x = Math.floor(Math.random() * 9);
        let y = Math.floor(Math.random() * 100);
        board[x] = y;
    }
    const getBoard = () => board;
    return {reset, inc, getBoard};
})();