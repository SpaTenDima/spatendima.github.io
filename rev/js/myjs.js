

$(function () {
 var validator = $("#z16").validate({
        rules: {
            login_email: {
                required: true,
                email: true
            },
            login_name: {
                required: true
            }
        }
    })
var arrId = ["#login_name", "#login_email"];
$.each(arrId, function(indx, id) {
        var next = $(id).next();
        var fn = function() {
            validator.element(id) ? next.removeClass('img_z16_mandatory').addClass('img_z16_check') : next.removeClass('img_z16_check').addClass('img_z16_mandatory')
        };
        $(id).on("input", fn);
    }
);
});


/*
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



*/



