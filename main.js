var readline = require('readline');
const count = require("./count.js");
var n;
var d;
var lineNumber = 0;
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', readLine);
  console.log("Give the power of 10:");
function readLine(line){
  if (lineNumber == 0) {
       if (!isNaN(parseInt(line))) {
           n = parseInt(line);
           lineNumber++;
           console.log("Give the digit d:");
         }else{
           console.log("Invalid input");
         }
  } else {
           d=parseInt(line);
           console.log(`There are ${count.countDigit(n,d)} numbers that contain %d in the interval 0-10 to power %d`,d,n);
           process.exit();
    }
}
