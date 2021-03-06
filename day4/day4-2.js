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
  let bingos = [[]]
  const luckyNumber = lines[0].split(',')
  let bingoNumber
  let bingoIndex
  let sum = 0
  for (let i = 2 ; i < lines.length; i++) {
    if (lines[i] === '') {
      bingos.push([])
      continue
    }
    bingos[bingos.length - 1].push(lines[i])
  }
  for (let i = 0; i < bingos.length; i++) {
    for (let j = 0; j < 5; j++) {
      bingos[i][j] = bingos[i][j].trim().split(/\s+/)
    }
  }
  for (let i = 0; i < luckyNumber.length; i++) {
    bingos.forEach((bingo, index, arr) => {
      bingo.forEach((bin, index, arr) => {
        bin.forEach((b, index, arr) => {
          if (Number(b) === Number(luckyNumber[i])) arr[index] = 'X'
          else if (Number(luckyNumber[i]) === 16) console.log(b)
      })
    })
  })
    bingos.forEach((bingo, index, arr) => {
      if (isBingo(bingo) && bingos.length !== 1) arr.splice(index,1)
      else if (isBingo(bingo) && bingos.length === 1) {
        bingoNumber = luckyNumber[i]
      }
    })
    if (bingoNumber) break
  }
  for (let ele of bingos[0]) {
    for (let e of ele) {
      if (e !== 'X') sum += Number(e)
    }
  }
  console.log(sum*bingoNumber) //23541
}

function isBingo(arr) {
  for (let ele of arr) {
    let count = 0
    for (let e of ele) {
      if (e === 'X') count++
    }
  if (count === 5) return true
  }
  for (let i = 0; i < arr.length; i++) {
    let count = 0
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][i] === 'X') count++
    }
  if (count === 5) return true
  }
return false
}
