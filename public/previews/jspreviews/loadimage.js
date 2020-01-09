function readURL() {
	//	rehide the image and remove its current "src",
	//	this way if the new image doesn't load,
	//	then the image element is "gone" for now
	$('#logo, #letter, #card').attr('src', '').hide();
	if (this.files && this.files[0]) {
		var reader = new FileReader();
		$(reader).load(function(e) {
			$('#logo, #letter, #card')
				//	first we set the attribute of "src" thus changing the image link
				.attr('src', e.target.result)	//	this will now call the load event on the image
		});
		reader.readAsDataURL(this.files[0]);
	}
}

//	below makes use of jQuery chaining. This means the same element is returned after each method, so we don't need to call it again
$('#logo, #letter, #card')
	//	here we first set a "load" event for the image that will cause it change it's height to a set variable
	//		and make it "show" when finished loading
	.load(function(e) {
		//	$(this) is the jQuery OBJECT of this which is the element we've called on this load method
		$(this)
			//	note how easy adding css is, just create an object of the css you want to change or a key/value pair of STRINGS
			.css('height', '200px')	//	or .css({ height: '200px' })
			//	now for the next "method" in the chain, we show the image when loaded
			.show();	//	just that simple
	})
	//	with the load event set, we now hide the image as it has nothing in it to start with
	.hide();	//	done

$("#imgInp").change(readURL);