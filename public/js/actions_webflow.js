

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



});


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
        $('.btn').click();
    }
});
