import { useState } from "react";

const Diagonal = () => {
  let rowSize = 9;
  let colSize = 9;

  const initialGrid = Array.from({ length: rowSize }, () =>
    new Array(colSize).fill("")
  );

  const [grid, setGrid] = useState(initialGrid);
  const [clickedCell, setClickedCell] = useState(null);

  const handleClick = (row, col) => {
    const newGrid = grid.map((r) => [...r]);

    // Upwards right
    let r = row;
    let c = col;
    while (r >= 0 && c < colSize) {
      newGrid[r][c] = 1;
      r--;
      c++;
    }

    // Upwards left
    r = row;
    c = col;
    while (r >= 0 && c >= 0) {
      newGrid[r][c] = 1;
      r--;
      c--;
    }

    // Downwards left
    r = row;
    c = col;
    while (r < rowSize && c >= 0) {
      newGrid[r][c] = 1;
      r++;
      c--;
    }

    // Downwards right
    r = row;
    c = col;
    while (r < rowSize && c < colSize) {
      newGrid[r][c] = 1;
      r++;
      c++;
    }

    setGrid(newGrid);
    setClickedCell({ row, col }); 
  };

  const handleReset = () => {
    setGrid(initialGrid);
    setClickedCell(null);
  };

  return (
    <div className="flex flex-col w-[100vw] justify-center items-center">
      <h1 className="text-[50px] font-bold mb-6">Diagonal Coloring</h1>

      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${colSize}, minmax(10px, 1fr))`,
          gridTemplateRows: `repeat(${rowSize}, minmax(10px, 1fr))`,
        }}
      >
        {grid.map((row, rowIndex) =>
          row.map((col, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              onClick={() => handleClick(rowIndex, colIndex)}
              className={`h-[50px] w-[50px] border-[1px] cursor-pointer ${
                clickedCell?.row === rowIndex && clickedCell?.col === colIndex
                  ? "bg-yellow-400" 
                  : grid[rowIndex][colIndex] === ""
                  ? "bg-white"
                  : "bg-red-600"
              } `}
            ></div>
          ))
        )}
      </div>

      <button
        onClick={handleReset}
        className="p-2 px-3 mt-6 bg-red-500 rounded-md text-white"
      >
        Reset
      </button>
    </div>
  );
};

export default Diagonal;
