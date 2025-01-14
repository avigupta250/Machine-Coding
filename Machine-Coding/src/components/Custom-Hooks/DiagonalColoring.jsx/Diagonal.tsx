import { useState } from "react";

const Diagonal = () => {
  let rowSize = 21;
  let colSize = 21;

  const initialGrid = Array.from({ length: rowSize }, () =>
    new Array(colSize).fill("")
  );

  const [grid, setGrid] = useState(initialGrid);

  const handleClick = (row:number, col:number) => {
    
    const newGrid = grid.map((r) => [...r]);

    // Upwards right
    let r = row;
    let c = col;
    while (r >= 0 && c < colSize) {
      newGrid[r][c] = 1;
      r--;
      c++;
    }
    console.log("Upward right complete");

    // Upwards left
    r = row;
    c = col;
    while (r >= 0 && c >= 0) {
      newGrid[r][c] = 1;
      r--;
      c--;
    }
    console.log("Upward left complete");

    // Downwards left
    r = row;
    c = col;
    while (r < rowSize && c >= 0) {
      newGrid[r][c] = 1;
      r++;
      c--;
    }
    console.log("Downward left complete");

    // Downwards right
    r = row;
    c = col;
    while (r < rowSize && c < colSize) {
      newGrid[r][c] = 1;
      r++;
      c++;
    }
    console.log("Downward right complete");

    setGrid(newGrid);
  };

  const handleReset = () => {
    setGrid(initialGrid);
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
              className={`${
                grid[rowIndex][colIndex] === "" ? "bg-white" : "bg-red-600"
              } h-[25px] w-[25px] border-[2px] hover:bg-red-400 cursor-pointer`}
            ></div>
          ))
        )}
      </div>

      <button
        onClick={handleReset}
        className="p-2 px-3 mt-6 bg-red-500 text-white"
      >
        Reset
      </button>
    </div>
  );
};

export default Diagonal;
