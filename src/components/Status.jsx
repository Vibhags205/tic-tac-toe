const Status = ({ winner, xIsNext }) => {
  const status = winner
    ? `Winner: ${winner}`
    : `Next Player: ${xIsNext ? "X" : "O"}`;
  return <div className="text-xl mb-4">{status}</div>;
};

export default Status;
