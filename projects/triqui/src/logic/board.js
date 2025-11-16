import { COMBO_GANADORES } from "./constants";
export const checkWinner = (boardToCheck) => {
    for (const combo of COMBO_GANADORES) {
        const [a, b, c] = combo;
        if (
            boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
        ) {
            return boardToCheck[a];
        }
    }
    return null; // osea empate
};


export const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null);
};