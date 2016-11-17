"use strict";

var input = document.getElementById('input'), // вход
  number = document.querySelectorAll('.numbers div'), // количество
  operator = document.querySelectorAll('.operators div'), // оператор
  result = document.getElementById('result'), // равно
  clear = document.getElementById('clear'), // сброс
  resultDisplayed = false; // флаг, чтобы держать глаза на то, что вывод отображается


// добавляем обработчики Click для кнопки с цифрами
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function(e) {

// хранение текущей входной строки и последнего символа в переменные - использовать позже
    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];

// если результат не отображается, просто продолжать добавлять
    if (resultDisplayed === false) {
      input.innerHTML += e.target.innerHTML;
    } else if (resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
// если результат отображается, и Пользователь нажал оператора
// мы должны держать на добавление в строку для следующей операции
      resultDisplayed = false;
      input.innerHTML += e.target.innerHTML;
    } else {
// если результат отображается, и Пользователь нажал ряд
// нам нужно очистить входной строки и добавить новый ввод, чтобы начать новую opration
      resultDisplayed = false;
      input.innerHTML = "";
      input.innerHTML += e.target.innerHTML;
    }

  });
}


// добавляем обработчики Click для кнопки с цифрами
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function(e) {

// хранение текущей входной строки и последнего символа в переменные - использовать позже
    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];

   // если последний введенный символ является оператором, заменить его в данный момент нажата одна
    if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
      var newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
      input.innerHTML = newString;
    } else if (currentString.length == 0) {
   
// если первый ключ нажат, это opearator, ничего не делай
      console.log("enter a number first");
    } else {
// кнопка по щелчку "равно"
      input.innerHTML += e.target.innerHTML;
    }

  });
}

// кнопка по щелчку "равно"
result.addEventListener("click", function() {

// это строка, которую мы будем обрабатывать, например. -10+26+33-56*34/23
  var inputString = input.innerHTML;

// сформировать массив чисел. например, для строки выше это будет: цифры = ["10", "26", "33", "56", "34", "23"]
  var numbers = inputString.split(/\+|\-|\×|\÷/g);

// формирование массива операторов. для строки выше это будет: операторы = ["+", "+", "-", "*", "/"]
// сначала мы заменим все цифры и точка с пустой строкой, а затем разделить
  var operators = inputString.replace(/[0-9]|\./g, "").split("");

  console.log(inputString);
  console.log(operators);
  console.log(numbers);
  console.log("----------------------------");

 // теперь мы пробегаем по массиву и делаешь одну операцию одновременно.
// сначала разделить, потом умножение, потом вычитание, а потом сложение
// как мы движемся мы alterning оригинальные номера и такие операторы
// последний элемент оставшегося массива будет выходной

  var divide = operators.indexOf("÷");
  while (divide != -1) {
    numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
    operators.splice(divide, 1);
    divide = operators.indexOf("÷");
  }

  var multiply = operators.indexOf("×");
  while (multiply != -1) {
    numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
    operators.splice(multiply, 1);
    multiply = operators.indexOf("×");
  }

  var subtract = operators.indexOf("-");
  while (subtract != -1) {
    numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
    operators.splice(subtract, 1);
    subtract = operators.indexOf("-");
  }

  var add = operators.indexOf("+");
  while (add != -1) {
  // с помощью parseFloat необходимо, иначе это приведет к конкатенации строк
    numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
    operators.splice(add, 1);
    add = operators.indexOf("+");
  }

  input.innerHTML = numbers[0]; // вывода

  resultDisplayed = true; // поворотный флаг, если результат отображается
});

// очистка входного сигнала на пресс четких
clear.addEventListener("click", function() {
  input.innerHTML = "";
})












