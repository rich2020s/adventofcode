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
  let arr = Array(lines[0].length).fill(0)
  let gamma = ''
  let epsilon = ''
  const linesLength = lines.length
  const strLength = lines[0].length
  for (let i = 0; i < linesLength; i++){
    for (let j =0; j < strLength; j++){
      if (lines[i][j] === '1') arr[j] += 1
    }
  }
  for (let ele of arr) {
    if (ele > linesLength/2) gamma += '1'
    else gamma += '0'
  }
  for (let ele of gamma) {
    if (ele === '0') epsilon +='1'
    else epsilon +='0'
  }
  let gammaRate = parseInt(gamma, 2)
  let epsilonRate = parseInt(epsilon, 2)
  console.log(gammaRate * epsilonRate) //3242606
}