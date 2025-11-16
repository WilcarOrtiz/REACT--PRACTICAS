export function Board({ board, updateBoard, Square }) {
  return board.map((_, index) => {
    return (
      <Square key={index} index={index} updateBoard={updateBoard}>
        {board[index]}
      </Square>
    );
  });
}
