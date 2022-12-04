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

  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true })

    for (let i = 1; i <= 25; i++) {
      const day = processDay(i)
      const dayPath = resolvePath('./', year, 'js', day)

      const md = `# Day ${i}\n\nSource: [https://adventofcode.com/${year}/day/${i}]`

      fs.mkdirSync(dayPath, { recursive: true })
      fs.writeFileSync(`${dayPath}/code.js`, '')
      fs.writeFileSync(`${dayPath}/input.txt`, '')
      fs.writeFileSync(`${dayPath}/README.md`, md)
      fs.writeFileSync(`${dayPath}/solution.txt`, '')
    }
  }
}
