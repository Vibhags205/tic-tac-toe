const Square = ({ value, onClick }) => {
  return (
    <button
      className="w-20 h-20 text-2xl bg-gray-700 rounded hover:bg-gray-600"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
