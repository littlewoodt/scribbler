
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
    var savecanvas;

    function init () {
      
      // Find the canvas element.
      canvas = document.getElementById('drawing');

      // Get the 2D canvas context.
      context = canvas.getContext('2d');

      // Pencil tool instance.
      tool = new tool_pencil();

      // TODO
      // Add eraser
      // Add paint
      // Add save
      // Select tool
      // Eraser tool instance
      // To to pixelate pen
      
      // Change size
      size = document.getElementById('size');

      // Get the colour select input
      swatch = document.getElementById('pallette');

      // Get the tool select input
      //tool = document.getElementById('tool');
      
      // Clear canvas
      clear = document.getElementById('clear');

      // save canvas
      savecanvas = document.getElementById('savecanvas'); //

      // Eraser tool
      eraser = document.getElementById('eraser');

      // Attach the mousedown, mousemove and mouseup event listeners.
      canvas.addEventListener('mousedown', ev_canvas, false);
      canvas.addEventListener('mousemove', ev_canvas, false);
      canvas.addEventListener('mouseup', ev_canvas, false);
    }

    // The painting tool works like a drawing pencil 
    // which tracks the mouse movements.

    // Pencil
    function tool_pencil () {
      var tool = this;
      this.started = false;

      // This is called when you start holding down the mouse button.
      // This starts the pencil drawing.

      // mousedown
      this.mousedown = function (ev) {
          context.beginPath();
          context.moveTo(ev._x, ev._y);
          tool.started = true;
      };

      // This function is called every time you move the mouse. 
      // but it only draws if the
      // tool.started state is set to true 
      // when you are holding down 
      // the mouse button

      // mousemove
      this.mousemove = function (ev) {
        if (tool.started) {
          context.lineWidth = size.value;
          context.lineCap = 'butt';
          context.lineJoin = 'miter';
          context.lineTo(ev._x, ev._y);

          // Attaches the color from the menu
          context.strokeStyle = swatch.value; // mike
          context.stroke();
        }
      };

      // This is called when you release the mouse button.
      // mouseup
      this.mouseup = function (ev) {
        if (tool.started) {
          tool.mousemove(ev);
          tool.started = false;
        }
      };
    }

    // The general-purpose event handler. This function just determines the mouse 
    // position relative to the canvas element.
    function ev_canvas (ev) {
      if (ev.layerX || ev.layerX === 0) { // Firefox
        ev._x = ev.layerX;
        ev._y = ev.layerY;
      } else if (ev.offsetX || ev.offsetX === 0) { // Opera
        ev._x = ev.offsetX;
        ev._y = ev.offsetY;
      }

      // Call the event handler of the tool.
      var func = tool[ev.type];
      if (func) {
        func(ev);
      }
    }

    init();

    // change stroke color
    // Event listener which listens to the 'palette' drop down menu, when it changes, it updates the strokeStyle property.
    swatch.addEventListener('change', function() {
      context.strokeStyle = swatch.value;
    });
    
    // clear canvas
    clear.addEventListener('click', function () {
      context.clearRect(0,0,300,300);
    });

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


    }
  }, false); }
