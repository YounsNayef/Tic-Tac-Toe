const GameController = (() => {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6], // Diagonals
    ];
  
    const checkForWin = (board, mark) => {
      return winningCombinations.some(combination => {
        return combination.every(index => board[index] === mark);
      });
    };
  
    const checkForTie = board => {
      return board.every(cell => cell !== "");
    };
  
    const switchPlayer = () => {
      currentPlayer = currentPlayer === player1 ? player2 : player1;
    };
  
    const resetGame = () => {
      Gameboard.resetBoard();
      currentPlayer = player1;
      clearBoardDisplay();
      updateStatus("");
    };
  
    const clearBoardDisplay = () => {
      const cells = document.querySelectorAll(".cell");
      cells.forEach(cell => {
        cell.textContent = "";
      });
    };
  
    const updateStatus = message => {
      const status = document.getElementById("status");
      status.textContent = message;
    };
  
    return {
      checkForWin,
      checkForTie,
      switchPlayer,
      resetGame,
      updateStatus,
    };
  })();
  