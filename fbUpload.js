window.onload = function() {

var button = document.getElementById("submitButton");

	button.onclick = function() {
		FB.api(
			"/{user-id}/videos",
			"POST",
			{
				"source": "{video-data}"
			},
			function (response) {
			  if (response && !response.error) {
				/* handle the result */
			  }
			}
		);
    } 
};