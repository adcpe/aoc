const fs = require('fs')

const rps = { A: 'Rock', B: 'Paper', C: 'Scissors', X: 'Rock', Y: 'Paper', Z: 'Scissors' }
const choiceScore = { Rock: 1, Paper: 2, Scissors: 3 }
const outcomeScore = { Loss: 0, Draw: 3, Win: 6 }
const outcomes = {
  RockRock: 'Draw',
  RockPaper: 'Loss',
  RockScissors: 'Win',
  PaperRock: 'Win',
  PaperPaper: 'Draw',
  PaperScissors: 'Loss',
  ScissorsRock: 'Loss',
  ScissorsPaper: 'Win',
  ScissorsScissors: 'Draw'
}

let score = 0

const lines = fs.readFileSync('./input.txt', 'utf8').split('\n').slice(0, -1)

lines.forEach((l) => {
  const you = rps[l[2]]
  const opp = rps[l[0]]
  const outcome = outcomes[you + opp]
  score += choiceScore[you] + outcomeScore[outcome]
})

console.log(score)
