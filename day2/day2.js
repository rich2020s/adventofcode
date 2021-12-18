var readline = require('readline');
const { isArray } = require('util');

var lines = []
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
  let arr = []
  let x = 0
  let y = 0
  let aim = 0
  for (let line of lines) {
    let direction = line.split(' ')
    if (direction[0] === 'forward'){
      x += Number(direction[1])
      y += aim * Number(direction[1])
    } else if (direction[0] === 'up'){
      // y -= Number(direction[1])
      aim -= Number(direction[1])
    } else if (direction[0] === 'down'){
      // y += Number(direction[1])
      aim += Number(direction[1])
    }
  }
   console.log(x,y, x*y)
}