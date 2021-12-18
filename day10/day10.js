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
  const score = {
    ')': 3,
    ']': 57,
    '}': 1197,
    '>': 25137,
  }
  let arr = []
  let illegalScore = 0
  const regex = /\[]|\{}|\(\)|<>/g
  const illegalRegex = />|]|}|\)/
  for (let line of lines) {
    let run = true
    while(run) {
      if (line === line.replace(regex, '')) {
        run = false
      } else {
        line = line.replace(regex, '')
      } 
    }
    console.log(line)
    let illegalIndex = line.search(illegalRegex)
    if (illegalIndex !== -1)  illegalScore += score[line[illegalIndex]]
  }
  console.log(illegalScore) //Answer 374061
  }