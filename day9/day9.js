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
  for (let line of lines){
    arr.push(line.split('').map(Number))
  }
  let obj = {}
  const maxX = arr[0].length
  const maxY = arr.length
  for (let y = 0; y < maxY; y++) {
    for (let x = 0; x < maxX; x++) {
      if (lowest(y,x)) obj[`${x},${y}`] = arr[y][x]
    }
  }
  let ans = 0
  for (let key in obj) {
    ans += obj[key] + 1
  }
  console.log(ans) //526
function lowest(y,x){
    let num = arr[y][x]
    if (x-1 >= 0) {
      if (num >= arr[y][x - 1]) return false
    }
    if (x + 1 < maxX) {
      if (num >= arr[y][x + 1]) return false
    }
    if (y - 1 >= 0) {
      if (num >= arr[y - 1][x]) return false  
    }
    if (y + 1 < maxY) {
      if (num >= arr[y + 1][x]) return false
    }
    return true
  }
}