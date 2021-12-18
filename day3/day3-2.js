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
  const strLength = lines[0].length
  let oxygen = [...lines]
  let co2 = [...lines]
  for (let i = 0; i < strLength; i++) {
    let count = 0
    let remainNum
    for (let ele of oxygen) {
      if (ele[i] === '1') count++  
    }
    if (count < oxygen.length/2) remainNum = '0'
    else remainNum = '1'
    if (oxygen.length === 1) break;
    oxygen = oxygen.filter((e) => (e[i] === remainNum)) 
  }
  for (let i = 0; i < strLength; i++) {
    let count = 0
    let remainNum
    for (let ele of co2) {
      if (ele[i] === '0') count++  
    }
    if (count > co2.length/2) remainNum = '0'
    else remainNum = '1'
    if (co2.length === 1) break;
    co2 = co2.filter((e) => (e[i] !== remainNum))
  }
  console.log(oxygen)
  console.log(co2)
  console.log(parseInt(oxygen, 2) * parseInt(co2, 2)) //4856080
}