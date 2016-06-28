// load pages
	//	 $(document).ready(function(){
			
	//		$( "#branding" ).load( "pages/branding.html" );
	//	});


// save image
		$(document).ready(function(){
		var element = $("#brandinpreview"); // global variable
		var getCanvas; // global variable
		 
		    $("#btn-Preview-Image").on('click', function () {
		         html2canvas(element, {
		         onrendered: function (canvas) {
		                $("#previewImage").append(canvas);
		                getCanvas = canvas;
		             }
		         });
		    });

			$("#btn-Convert-Html2Image").on('click', function () {
		    var imgageData = getCanvas.toDataURL("image/png");
		    // Now browser starts downloading it instead of just showing it
		    var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
		    $("#btn-Convert-Html2Image").attr("download", "heyfont_preview.png").attr("href", newData);
			});

		});


