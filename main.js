$(document).ready(function() {

	function printHTML(text){
		var printHTML = document.getElementById('print_text');
		printHTML.innerHTML += text;
	}

	$('.alert').hover(function(){
		alert("Hey, I told you not to hover over me!");
	})

});
