$(document).ready(function () {

    

    $('#z16').validate(function () {
        $.validate("#login_email", {
            rules: {
                login_email: {
                    required: true,
                },
                email: {
                    required: true,
                    email: true,
                },
            },
        });
    });


    $('#z16').validate(function () {
        $.validate("#login_name", {
            rules: {
                login_name: {
                    required: true,
                },
            },


        });
    });

$( ".img_z16_mandatory" ).change(function() {
  el.classList.remove('.img_z16_mandatory');
  el.classList.add('.img_z16_check');
  }

});



