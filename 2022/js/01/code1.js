const fs = require('fs')

let currentMax = 0
let currentSum = 0

const lines = fs.readFileSync('./input.txt', 'utf8').split('\n')

lines.forEach((l) => {
  if (l !== '') {
    currentSum += +l
  } else {
    if (currentSum > currentMax) currentMax = currentSum
    currentSum = 0
  }
})

console.log(currentMax)
