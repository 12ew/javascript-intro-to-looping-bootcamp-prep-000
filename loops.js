function forLoop(array) {
   for ( let i = 0; i < 25; i++) {
     if (i === 1) {
       array.push(`I am 1 strange loop.`)
     } else {
       array.push(`I am ${i} strange loops.`)
     }
  }
  return array;
}

function whileLoop(number) {

    while (number > 0) {
      console.log(--number)
    }
    return "done";
  }
  
  /* 
  function whileLoop(number) {
  let countdown = number;
  
  while (countdown > 0) {
    console.log(--countdown);
  } 
    return "done";
}
*/

function doWhileLoop(array) {
  array.length > 0 && doWhileLoop("")
}

do {
  console.log('false')
} while (doWhileLoop(array));


