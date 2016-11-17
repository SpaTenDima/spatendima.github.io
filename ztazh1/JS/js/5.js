function animateIMG(){
var curPosX = 0; //координаты
var curPosY = 0; //координаты
var interval;
var n = 10; // На сколько двигать за раз
var width = document.documentElement.clientWidth="490"; // Ширина экрана
var height = document.documentElement.clientHeight="490"; // Высота экрана
var imgWidth = 50; // Ширина картинки
var imgHeight = 50; // Высота картинки
var img1 = document.getElementById("box_trans"); //блок в переменную

function move() {
  img1.style.left = (curPosX += n) + "px"; 
  img1.style.top = (curPosY += n) + "px";
  if ((curPosX == (width - imgWidth)) || (curPosY == (height - imgHeight))) {
    clearInterval(interval);
  }
}
interval = setInterval(move, 100);


}


