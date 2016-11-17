var idMsg = 0; //переменная для ID
function addText(){
	var text1 = document.getElementById("text1").value; //Берем все что находится в блоке текста и присваиваем к переменной
	var text2 = document.getElementById("text2").value;//Берем все что находится в блоке текста и присваиваем к переменной

	var textbox = document.getElementById("text_box");//Берем все что находится в блоке текста и присваиваем к переменной


	var box = document.createElement("div"); //создаем блок 
	var msg = document.createElement("div");//создаем блок 
	var data = document.createElement("div");//создаем блок 
	var delet = document.createElement("div");//создаем блок 
	
	msg.innerHTML = text1; //добавляем из текста в созданный новый блок
	data.innerHTML = text2;//добавляем из текста в созданный новый блок
	delet.innerHTML = 'Удалить';//добавляем из текста в созданный новый блок

	box.setAttribute("id", "msg_item_" + idMsg); //присваиваем боксу id и класс
	delet.setAttribute("onclick", "deleteItem(" + idMsg + ")");//присваиваем удалить новую функцию удалить по id

	box.classList.add("task_block")
	msg.classList.add("task_block__text")
	data.classList.add("task_block__text")
	delet.classList.add("task_block__delet")

	textbox.appendChild(box);  //переносим из бокса в текст бокс инфу
	box.appendChild(msg); //переносим из блока в бок
	box.appendChild(data); //переносим из блока в бок
	box.appendChild(delet); //переносим из блока в бок
	idMsg++; //id увеличивается на единицу
	return true;
}

function deleteItem(id) {

document.getElementById("msg_item_" + id).parentNode.removeChild(document.getElementById("msg_item_" + id)); //находит id и удаляет полостью блок с его значепнием

}