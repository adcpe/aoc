const fs = require('fs')

const lines = fs
  .readFileSync('./input.txt', 'utf8')
  .split('\n')
  .slice(0, -1)
  .map((el) => el.split(/\W/).map((e) => +e))

let contained = 0

lines.forEach((l) => {
  const min = Math.min(...l)
  const max = Math.max(...l)

  if ((l[0] === min && l[1] === max) || (l[2] === min && l[3] === max)) {
    contained += 1
  }
})

console.log(contained)
