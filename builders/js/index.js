const console = require('console')
const readline = require('readline')
const makeStructure = require('./makeStructure')

module.exports = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  console.log('')
  console.log('Enter a complete year from 2015 onwards (YYYY)')
  rl.question('Year: ', (year) => {
    if (+year < 2015 || +year > 2022 || !+year) {
      console.log('')
      console.error('\x1b[31mInvalid input.')
    } else {
      makeStructure(year)
    }
    console.log('')
    rl.close()
  })
}
