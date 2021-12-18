const fs = require('fs');
const read = fs.readFileSync("input.txt");
const data = read.toString().split('\n').map(str => {
  return str.split(' -> ').map(s => s.split(',').map(Number))
})

function day5() {
  let points = {}
  for (let [[startX, startY],[endX,endY]] of data) {
    let arrX = [Math.min(startX,endX), Math.max(startX,endX)]
    let arrY = [Math.min(startY,endY), Math.max(startY,endY)]
    if (arrX[0] === arrX[1] || arrY[0] === arrY[1]) {
      for (let x = arrX[0]; x <= arrX[1]; x++) {
        for (let y = arrY[0]; y <= arrY[1]; y++) {
          let key = `(${x}, ${y})`
          points[key] = points[key] ? points[key] += 1 : 1 
        }
      }
    }
  }
  let sum = 0
  for (let num in points) {
    if (points[num] - 1 > 0) sum++
  }
  console.log(sum) //8350
}
day5()