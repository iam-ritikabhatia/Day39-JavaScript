// Math.log10() method is used to find the log, in canse of base 10.


let a = Math.log10(Math.E);
let b = a.toFixed(4);
console.log(b); // 0.4343
console.log(typeof(b)); // string
console.log(typeof(a)); // nummber


/**********************log1p******************************/
// Math.log1p(x) = log of (1+x) in case of base is e.

console.log(Math.log1p(5)); // 1.791759469228055


/***********************log2p***************************/

// Math.log2() method is used to find the log in case of base is 2.

console.log(Math.log2(6)); // 2.584962500721156


/***************max****************/
// Math.max() method is used to find the maximum number from the input parameters.

console.log(Math.max(1,6,9,90,56,8197634,8e+10)); // 80000000000



let AnArray = [1, 2, 7987, 98740787079, 8e+46];
console.log(Math.max(...AnArray));

// ... is called as spread syntax, it allows iterable to be expended into indvidual elements.

// Like here we have to iterate the array elements one by one


/******************min***************/

// Math.min() method is used to find the smallest number in the input parameters


let a = [5,6,7,9,-36,-2e-10,-100];

console.log(Math.min(...a)); // -100



/*********************************pow************************/
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Math.pow() Method</title>
  </head>
  <body>
    <h2>
      We are using html file because node.js does not support prompt() function,
      prompt() function is used to get the input from the user
    </h2>

    <h3><b>Finding Power</b></h3>

    <mark><h1>Math.pow(x, y) = x<sup>y</sup></h1></mark>
    <div id="main">
      <input type="text" id="x" placeholder="Write the value of x" />
      <input type="text" id="y" placeholder="Write the value of y" />
      <button id="calculate" onclick="Calculate()">Calculate</button>
      <h3 id="ans"></h3>
    </div>
  </body>

  <script>
    const Calculate = function () {
      let valueX = document.getElementById("x").value;
      let valueY = document.getElementById("y").value;
      let answer = document.getElementById("ans");

      if (valueX < 0 && 0 <= valueY && valueY < 1) {
        return alert(
          "Please make sure the value of x >= 0, in case of 0 <= y < 1. Otherwise the answer is NaN"
        );
      } else {
        return (answer.innerHTML = "The answer is " + Math.pow(valueX, valueY));
      }
    };
  </script>
</html>