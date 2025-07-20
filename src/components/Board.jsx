import Square from "./Square";

const Board = ({ board, handleClick }) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {board.map((value, index) => (
        <Square key={index} value={value} onClick={() => handleClick(index)} />
      ))}
    </div>
  );
};

export default Board;
