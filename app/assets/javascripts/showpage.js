$(document).ready(function() {
	if ($(".showCanvas").length > 0) {
		console.log(gon.picture);

		var showCanvas = $(".showCanvas")[0];
		var ctx = showCanvas.getContext('2d');
		var img = new Image;
		
		img.src = gon.picture;
		img.onload = function() {
			ctx.drawImage(img, 20, 20)	
			ctx.drawImage(img, 600, 600)	
		}
		// All the code above is used to draw our image on the page, from what we have in the database.
	}
});