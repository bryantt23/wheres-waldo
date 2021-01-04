const waldoPic = document.querySelector('#waldo-pic');
const startSearch = document.querySelector('#start-search');
const board = document.querySelector('#board');
const waldoAvatar = document.querySelector('#waldo-avatar');
const wendaAvatar = document.querySelector('#wenda-avatar');
const wizardAvatar = document.querySelector('#wizard-avatar');
const result = document.querySelector('#result');

var elem = document.getElementById('my-stopwatch');
var timer = new Stopwatch(elem, { delay: 10 });

const foundCharacters = new Set();

startSearch.addEventListener('click', () => {
  startSearch.classList.add('hidden');
  board.classList.remove('hidden');
  // start the timer
  timer.start();
});

// waldoPic.addEventListener('click', event => {
//   var x = event.pageX - this.offsetLeft;
//   var y = event.pageY - this.offsetTop;
//   //have to use this
//   console.log('X Coordinate: ' + x + ' Y Coordinate: ' + y);
// });

function printMousePos(event) {
  //   document.body.textContent =
  const msg = 'clientX: ' + event.clientX + ' - clientY: ' + event.clientY;
  console.log(msg);
}

waldoPic.onclick = function clickEvent(e) {
  // e = Mouse click event.
  var rect = e.target.getBoundingClientRect();
  var x = e.clientX - rect.left; //x position within the element.
  var y = e.clientY - rect.top; //y position within the element.
  console.log('Left? : ' + x + ' ; Top? : ' + y + '.');
  const character = getCharacter(x, y);
  if (character) {
    foundCharacters.add(character);
    if (character === 'waldo') {
      waldoAvatar.classList.add('disabled');
    }
    if (character === 'wenda') {
      wendaAvatar.classList.add('disabled');
    }
    if (character === 'wizard') {
      wizardAvatar.classList.add('disabled');
    }
    if (foundCharacters.size === 3) {
      timer.stop();
      const time = timer.getTime();
      board.classList.add('disabled');
      result.textContent =
        'You found all of the characters in ' + time / 1000 + ' seconds';
    }
  }
};

// waldoPic.addEventListener('click', printMousePos);
// waldoPic.addEventListener('click', function (event) {
//   // https://stackoverflow.com/a/288731/1497139
//   bounds = this.getBoundingClientRect();
//   var left = bounds.left;
//   var top = bounds.top;
//   var x = event.pageX - left;
//   var y = event.pageY - top;
//   var cw = this.clientWidth;
//   var ch = this.clientHeight;
//   var iw = this.naturalWidth;
//   var ih = this.naturalHeight;
//   var px = (x / cw) * iw;
//   var py = (y / ch) * ih;
//   console.log(
//     'click on ' +
//       this.tagName +
//       ' at pixel (' +
//       px +
//       ',' +
//       py +
//       ') mouse pos (' +
//       x +
//       ',' +
//       y +
//       ') relative to boundingClientRect at (' +
//       left +
//       ',' +
//       top +
//       ') client image size: ' +
//       cw +
//       ' x ' +
//       ch +
//       ' natural image size: ' +
//       iw +
//       ' x ' +
//       ih
//   );

//   const character = getCharacter(px, py);
//   if (character) {
//     addToSet(character);
//     console.log(foundCharacters);
//   }
// });

/*
waldo
click on IMG at pixel (796.8789062499999,953.1484374999999) 
wenda
click on IMG at pixel (808.8789062500001,798.1484375) 

wizard
click on IMG at pixel (1194.0028409957886,1245.8920288085938)

*/

function getCharacter(px, py) {
  if (between(px, 775, 815) && between(py, 810, 850)) {
    return 'waldo';
  }
  if (between(px, 790, 830) && between(py, 655, 695)) {
    return 'wenda';
  }
  if (between(px, 1180, 1220) && between(py, 840, 880)) {
    return 'wizard';
  }
}

function between(num, min, max) {
  return num >= min && num <= max;
}
