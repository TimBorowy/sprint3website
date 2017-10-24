console.log('hello!');


// testimonial slide show
var items =["test2.png", "test1.png", "test3.png"], counter = 1, previous = 0;

setInterval(
	function(){
		
		// get current item from formula
		var item = counter % 3;

		//fade out picture
		$('#testimonialPicture').css({'opacity': "0"});

		//place new picture after 500 miliseconds and fade it in
		setTimeout(function(){
			$('#testimonialPicture').css({'background-image': "url('../public/media/"+items[item]+"')"});
			$('#testimonialPicture').css({'opacity': "1"});
		}, 500);

		//fade out text and fade in new text after 500 miliseconds
		$('[data-id="'+previous+'"]').fadeOut(500, function(){
			$('[data-id="'+item+'"]').fadeIn(500);
		});

		// set current item to previous for the next loop
		previous = item;

		//increase counter
		counter++;
		
	}
, 4500); // each loop takes 4,5 seconds


var map;
function initMap() {
map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 51.920964, lng: 4.470492}, 
  zoom: 12
});
}