const fs = require('fs')
const read = fs.readFileSync("input.txt")
const data = read.toString().split(',').map(Number)

let sum = []
const max = Math.max(...data)
const min = Math.min(...data)
// for (let i = 0; i < data.length; i++) {
for (let i = min; i <= max; i++) {
  let fuel = 0
  for (let j = 0; j < data.length; j++) {
    fuel += add(Math.abs(i - data[j]))
    // console.log(fuel)
  }
  sum.push(fuel)
}
console.log(Math.min(...sum))
// console.log(sum)
function add(n) {
  let sum = 0
  for (i = 1; i <= n; i++) {
    sum += i
  }
  return sum
}