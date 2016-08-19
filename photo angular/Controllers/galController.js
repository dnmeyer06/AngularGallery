myApp.controller('galController', ['$scope', function($scope) {

$( ".grid-box" ).click(function() {
	$( "#landing").css("display", "none");
	$(".gallery").css("display", "none");
	$(".slideShow").css("display", "block");

	var location = $(this).data('place');
	var photosArray = photos[location];
	for (i = 0; i < photosArray.length; i++) {
		$( "#indGrid" ).append( "<div class='grid-box resizableImage' id='ind'><img src=" + photosArray[i] + "></div>")
	}
});

}])