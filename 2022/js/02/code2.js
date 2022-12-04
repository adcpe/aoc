const fs = require('fs')

const rps = { A: 'Rock', B: 'Paper', C: 'Scissors' }
const choiceScore = { Rock: 1, Paper: 2, Scissors: 3 }
const outcomeScenario = { X: 'Loss', Y: 'Draw', Z: 'Win' }
const outcomeScore = { Loss: 0, Draw: 3, Win: 6 }
const outcomes = {
  RockLoss: 'Scissors',
  RockDraw: 'Rock',
  RockWin: 'Paper',
  PaperLoss: 'Rock',
  PaperDraw: 'Paper',
  PaperWin: 'Scissors',
  ScissorsLoss: 'Paper',
  ScissorsDraw: 'Scissors',
  ScissorsWin: 'Rock'
}

let score = 0

const lines = fs.readFileSync('./input.txt', 'utf8').split('\n').slice(0, -1)

lines.forEach((l) => {
  const you = outcomeScenario[l[2]]
  const opp = rps[l[0]]
  const outcome = outcomes[opp + you]
  score += choiceScore[outcome] + outcomeScore[you]
})

console.log(score)
