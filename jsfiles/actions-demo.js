$(window).scroll(function() {
	var scroll = $(window).scrollTop();

    if (scroll >= 250) {
        $("nav#tools").addClass("tools-fixed");
    } else {
		 $("nav#tools").removeClass("tools-fixed");
	}
});


$(document).ready(function() {

    $("#demo1").click(function() {
    $("#body_demo link[rel=stylesheet]").attr({href : "demo1.css"});
    });

    $("#demo2").click(function() {
    $("#body_demo link[rel=stylesheet]").attr({href : "demo2.css"});
    });

});

 $(document).ready(function() {
    $('ul.webdemos li').click(function(){
        $("ul.webdemos li").removeClass("active-demo");
        $(this).addClass("active-demo");
    });

});
