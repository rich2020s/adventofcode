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
  let arr = []
  const scoreBoard = {
    '(': 1,
    '[': 2,
    '{': 3,
    '<': 4
  }
  let scoreArr = []
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
    let illegalIndex = line.search(illegalRegex)
    if (illegalIndex === - 1)  arr.push(line)
  }
  for (let str of arr) {
    let scoreSum = 0
    for (let i = str.length - 1; i >= 0 ; i--) {
      scoreSum = scoreSum * 5 + scoreBoard[str[i]]
    }
    scoreArr.push(scoreSum)
  }
  scoreArr.sort(function (a, b) {
    return a - b;
  })
  console.log(scoreArr[Math.floor(scoreArr.length / 2)]) //2116639949
}