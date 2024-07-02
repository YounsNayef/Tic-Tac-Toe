const Player = (name, mark) => {
    return { name, mark };
  };
  
  const player1 = Player("Player 1", "X");
  const player2 = Player("Player 2", "O");
  let currentPlayer = player1; // Start with Player 1
  