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
    $('.btn').click(function(){
        $('body').css('overflow','hidden');
        $("#preloader , #status").fadeIn(0).delay(2000).fadeOut("slow");
        $('#content').delay(2200).slideDown ("slow");
        $('#tools').delay(2200).fadeIn("slow");
        $('#userInput').delay(2200).addClass('small-input');
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


//acciones feedback y menu
$(document).ready(function() {
    $('#give').click(function(){
        $("#overlayForm").slideDown(300);
    });

    $('.close').click(function(){
        $('#overlayForm').slideUp(300);
    });

    $('.heyfont').click(function(){
        $('#overlayTools').addClass('overlayToolsVisible');
        $('ul#tool-options').delay(1200).addClass('tool-optionsVisible');
    });

    $('#overlayTools').click(function(){
        $('#overlayTools').removeClass('overlayToolsVisible');
        $('ul#tool-options').removeClass('tool-optionsVisible');
    });

    //acciones botones opciones preview

    $('ul#tool-options li a#brandbtn').click(function(){
        $('.heyfont').removeClass('webActive');
        $('.heyfont').removeClass('metricActive');
        $('.heyfont').addClass('brandActive');
    });

    $('ul#tool-options li a#WebBtn').click(function(){
        $('.heyfont').removeClass('metricActive');
        $('.heyfont').removeClass('brandActive');
        $('.heyfont').addClass('webActive');
    });

    $('ul#tool-options li a#MetricBtn').click(function(){
        $('.heyfont').removeClass('webActive');
        $('.heyfont').removeClass('brandActive ');
        $('.heyfont').addClass('metricActive');
    });

    $('.primaryButton').click(function(){
        $('.termsOverlay').slideDown(320);
    });

    $('.termsOverlay').click(function(){
        $(this).slideUp(320);
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
        $('.btn').click();
    }
});
