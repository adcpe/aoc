const fs = require('fs')

const lines = fs
  .readFileSync('./input.txt', 'utf8')
  .split('\n')
  .slice(0, -1)
  .map((el) => el.split(/\W/).map((n) => +n))

let overlap = 0

lines.forEach((l) => {
  const min = Math.min(...l)
  const max = Math.max(...l)

  if ((l[1] >= l[2] && l[0] <= l[2]) || (l[3] >= l[0] && l[2] <= l[0])) {
    overlap += 1
  }
})

console.log(overlap)
