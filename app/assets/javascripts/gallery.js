$(document).ready(function() {
	if ($(".gallery").length > 0) {
		console.log(gon.picture);

		var gallery = $(".gallery");
		var ctx = gallery.getContext('2d');
		var img = new Image;
		
		img.src = gon.picture;
		img.onload = function() {
			ctx.drawImage(img, 10, 10)	
		}
		// All the code above is used to draw our image on the page, from what we have in the database.
	}
});