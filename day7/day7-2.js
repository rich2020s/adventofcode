const fs = require('fs')
const read = fs.readFileSync("input.txt")
const data = read.toString().split(',').map(Number)

let sum = []
const max = Math.max(...data)
const min = Math.min(...data)
for (let i = min; i <= max; i++) {
  let fuel = 0
  for (let j = 0; j < data.length; j++) {
    fuel += add(Math.abs(i - data[j]))
  }
  sum.push(fuel)
}
console.log(Math.min(...sum)) //91257582

function add(n) {
  let sum = 0
  for (i = 1; i <= n; i++) {
    sum += i
  }
  return sum
}