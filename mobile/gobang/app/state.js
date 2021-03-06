function getState(params) {

  return {
    chessboard: null,
    chessType: 'canvas',
    chessPositons: createChessPositons(15),
    chessPositonsHistory: [],
    count: createWins(),
    wins: createWins('wins'),
    myWin: createWins('myWin'),
    aiWin: createWins('aiWin'),
    width: 0, //450
    lineNum: 15,//15
    interval: 0,//width / 15 ,30
    pieceWidth: 0, //width / 15 - 2,16
    lineColor: '#afafaf',
    chessColor: true,
    gameOver: false,
    createChessPositons: createChessPositons,
    createWins:createWins,
    players: [{
      name: '玩家',
      type: true, //[true:player, false:ai]
      color: true //[black:true, white:false]
    }, {
      name: 'AlphaGo',
      type: false,
      color: false
    }],
  }
}

const createChessPositons = (num) => {
  let arr = []
  for (let i = 0; i < num; i++) {
    arr[i] = []
    for (let j = 0; j < num; j++) {
      arr[i][j] = 0
    }
  }
  return arr
}

const createWins = (type) => {
  let wins = [];
  let myWin = []
  let aiWin = []
  let count = 0

  for (let i = 0; i < 15; i++) {
    wins[i] = []
    for (let j = 0; j < 15; j++) {
      wins[i][j] = []
    }
  }
  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 11; j++) {
      for (let k = 0; k < 5; k++) {
        wins[i][j + k][count] = true
      }
      count++
    }
  }
  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 11; j++) {
      for (let k = 0; k < 5; k++) {
        wins[j + k][i][count] = true
      }
      count++
    }
  }
  for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 11; j++) {
      for (let k = 0; k < 5; k++) {
        wins[i + k][j + k][count] = true
      }
      count++
    }
  }
  for (let i = 0; i < 11; i++) {
    for (let j = 14; j > 3; j--) {
      for (let k = 0; k < 5; k++) {
        wins[i + k][j - k][count] = true
      }
      count++
    }
  }
  for (let i = 0; i < count; i++) {
    myWin[i] = 0
    aiWin[i] = 0
  }
  if (type === 'wins') {
    return wins
  } else if (type === 'aiWin') {
    return aiWin
  } else if (type === 'myWin') {
    return myWin
  } else {
    return count
  }
}

let state = getState()
window.state = state

export default state