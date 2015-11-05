
  
  // Keep everything in anonymous function, called on window load.

  if(window.addEventListener) {
  window.addEventListener('load', function () {

    if ($('#drawing').length > 0) {
    var canvas;
    var context;
    var tool;
    var swatch;
    var clear;
    var eraser;
    var size;
    var radius = size;
    var savecanvas;

    function init () {
      
      // Find the canvas element.
      canvas = document.getElementById('drawing');

      // Get the 2D canvas context.
      context = canvas.getContext('2d');

      // Pencil tool instance.
      // tool = new tool_pencil();

      // TODO
      // Add eraser
      // Add paint
      // Add save
      // Select tool
      // Eraser tool instance
      // To to pixelate pen
      
      // Change size
      //size = document.getElementById('size');

      // Get the colour select input
      // swatch = document.getElementById('pallette');

      // Get the tool select input
      //tool = document.getElementById('tool');
      
      // Clear canvas
      clear = document.getElementById('clear');

      // save canvas
      savecanvas = document.getElementById('savecanvas'); 

      // Eraser tool
      // eraser = document.getElementById('eraser');

      // Attach the mousedown, mousemove and mouseup event listeners.
      canvas.addEventListener('mousedown', engage);
      canvas.addEventListener('mousemove', putPoint);
      canvas.addEventListener('mouseup', disengage);
      savecanvas.addEventListener('click', saveImage);

    } // end init


/////////////////////////////////////////////////////
//                                                 //
//             Canvas drawing functions            //
//                                                 //
/////////////////////////////////////////////////////
  
var canvas = document.getElementById('drawing');
var context = canvas.getContext('2d');

var radius = 10;
var dragging = false;

var shape = "round";

//canvas.width = 635;
//canvas.height = 600;

context.lineWidth = radius;

var putPoint = function(e) {
  if (dragging) {
    if ( shape === "square" ) {
    //context.lineTo(e.clientX, e.clientY); //
    //context.lineWidth = radius; //
    //context.lineCap = 'butt'; //
    context.lineJoin = 'miter'; //
    context.stroke();  
    context.rect(e.clientX,e.clientY,radius,radius); // for an 8byte look
    context.fill();
    context.beginPath();
    context.moveTo(e.clientX,e.clientY);
    }
    else {
    context.lineTo(e.clientX, e.clientY);
    context.stroke();
    context.beginPath(); // clears path
    context.arc(e.clientX,e.clientY, radius, 0, Math.PI*2);
    context.fill();
    context.beginPath();
    context.moveTo(e.clientX,e.clientY);
    }
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


canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mousemove', putPoint);
canvas.addEventListener('mouseup', disengage);


/////////////////////////////////////////////////////

/////////////////////////////////////////////////////

/////////////////////////////////////////////////////



init();



/////////////////////////////////////////////////////
//                                                 //
//                     Tools                       //
//                                                 //
/////////////////////////////////////////////////////



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

var minRad = 5,
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


/////////////////////////////////////////////////////

/////////////////////////////////////////////////////

/////////////////////////////////////////////////////


init();


/////////////////////////////////////////////////////
//                                                 //
//                     Colors                      //
//                                                 //
/////////////////////////////////////////////////////

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


/////////////////////////////////////////////////////

/////////////////////////////////////////////////////

/////////////////////////////////////////////////////



for (var i =0, n=colors.length; i<n; i++ ) {
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

// create active swatch
function setSwatch(e) {
  // identify swatch
  var swatch = e.target;
  // set color
  setColor(swatch.style.backgroundColor); // can use anything
  // active class
  swatch.className += ' active'; // need space to sepearate classes
}

setSwatch({target: document.getElementsByClassName('swatch')[0]});

/////////////////////////////////////////////////////

/////////////////////////////////////////////////////

/////////////////////////////////////////////////////


init();


/////////////////////////////////////////////////////
//                                                 //
//                      clear                      //
//                                                 //
/////////////////////////////////////////////////////

//clear.addEventListener('click', function () {
  //context.clearRect(0,0,600,600);
//});


var clearButton = document.getElementById('clear');
var clear = function () {
  context.clearRect(0, 0, canvas.width, canvas.height);
}
clearButton.addEventListener('click', clear);



/////////////////////////////////////////////////////
//                                                 //
//                       save                      //
//                                                 //
/////////////////////////////////////////////////////

    // save canvas
    savecanvas.addEventListener('click', saveImage);


    //This is the function to save our image data
    function saveImage() {
      var picture = canvas.toDataURL("image/png");
      // var dataUrl = canvas.toDataURL(); saves to a new window

      $.ajax({
        type: "POST",
        url: "/save_image",
        data: { picture: picture }
      });

  }

init();

    } // end if drawing.length > 0

}, false); }
