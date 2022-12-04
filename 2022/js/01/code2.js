const fs = require('fs')

const values = []
let currentSum = 0

const lines = fs.readFileSync('./input.txt', 'utf8').split('\n')

lines.forEach((l) => {
  if (l !== '') {
    currentSum += +l
  } else {
    values.push(currentSum)
    currentSum = 0
  }
})

const sum = values
  .sort((a, b) => a - b)
  .slice(-3)
  .reduce((acc, currVal) => acc + currVal)

console.log(sum)
