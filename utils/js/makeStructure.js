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

      fs.mkdirSync(dayPath, { recursive: true })
      fs.writeFileSync(`${dayPath}/README.md`, '')
      fs.writeFileSync(`${dayPath}/input.txt`, '')
      fs.writeFileSync(`${dayPath}/code.js`, '')
      fs.writeFileSync(`${dayPath}/solution.txt`, '')
    }
  }
}
