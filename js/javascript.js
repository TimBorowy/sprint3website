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

var styledMapType = new google.maps.StyledMapType(
           [
			  {
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#212121"
			      }
			    ]
			  },
			  {
			    "elementType": "labels.icon",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#757575"
			      }
			    ]
			  },
			  {
			    "elementType": "labels.text.stroke",
			    "stylers": [
			      {
			        "color": "#212121"
			      }
			    ]
			  },
			  {
			    "featureType": "administrative",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#757575"
			      }
			    ]
			  },
			  {
			    "featureType": "administrative.country",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#9e9e9e"
			      }
			    ]
			  },
			  {
			    "featureType": "administrative.land_parcel",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "featureType": "administrative.locality",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#bdbdbd"
			      }
			    ]
			  },
			  {
			    "featureType": "poi",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#757575"
			      }
			    ]
			  },
			  {
			    "featureType": "poi.business",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "featureType": "poi.park",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#181818"
			      }
			    ]
			  },
			  {
			    "featureType": "poi.park",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#616161"
			      }
			    ]
			  },
			  {
			    "featureType": "poi.park",
			    "elementType": "labels.text.stroke",
			    "stylers": [
			      {
			        "color": "#1b1b1b"
			      }
			    ]
			  },
			  {
			    "featureType": "road",
			    "elementType": "geometry.fill",
			    "stylers": [
			      {
			        "color": "#2c2c2c"
			      }
			    ]
			  },
			  {
			    "featureType": "road",
			    "elementType": "labels.icon",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "featureType": "road",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#8a8a8a"
			      }
			    ]
			  },
			  {
			    "featureType": "road.arterial",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#373737"
			      }
			    ]
			  },
			  {
			    "featureType": "road.highway",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#3c3c3c"
			      }
			    ]
			  },
			  {
			    "featureType": "road.highway.controlled_access",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#4e4e4e"
			      }
			    ]
			  },
			  {
			    "featureType": "road.local",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#616161"
			      }
			    ]
			  },
			  {
			    "featureType": "transit",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "featureType": "transit",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#757575"
			      }
			    ]
			  },
			  {
			    "featureType": "water",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#000000"
			      }
			    ]
			  },
			  {
			    "featureType": "water",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#3d3d3d"
			      }
			    ]
			  }
			],
{name: 'Styled Map'});


map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 51.917389, lng: 4.484975}, 
  zoom: 12,
  mapTypeControlOptions: {
       	mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
        }
});

map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');
}


/* progress checkout */

var step1 = $('#step-1');
var step2 = $('#step-2');
var step3 = $('#step-3');
var step4 = $('#step-4');

//step 1
$('#doesHaveAccount').click(function(e){
	e.preventDefault();

	if(validateLogin()){

		$('.checkout-item:first').addClass('done');
		$('.checkout-item:nth(1)').addClass('done');
		$('.checkout-item:nth(2)').addClass('active');
		step1.hide();
		step3.css({'display': 'flex'});
	}
});
//step 1
$('#doesNotHaveAccount').click(function(e){
	e.preventDefault();
	$('.checkout-item:first').addClass('done');
	$('.checkout-item:nth(1)').addClass('active');
	step1.hide();
	step2.css({'display': 'flex'});
});
// step 2
$('#shippingDetails').click(function(e){
	e.preventDefault();

	if(validateShippingForm()){

		$('.checkout-item:nth(1)').addClass('done');
		$('.checkout-item:nth(2)').addClass('active');


		$('#order_name').html($('#name').val());
		$('#order_address').html($('#address').val());
		$('#order_postalcode').html($('#postalcode').val());
		$('#order_city').html($('#city').val());
		$('#order_country').html($('#country').val());

		step2.hide();
		step3.css({'display': 'flex'});
	}
});

// step 3
$('.paymentOption').click(function(e){
	e.preventDefault();
	$('.checkout-item:nth(2)').addClass('done');
	$('.checkout-item:nth(3)').addClass('active');
	step3.hide();
	step4.css({'display': 'flex'});
});


function validateShippingForm(){
	var name = $('#name').val();
	var address = $('#address').val();
	var postalcode = $('#postalcode').val();
	var city = $('#city').val();
	var country = $('#country').val();

	if (name == "" || address == "" || postalcode == "" || postalcode.length != 6 || city == "" || country == "") {
        alert("Alle velden moeten ingevuld worden");
        return false;
    }
    return true;
    
}

function validateLogin(){
	var email = $('#emailAddress').val();
	var password = $('#password').val();

	if (email == "" || !validateEmail(email) || password == "") {
        alert("Alle velden moeten ingevuld worden");
        return false;
    }
    return true;

}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

