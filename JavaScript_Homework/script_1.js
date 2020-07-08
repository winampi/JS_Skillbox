let firstNumber;
let secondNumber;

do {
  firstNumber = prompt ("Введите число, пожалуйста");
} while (!isFinite(firstNumber) || firstNumber === null || firstNumber === '');

do {
  secondNumber = prompt ("Введите еще одно, пожалуйста");
} while (!isFinite(secondNumber) || secondNumber === null || secondNumber === '');

if (firstNumber > secondNumber) {
  alert("Первое число больше второго");
}else if (firstNumber < secondNumber) {
  alert("Второе число больше первого");
}else {
  alert("Оба числа равны");
}
