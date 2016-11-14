$(document).ready(function(){
  //подпишемся на событие click элемента, имеющего id="#launch-modal"
  $('#launch-modal').click(function() {
    //активируем контент, имеющий id="myModal", как модальное окно 
    $('#myModal').modal({
      //установим модальному окну следующие параметры:
      backdrop: 'static',
      keyboard: true
    });
  }); 
});