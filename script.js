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
  	console.log(data.tracks.items[0]);
  	console.log(data.tracks.items[0].artists[0].name); // Data is the name of the object that gets returned and has all the information you need. 
  	var $results = $("#results");
  		_.each(data.tracks.items, function (items, i) {
  			// console.log(items.name);
  			$results.append("<li>" + items.name + "</li>");
  			$results.append("<img src=" + items.album.images[0].url + ">");
  			console.log(items.album.images[0].url);
  			// $results.append(album.images);
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



// $(function() {

//   // form to search spotify API
//   var $spotifySearch = $('#spotify-search');

//   // form input for track (song)
//   var $track = $('#track');

//   // element to hold results from spotify API
//   var $results = $('#results');

//   // loading gif
//   var $loading = $('#loading');

//   // track (song) template
//   var trackTemplate = _.template($('#track-template').html());

//   // submit form to search spotify API
//   $spotifySearch.on('submit', function(event) {
//     event.preventDefault();

//     // empty previous results and show loading gif
//     $results.empty();
//     $loading.show();

//     // save form data to variable
//     var searchTrack = $track.val();

//     // spotify search URL
//     var searchUrl = 'https://api.spotify.com/v1/search?type=track&q=' + searchTrack;

//     // use AJAX to call spotify API
//     $.get(searchUrl, function(data) {

//       // track results are in an array called `items`
//       // which is nested in the `tracks` object
//       var trackResults = data.tracks.items;
//       console.log(trackResults);

//       // hide loading gif
//       $loading.hide();

//       // only append results if there are any
//       if (trackResults.length > 0) {

//         // iterate through results
//         _.each(trackResults, function(result, index) {
          
//           // build object of data we want in our template
//           var templateData = {
//             albumArt: result.album.images.length > 0 ? result.album.images[0].url : null,
//             artist: result.artists[0].name,
//             name: result.name,
//             previewUrl: result.preview_url
//           };

//           // put data in template and append to view
//           var $trackResult = $(trackTemplate(templateData));
//           $results.append($trackResult);
//         });

//       // else let user know there are no results
//       } else {
//         $results.append('No results.');
//       }
//     });

//     // reset the form
//     $spotifySearch[0].reset();
//     $track.focus();
//   });

// });





