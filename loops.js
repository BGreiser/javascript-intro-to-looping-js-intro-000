function forLoop([x]){
  x = [];
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      x.push("I am 1 strange loop.")
    } else {
      x.push(`I am ${i} strange loops`)
    }// end else
  }// end for loop
}// end function
