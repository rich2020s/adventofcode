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
  // let map = [...arr]
  let obj = {}
  const maxX = arr[0].length
  const maxY = arr.length
  for (let y = 0; y < maxY; y++) {
    for (let x = 0; x < maxX; x++) {
      if (lowest(y,x)) obj[`${x},${y}`] = [y,x]
    }
  }
  let ans = []
  // console.log(map)
  for (let key in obj) {
    ans.push(countPoints(obj[key][0],obj[key][1],0))
  }
  ans = ans.sort((a,b) => b - a)
  console.log(ans[0] * ans[1] * ans[2])
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
  function countPoints(y,x) {
    if (arr[y][x] === 9 || arr[y][x] === '.') return 0
    let sum = 1
    arr[y][x] = '.'
    if (x + 1 < maxX)  sum += countPoints(y,x+1)
    if (y - 1 >= 0) sum += countPoints(y-1,x)
    if (x - 1 >= 0)  sum += countPoints(y,x-1)
    if (y + 1 < maxY) sum += countPoints(y+1,x)
    return sum
  }
}