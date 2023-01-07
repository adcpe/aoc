const fs = require('fs')
const path = require('path')

function resolvePath() {
  return path.resolve(path.join(...arguments))
}

function processDay(day) {
  return day < 10 ? `0${day}` : `${day}`
}

module.exports = (year) => {
  const fullPath = resolvePath('./', year, 'js')

  fs.mkdirSync(fullPath, { recursive: true })

  for (let i = 1; i <= 25; i++) {
    const day = processDay(i)
    const dayPath = resolvePath('./', year, 'js', day)

    const md = `# Day ${i}\n\nSource: [https://adventofcode.com/${year}/day/${i}]\n`
    const solutions = `Part 1: \nPart 2: \n`

    const files = [
      [`${dayPath}/code1.js`, ''],
      [`${dayPath}/code2.js`, ''],
      [`${dayPath}/README.md`, md],
      [`${dayPath}/solution.txt`, solutions]
    ]

    fs.mkdirSync(dayPath, { recursive: true })

    files.forEach((f) => {
      if (!fs.existsSync(f[0])) fs.writeFileSync(f[0], f[1])
    })
  }
}
