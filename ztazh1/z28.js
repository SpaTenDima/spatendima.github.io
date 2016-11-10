
$(function () {
 var validator = $("#z28").validate({
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
 var arrId = ["#login_name", "#login_email", "#login_fio", "#login_city", "#login_password", "#login_password1"];
 $.each(arrId, function(indx, id) {
  var next = $(id).next();
  var fn = function() {
    validator.element(id) ? next.removeClass('img_z28_mandatory').addClass('img_z28_check') : 
    next.removeClass('img_z28_check').addClass('img_z28_mandatory')
  };
  $(id).on("input", fn);



  $('input[name=login_captcha]').change(function(){
    var login_captcha = $(this);
    if (login_captcha.val() === "55102") {
     login_captcha.addClass('img_z28_check');
     login_captcha.next().replaceWith('<span id="xxx" class="img_z28_check"></span>');
     login_captcha.login_captcha.removeClass('img_z28_mandatory');
   } else { 
     login_captcha.removeClass('img_z28_check').addClass('img_z28_mandatory');
     login_captcha.next().replaceWith('<span id="xxx"><strong>Неправильное число</strong> </span>');
   }
 });






}
);
});