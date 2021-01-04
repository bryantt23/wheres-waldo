const waldoPic = document.querySelector('#waldo-pic');
const startSearch = document.querySelector('#start-search');
const board = document.querySelector('#board');

startSearch.addEventListener('click', () => {
  startSearch.classList.add('hidden');
  board.classList.remove('hidden');
});

waldoPic.addEventListener('click', event => {
  var x = event.pageX - this.offsetLeft;
  var y = event.pageY - this.offsetTop;
  //have to use this
  console.log('X Coordinate: ' + x + ' Y Coordinate: ' + y);
});

function printMousePos(event) {
  //   document.body.textContent =
  const msg = 'clientX: ' + event.clientX + ' - clientY: ' + event.clientY;
  console.log(msg);
}

/*
waldo
click on IMG at pixel (796.8789062499999,953.1484374999999) 
wenda
click on IMG at pixel (808.8789062500001,798.1484375) 

wizard
click on IMG at pixel (1194.0028409957886,1245.8920288085938)

*/

waldoPic.addEventListener('click', printMousePos);
waldoPic.addEventListener('click', function (event) {
  // https://stackoverflow.com/a/288731/1497139
  bounds = this.getBoundingClientRect();
  var left = bounds.left;
  var top = bounds.top;
  var x = event.pageX - left;
  var y = event.pageY - top;
  var cw = this.clientWidth;
  var ch = this.clientHeight;
  var iw = this.naturalWidth;
  var ih = this.naturalHeight;
  var px = (x / cw) * iw;
  var py = (y / ch) * ih;
  console.log(
    'click on ' +
      this.tagName +
      ' at pixel (' +
      px +
      ',' +
      py +
      ') mouse pos (' +
      x +
      ',' +
      y +
      ') relative to boundingClientRect at (' +
      left +
      ',' +
      top +
      ') client image size: ' +
      cw +
      ' x ' +
      ch +
      ' natural image size: ' +
      iw +
      ' x ' +
      ih
  );
});
