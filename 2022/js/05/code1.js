const fs = require('fs')

const lines = fs.readFileSync('./input.txt', 'utf8').split('\n').slice(0, -1)

const stacks = {}
const orders = []

// separete stacks from orders
lines.forEach((l) => {
  if (l[0] === '[') {
    let condition = true
    let stack = 1
    let col = 1

    while (condition) {
      if (l[col] !== ' ') {
        if (!stacks[stack]) stacks[stack] = []
        stacks[stack].unshift(l[col])
      }

      stack += 1
      col += 4
      if (!l[col]) condition = false
    }
  }

  if (l[0] === 'm') orders.push(l.match(/\d+/g))
})

// execute orders
orders.forEach((o) => {
  for (let i = 0; i < o[0]; i++) {
    const from = o[1]
    const to = o[2]
    const crate = stacks[from][stacks[from].length - 1]
    stacks[to].push(crate)
    stacks[from].pop()
  }
})

// get last crate from each stack
let top = ''
let condition = true
let stack = 1
while (condition) {
  top += stacks[stack][stacks[stack].length - 1]
  stack += 1
  if (!stacks[stack]) condition = false
}

console.log(top)
