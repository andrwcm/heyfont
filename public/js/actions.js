$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 2000);
        return false;
      }
    }
  });
});

(function( $ ) {
  $.fn.google_fonts = function(options) {
  	var defaults = {
        fontname: "arial"
    };
    var options = jQuery.extend(defaults, options);
    var fontname = options.fontname;
    fontname = fontname.replace(/ /gi, "+");
    $("head").append('<link href="//fonts.googleapis.com/css?family='+fontname+'" rel="stylesheet" type="text/css">');
    jQuery(this).css("font-family",options.fontname);
    $("#fontLink").attr("href", "https://www.google.com/fonts#QuickUsePlace:quickUse/Family:"+fontname+"");
    $("#fontTag").html(''+fontname+'');
    return this;
  };

})( jQuery );

    $(document).ready(function() {
    //alert('ready');
    $('#userInput').on('keyup', function(event) {
        $(this).val(function(i, v){
            return v.replace(/[a-zA-z]/, function(c){
               return c.toUpperCase();
                })
            })
        });
    });

    function changeText2(){
    var userInput = document.getElementById('userInput').value;
      $("#content").google_fonts({fontname: $('#userInput').val()});

}


//acciones al dar click en el botón GO!
 $(document).ready(function() {
    $('.SearchIcon').click(function(){
        $('body').css('overflow','hidden');
        $('.tt-dataset-fonts').addClass('topState');
        $('#navigation').fadeIn("slow");
        $('#content').slideDown ("fast");
        $('#tools').delay(500).fadeIn("slow");
        $('#userInput').delay(500).addClass('small-input');
        $('.tt-dropdown-menu').delay(2200).addClass('top');
        $('.tt-hint').delay(2200).addClass('small-input');
        $('#buttonFont').delay(2200).addClass('small-button');
    });
});

//acciones al dar click en los botones de preview
$(document).ready(function() {
  $('ul#tool-options li a').click(function(){
      $("#preloader , #status").fadeIn(0).delay(2000).fadeOut("slow");
      $('ul#tool-options li a').removeClass('active');
      $('#overlayTools').removeClass('overlayToolsVisible');
      $('ul#tool-options').removeClass('tool-optionsVisible');
      $(this).addClass('active');
  });
});



//acciones precarga
$(window).load(function() {
      $("#status").fadeOut();
      $("#preloader").delay(350).fadeOut("slow", function(){
   });
})



$(document).ready(function(){
    //al hacer click en insertar
    $('#buttonFont').click(function(){
      var texto = $('#userInput, #userInputInside').val();
      $('#nombreFont').html(''+ texto +'')
    });
});


$(document).ready(function(){
    //al hacer click en insertar
    $('#buttonFont2').click(function(){
      var texto = $('#userInputInside').val();
      $('#nombreFont2').html(''+ texto +'')
    });
});

$(document).keypress(function(event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
        $('.SearchIcon').click();
    }
});



//actions navigation

$(document).ready(function() {
    $('ul#preview-options li a#plaintext').click(function(){
    $('ul#preview-options li a#plaintext').addClass('active-icon');
    $('ul#preview-options li a#branding').removeClass('active-icon');
    $('ul#preview-options li a#userinterface').removeClass('active-icon');
   });
});

$(document).ready(function() {
    $('ul#preview-options li a#branding').click(function(){
    $('ul#preview-options li a#branding').addClass('active-icon');
    $('ul#preview-options li a#plaintext').removeClass('active-icon');
    $('ul#preview-options li a#userinterface').removeClass('active-icon');
   });
});

$(document).ready(function() {
    $('ul#preview-options li a#userinterface').click(function(){
    $('ul#preview-options li a#userinterface').addClass('active-icon');
    $('ul#preview-options li a#plaintext').removeClass('active-icon');
    $('ul#preview-options li a#branding').removeClass('active-icon');
   });
});



// actions branding


		new CircleType(document.getElementById('quote'));

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

		$("#logoUpload").change(readURL);


		$(document).ready(function(){
    $("#name").click(function() {
            $("#name_display").html( $("#name").val() );
    });
		});




    var textInputElement = document.getElementById('textInput');
		name1Element = document.getElementById('name1');
		name2Element = document.getElementById('name2');
		name3Element = document.getElementById('name3');
		name4Element = document.getElementById('name4');
		name5Element = document.getElementById('name5');
		name6Element = document.getElementById('name6');
		name7Element = document.getElementById('name7');
		textInputElement.addEventListener('keyup', function(){
			var text = textInputElement.value;
			name1Element.innerHTML = text;
			name2Element.innerHTML = text;
			name3Element.innerHTML = text;
			name4Element.innerHTML = text;
			name5Element.innerHTML = text;
			name6Element.innerHTML = text;
			name7Element.innerHTML = text;
		});
