const displayController = (() => {
    const cells = document.querySelectorAll(".cell");
  
    cells.forEach(cell => {
      cell.addEventListener("click", () => {
        const index = parseInt(cell.getAttribute("data-cell"));
        
        if (GameController.checkForWin(Gameboard.getBoard(), currentPlayer.mark) || GameController.checkForTie(Gameboard.getBoard())) {
          return;
        }
  
        if (Gameboard.markCell(index, currentPlayer.mark)) {
          cell.textContent = currentPlayer.mark;
          if (GameController.checkForWin(Gameboard.getBoard(), currentPlayer.mark)) {
            GameController.updateStatus(`${currentPlayer.name} wins!`);
          } else if (GameController.checkForTie(Gameboard.getBoard())) {
            GameController.updateStatus("It's a tie!");
          } else {
            GameController.switchPlayer();
            GameController.updateStatus(`${currentPlayer.name}'s turn`);
          }
        }
      });
    });
  
    const restartButton = document.getElementById("restart-btn");
    restartButton.addEventListener("click", GameController.resetGame);
  })();
  