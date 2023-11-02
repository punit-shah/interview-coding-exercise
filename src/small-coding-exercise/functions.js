// ms: number of milliseconds
// returns a Promise that is resolved after ms milliseconds
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// el: element node object
// moves the element to the right by 100px over a duration of 1 second
function animateRight(el) {
  el.style.transition = 'left 1s linear';
  el.style.left = (parseInt(el.style.left) || 0) + 100 + 'px';
}

// xs: array
// returns: a new array, with unique items
function removeDuplicates(xs) {
  return [...new Set(xs)];
}
