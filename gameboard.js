const Gameboard = (() => {
    let board = ["", "", "", "", "", "", "", "", ""];
  
    const getBoard = () => board;
  
    const markCell = (index, mark) => {
      if (board[index] === "") {
        board[index] = mark;
        return true; // Mark successful
      }
      return false; // Cell already marked
    };
  
    const resetBoard = () => {
      board = ["", "", "", "", "", "", "", "", ""];
    };
  
    return {
      getBoard,
      markCell,
      resetBoard,
    };
  })();
  