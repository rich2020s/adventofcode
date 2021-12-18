var readline = require('readline');
const { isArray } = require('util');

var lines = []
let temp = ''
var rl = readline.createInterface({
  input: process.stdin
});

rl.on('line', function (line) {
  lines.push(line)
});

rl.on('close', function() {
  solve(lines)
})
function solve(lines) {
  let fish = lines[0].split(',').map(Number)
  const days = 256
  for (let i = 0; i < days; i++) {
    let count = 0
    fish = fish.map((day) => {
      if (day !== 0) day -= 1
      else { 
        day = 6
        count++
      }
      return day
    })
    for (let i = 0; i < count; i++) {
      fish.push(8)
    }
  }
  console.log(fish.length)
}