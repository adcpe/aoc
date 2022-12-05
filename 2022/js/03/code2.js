const fs = require('fs')

const lines = fs.readFileSync('./input.txt', 'utf8').split('\n').slice(0, -1)

let priority = 0

function setPriority(char) {
  return char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90
    ? char.charCodeAt(0) - 38
    : char.charCodeAt(0) - 96
}

const newLines = []
for (let i = 0; i < lines.length / 3; i++) {
  const offset = i * 3
  const el = [lines[offset], lines[offset + 1], lines[offset + 2]]
  newLines.push(el)
}

newLines.forEach((l) => {
  const first = l[0]
  const second = l[1]
  const third = l[2]

  for (let i = 0; i < first.length; i++) {
    const char = first[i]
    if (second.match(char)) {
      if (third.match(char)) {
        priority += setPriority(char)
        break
      }
    }
  }
})

console.log(priority)
