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
  let newArr = []
  let count = 0
  for (let line of lines) {
    arr.push(Number(line))
  }
  for (let i = 0; i < arr.length - 2; i++){
    newArr.push(Number(arr[i])+Number(arr[i+1])+Number(arr[i+2]))
  }
  for (let i = 1; i < newArr.length; i++) {
    if (newArr[i] > newArr[i-1]) count++
  }
console.log(count) //1248
}
