console.log('hello!');


//if(document.getElementById('soortProject') != null) {
	var items =["websites", "blogs", "webtools"], arraySize = items.length, counter = 0, previous = null;

	setInterval(
		function(){
			
			var item = counter % 3;

			if(previous != null){
				$('[data-id="'+previous+'"]').fadeOut();
			}
			console.log("previous: "+previous);
			console.log("item: "+item);
			$('[data-id="'+item+'"]').fadeIn();

			previous = item;

			counter++;
			
		}
	, 1500);
//}

$("button").click(function(){
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
});

$("button").click(function(){
    $("#div1").fadeOut();
    $("#div2").fadeOut("slow");
    $("#div3").fadeOut(3000);
});
//# sourceMappingURL=all.js.map
