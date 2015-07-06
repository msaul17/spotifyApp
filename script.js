$(function() {

  // your code here
  // form to search Spotify API
  var $spotifySearch = $("#spotify-search");

  // form input for track
  // var $track = $("#track").val(); // If you leave this up here it's blank because nothing is in it when you load the page.

  // Element to hold results from Spotify API
  //var $results = $("#results");

  $spotifySearch.on('submit', function (event) {
		event.preventDefault();
		var $track = $("#track").val(); // Something is in it now and ready to take the value when you click submit. 
  	console.log("Success! You submitted the form");
  	console.log($track);
  	$.get("https://api.spotify.com/v1/search?q=" + $track + "&type=track", function (data) {
  	console.log(data.tracks.items[0].artists[0].name); // Data is the name of the object that gets returned and has all the information you need. 
  	var $results = $("#results");
  		_.each(data.tracks.items, function (items, i) {
  			// console.log(items.name);
  			$results.append("<li>" + items.name + "</li>");
  			// console.log($results);
  				// for (var i = 0; i < data.tracks.items.length; i++) {
  				// 	if (data.tracks.items[i].artists[i].name === undefined) {
  				// 		console.log("Name is not defined");
  				// 	} else {
  				// 		console.log(data.tracks.items[i].artists[i].name);
  				// 	}
  				// }
  		});

  	
  		// for (var i = 0; i < data.length; i++) {
  		// 	$results.push(data.tracks.href);
  		// 	console.log(data.tracks.href);
  		// }
  	console.log("https://api.spotify.com/v1/search?q=" + $track + "&type=track");
  	});
  	// $.ajax({  // Same thing as $.get above. 
		 //  type: 'GET',
		 //  url: 'https://api.spotify.com/v1/artists/1jTAvg7eLZQFonjWIXHiiT',
		 //  dataType: 'json',
		 //  success: function(data) {
   //  	console.log(data);
  	// }
  });
});



