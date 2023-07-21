// 遊戲狀態：0表示空格，1表示玩家X，2表示玩家O
let board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  
  // 當前玩家，初始為X玩家
  let currentPlayer = 1;
  
  // 將棋子放置到指定的位置
  function placePiece(row, col) {
    if (board[row][col] === 0) {
      board[row][col] = currentPlayer;
      document.querySelector(`.row:nth-child(${row + 1}) .cell:nth-child(${col + 1})`).textContent = currentPlayer === 1 ? 'X' : 'O';
      if (checkWin()) {
        alert(`玩家 ${currentPlayer === 1 ? 'X' : 'O'} 獲勝！`);
        resetBoard();
      } else if (checkDraw()) {
        alert('平局！');
        resetBoard();
      } else {
        currentPlayer = currentPlayer === 1 ? 2 : 1;
      }
    }
  }
  
  // 檢查是否有玩家獲勝
  function checkWin() {
    // 檢查所有行、列和對角線
    return checkRows() || checkColumns() || checkDiagonals();
  }
  
  // 檢查所有行是否有玩家獲勝
  function checkRows() {
    for (let i = 0; i < 3; i++) {
      if (board[i][0] !== 0 && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
        return true;
      }
    }
    return false;
  }
  
  // 檢查所有列是否有玩家獲勝
  function checkColumns() {
    for (let i = 0; i < 3; i++) {
      if (board[0][i] !== 0 && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
        return true;
      }
    }
    return false;
  }
  
  // 檢查兩個對角線是否有玩家獲勝
  function checkDiagonals() {
    return (
      (board[0][0] !== 0 && board[0][0] === board[1][1] && board[1][1] === board[2][2]) ||
      (board[0][2] !== 0 && board[0][2] === board[1][1] && board[1][1] === board[2][0])
    );
  }
  
  // 檢查是否平局（所有格子都被佔滿）
  function checkDraw() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === 0) {
          return false;
        }
      }
    }
    return true;
  }
  
  // 重置遊戲棋盤和狀態
  function resetBoard() {
    board = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    currentPlayer = 1;
    document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
  }