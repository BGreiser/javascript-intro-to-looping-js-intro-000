function forLoop(x){
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      x.push("I am 1 strange loop.")
    } else {
      x.push(`I am ${i} strange loops`)
    }// end else
  }// end for loop
  return x;
}// end function


function whileLoop(x) {
  while (x > 0) {
    console.log(x);
    x--
  }
  return "done"
}

function doWhileLoop(n) {
  let i = 0;
  let incrementVariable = () => {
    i = i + 1;
    return i
  }
  do {
    console.log("I run once regardless");
  } while (incrementVariable() < n)
}
