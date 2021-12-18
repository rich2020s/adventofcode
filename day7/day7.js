const fs = require('fs')
const read = fs.readFileSync("input.txt")
const data = read.toString().split(',').map(Number)

let sum = []
for (let i = 0; i < data.length; i++) {
  let fuel = 0
  for (let j = 0; j < data.length; j++) {
    fuel += Math.abs(data[i] - data[j])
  }
  sum.push(fuel)
}
console.log(Math.min(...sum))

//ans:328187