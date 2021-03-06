import state from '../../state'

function drawChessman({ i, j, color }) {
  process.env.NODE_ENV === 'production' || console.log({ i, j, color })
  const context = state.chessboard.getContext('2d')
  context.beginPath()
  context.arc(state.interval + i * 2 * state.interval, state.interval + j * 2 * state.interval, state.pieceWidth, 0, 2 * Math.PI)
  context.closePath()
  var gradient = context.createRadialGradient(state.interval + i * 2 * state.interval + state.width / 15 / 15 * 2, state.interval + j * 2 * state.interval - state.width / 15 / 15 * 2, state.width / 15 / 15 * 13, state.interval + i * 2 * state.interval, state.interval + j * 2 * state.interval, 0)
  if (color) {
    gradient.addColorStop(0, '#0a0a0a')
    gradient.addColorStop(1, '#636363')
  } else {
    gradient.addColorStop(0, '#d1d1d1')
    gradient.addColorStop(1, '#f9f9f9')
  }
  context.fillStyle = gradient
  context.fill()
}

function clearChessman({ i, j }) {
  process.env.NODE_ENV === 'production' || console.log({ i, j })
  const context = state.chessboard.getContext('2d')
  context.beginPath()
  context.arc(state.interval + i * 2 * state.interval, state.interval + j * 2 * state.interval, state.pieceWidth, 0, 2 * Math.PI)
  context.closePath()
  // var gradient = context.createRadialGradient(state.interval + i * 2 * state.interval + state.width / 15 / 15 * 2, state.interval + j * 2 * state.interval - state.width / 15 / 15 * 2, state.width / 15 / 15 * 13, state.interval + i * 2 * state.interval, state.interval + j * 2 * state.interval, 0)
  // gradient.addColorStop(0, '#d1d1d1')
  // gradient.addColorStop(1, '#f9f9f9')
  context.fillStyle = '#fff'
  context.fill()
  context.beginPath()
  context.strokeStyle = state.lineColor//state.lineColor
  context.moveTo((2 * i - 1) * state.interval, (2 * j + 1) * state.interval)
  context.lineTo((2 * i + 3) * state.interval, (2 * j + 1) * state.interval)
  context.stroke()
  context.moveTo((2 * i + 1) * state.interval, (2 * j - 1) * state.interval)
  context.lineTo((2 * i + 1) * state.interval, (2 * j + 3) * state.interval)
  context.stroke()
}

export { drawChessman, clearChessman } 