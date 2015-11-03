////////////////////////////////////
//             Canvas             //
////////////////////////////////////

  
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var radius = 10;
var dragging = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.lineWidth = 20;

var putPoint = function(e) {
  if (dragging) {
    context.lineTo(e.clientX, e.clientY);
    context.stroke();
    context.beginPath(); // clears path
    context.arc(e.clientX,e.clientY, radius, 0, Math.PI*2);
    //context.rect(e.clientX,e.clientY,10,10); // for an 8byte look
    context.fill();
    context.beginPath();
    context.moveTo(e.clientX,e.clientY);
  }
}

var engage = function(e) {
  dragging = true;
  putPoint(e);
}

var disengage = function() {
  dragging = false;
  context.beginPath();
}

// canvas.addEventListener('mousedown', putPoint); // simplest puts a circle at mouse down
canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mousemove', putPoint);
canvas.addEventListener('mouseup', disengage);



////////////////////////////////////
//             Tools              //
////////////////////////////////////

var setRadius = function (newRadius) {
  if (newRadius<minRad) {
    newRadius = minRad;
  } else if (newRadius>maxRad) {
    newRadius = maxRad;
  }
  radius = newRadius;
  context.lineWidth = radius * 2;
  radSpan.innerHTML = radius;
}

var minRad = 0.5,
    maxRad = 100,
    defaultRad = 20,
    interval = 5,
    radSpan = document.getElementById('radval'),
    decRad = document.getElementById('decrad'),
    incRad = document.getElementById('incrad');

decRad.addEventListener('click', function() {
  setRadius(radius-interval);
});

incRad.addEventListener('click', function() {
  setRadius(radius+interval);
});

setRadius(defaultRad);










////////////////////////////////////
//             Colors             //
////////////////////////////////////

var colors = [
      "rgba(255, 255, 255, 1)",        
      "rgba(255, 127, 254, 1)",
      "rgba(255, 127, 191, 1)",
      "rgba(255, 127, 127, 1)",
      "rgba(255, 191, 127, 1)",
      "rgba(254, 255, 127, 1)",
      "rgba(191, 255, 127, 1)",
      "rgba(127, 255, 127, 1)",
      "rgba(127, 255, 191, 1)",
      "rgba(127, 254, 255, 1)",
      "rgba(127, 191, 255, 1)",
      "rgba(127, 127, 255, 1)",
      "rgba(191, 127, 255, 1)",
      "rgba(150, 150, 150, 1)",
      "rgba(255, 0, 254, 1)",
      "rgba(255, 0, 127, 1)",
      "rgba(255, 0, 0, 1)",
      "rgba(255, 127, 0, 1)",
      "rgba(254, 255, 0, 1)",
      "rgba(127, 255, 0, 1)",
      "rgba(0, 255, 0, 1)",
      "rgba(0, 255, 127, 1)",
      "rgba(0, 254, 255, 1)",
      "rgba(0, 127, 255, 1)",
      "rgba(0, 0, 255, 1)",
      "rgba(127, 0, 255, 1)",
      "rgba(0, 0, 0, 1)",
      "rgba(127, 0, 127, 1)",
      "rgba(127, 0, 63, 1)",
      "rgba(127, 0, 0, 1)",
      "rgba(127, 63, 0, 1)",
      "rgba(127, 127, 0, 1)",
      "rgba(63, 127, 0, 1)",
      "rgba(0, 127, 0, 1)",
      "rgba(0, 127, 63, 1)",
      "rgba(0, 127, 127, 1)",
      "rgba(0, 63, 127, 1)",
      "rgba(0, 0, 127, 1)",
      "rgba(63, 0, 127, 1)"
];


for (var i =0, n=colors.length; i<n; i++ ) { // was
  var swatch = document.createElement('div');
  swatch.className = 'swatch';
  swatch.style.backgroundColor = colors[i];
  swatch.addEventListener('click', setSwatch);
  document.getElementById('colors').appendChild(swatch);
}

function setColor(color) {
  context.fillStyle = color;
  context.strokeStyle = color;
  var active = document.getElementsByClassName('active')[0];
  if (active) {
    active.className = 'swatch';
  }
}

function setSwatch(e) {
  // identify swatch
  var swatch = e.target;
  // set color
  setColor(swatch.style.backgroundColor); // can use anything
  // active class
  swatch.className += ' active'; // need space to sepearate classes
}

setSwatch({target: document.getElementsByClassName('swatch')[0]});