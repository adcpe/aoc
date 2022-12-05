const fs = require('fs')

const lines = fs.readFileSync('./input.txt', 'utf8').split('\n').slice(0, -1)

let priority = 0

function setPriority(char) {
  return char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90
    ? char.charCodeAt(0) - 38
    : char.charCodeAt(0) - 96
}

lines.forEach((l) => {
  const length = l.length / 2
  const part1 = l.slice(0, length)
  const part2 = l.slice(length)

  for (let i = 0; i < length; i++) {
    const char = part1[i]
    if (part2.match(char)) {
      priority += setPriority(char)
      break
    }
  }
})

console.log(priority)
