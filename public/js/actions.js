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
    return this;
  };

})( jQuery );

    $(document).ready(function() {
    //alert('ready');
    $('input').on('keyup', function(event) {
        $(this).val(function(i, v){
            return v.replace(/[a-zA-z]/, function(c){
               return c.toUpperCase();
                })
            })
        });
    });

    function changeText2(){
    var userInput = document.getElementById('userInput').value;
      $("#body_demo").google_fonts({fontname: $('#userInput').val()});

}

 $(document).ready(function() {
    $('.btn').click(function(){
        $("#preloader , #status").fadeIn(0).delay(2000).fadeOut("slow");
        $('#webDemo').delay(2200).slideDown("slow");
        $('#tools').delay(2200).fadeIn("slow");
        $('#userInput').delay(2200).addClass('small-input');
        $('.tt-hint').delay(2200).addClass('small-input');
        $('#buttonFont').delay(2200).addClass('small-button');
    });
});



$(document).ready(function() {
    $('#btnWeb').click(function(){
        $("#preloader , #status").fadeIn(0).delay(2000).fadeOut("slow");
        $('#brandingDemo, #metricsDemo').delay(2200).slideUp("slow");
        $('#webDemo').delay(2200).slideDown("slow");
    });
});

$(document).ready(function() {
    $('#btnBranding').click(function(){
        $("#preloader , #status").fadeIn(0).delay(2000).fadeOut("slow");
        $('#webDemo, #metricsDemo').delay(2200).slideUp("slow");
        $('#brandingDemo').delay(2200).slideDown("slow");
    });
});


$(document).ready(function() {
    $('#btnMetrics').click(function(){
        $("#preloader , #status").fadeIn(0).delay(2000).fadeOut("slow");
        $('#webDemo, #brandingDemo').delay(2200).slideUp("slow");
        $('#metricsDemo').delay(2200).slideDown("slow");
    });
});




$(document).ready(function() {
    $('ul#tool-options li a').click(function(){
        $("#preloader , #status").fadeIn(0).delay(2000).fadeOut("slow");
        $('ul#tool-options li a').removeClass('active');
        $(this).addClass('active');
    });
});




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
        $('.btn').click();
    }
});


