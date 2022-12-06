const fs = require('fs')

const signal = fs.readFileSync('./input.txt', 'utf8').split('\n')[0]

for (let i = 0; i < signal.length - 14; i++) {
  const segment = signal.slice(i, i + 14).split('')
  const check = segment.some((element, index, array) => array.lastIndexOf(element) != index)
  if (!check) {
    console.log(i + 14)
    break
  }
}
