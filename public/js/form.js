(function(){
    $(".btnForm").click(function() {

        var nombre = $(".nombre").val();
            email = $(".email").val();
            validacion_email = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
            mensaje = $(".mensaje").val();

        if (nombre == "") {
            $(".nombre").focus();
            return false;
        }else if(email == "" || validacion_email.test(email)){
            $(".email").focus();
            return false;
        }else if(mensaje == ""){
            $(".mensaje").focus();
            return false;
        }else{
            $('.ajaxgif').removeClass('hide');
            var datos = 'nombre='+ nombre + '&email=' + email + '&mensaje=' + mensaje;
            $.ajax({
                type: "POST",
                url: "../proceso.php",
                data: datos,
                success: function() {
                    $('.ajaxgif').hide();
                    $('.msg').text('Message send!').addClass('msg_ok').animate({ 'right' : '130px' }, 300);
                },
                error: function() {
                    $('.ajaxgif').hide();
                    $('.msg').text('Ups we´ve got a problem!').addClass('msg_error').animate({ 'right' : '130px' }, 300);
                }
            });
            return false;
        }

    });
})();
