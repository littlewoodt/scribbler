$(document).ready(function() {
	if ($(".gallery").length > 0) {
		// var currentImage = [];
		// var ctx = [];
		// var img = [];

		console.log('this is running');
		for (var i = 0; i < gon.pictures.length; i++) {

			currentImage = $(".galleryCanvas")[i];
			ctx = currentImage.getContext('2d');
			img = new Image;
			
			img.src = gon.pictures[i].picture;
			
			ctx.drawImage(img,10,10,100,100)	
		}
		// All the code above is used to draw our image on the page, from what we have in the database.
	}
});