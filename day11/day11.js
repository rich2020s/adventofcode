var readline = require('readline');
const { isArray } = require('util');

var lines = []
let temp = ''
var rl = readline.createInterface({
  input: process.stdin
});

rl.on('line', function (line) {
  lines.push(line.split('').map(Number))
});

rl.on('close', function() {
  solve(lines)
})

function solve(matrix) {
  const steps = 7419
  const matrixLen = matrix.length
  const arrLen = matrix[0].length
  let flashCounter = 0
  for (let step = 0; step < steps; step++) {
    for (let i = 0; i < matrixLen; i++) {
      for (let j = 0; j < arrLen; j++) {
        matrix[i][j] += 1      
      }
    }

    for (let i = 0; i < matrixLen; i++) {
      for (let j = 0; j < arrLen; j++) {
        if (matrix[i][j] > 9) {
          flashCounter += 1
          matrix[i][j] = 0
          increaseEnergy(i, j)
        }
      }
    }
  }
  console.log(matrix)
  console.log(flashCounter) //1546
  function increaseEnergy(lines, coord) {
    const top = lines - 1
    const left = coord - 1
    const bottom = lines + 1
    const right = coord + 1
    if (top >= 0) {
      if (left >= 0) {
        if (matrix[top][left] !== 0) matrix[top][left] += 1
        if (matrix[top][left] === 10) {
          flashCounter += 1
          increaseEnergy(top, left)
          matrix[top][left] = 0
        }
      }
        if (matrix[top][coord] !== 0) matrix[top][coord] += 1
        if (matrix[top][coord] === 10) {
          flashCounter += 1
          increaseEnergy(top, coord)
          matrix[top][coord] = 0 
        }  
      if (right < arrLen) {
        if (matrix[top][right] !== 0) matrix[top][right] += 1
        if (matrix[top][right] === 10) {
          flashCounter += 1
          increaseEnergy(top, right)
          matrix[top][right] = 0
        }
      }
    }
    if (left >= 0) {
      if (matrix[lines][left] !== 0) matrix[lines][left] += 1
        if (matrix[lines][left] === 10) {
          flashCounter += 1
          increaseEnergy(lines, left)
          matrix[lines][left] = 0
        }
    }
    if (right < arrLen) {
      if (matrix[lines][right] !== 0) matrix[lines][right] += 1
        if (matrix[lines][right] === 10) {
          flashCounter += 1
          increaseEnergy(lines, right)
          matrix[lines][right] = 0
        }
    }


    if (bottom < matrixLen) {
      if (left >= 0) {
        if (matrix[bottom][left] !== 0) matrix[bottom][left] += 1
        if (matrix[bottom][left] === 10) {
          flashCounter += 1
          increaseEnergy(bottom, left)
          matrix[bottom][left] = 0
        }
      }
        if (matrix[bottom][coord] !== 0) matrix[bottom][coord] += 1
        if (matrix[bottom][coord] === 10) {
          flashCounter += 1
          increaseEnergy(bottom, coord)
          matrix[bottom][coord] = 0 
        }  
      if (right < arrLen) {
        if (matrix[bottom][right] !== 0) matrix[bottom][right] += 1
        if (matrix[bottom][right] === 10) {
          flashCounter += 1
          increaseEnergy(bottom, right)
          matrix[bottom][right] = 0
        }
      }
    }
  }
}