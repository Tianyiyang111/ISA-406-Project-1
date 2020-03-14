function readFile() {
	jQuery.get('input.txt', function(txt) {
		alert(txt);
	  //optional stuff to do after success
	  $('#output').text(txt);
	});
	


}