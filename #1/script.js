var myName = prompt('Как тебя зовут?');
var myLastName = prompt('Какая у тебя фамилия?');
var myBirthYear = prompt('Какой у тебя год рождения?');

var currentYear = 2020;
var age = currentYear - myBirthYear;

if (age < 20) {
  alert('Привет!' + myName + ' ' + myLastName + '!');
}

else if (age >= 20 && age < 40) {
  alert('Добрый день!' + myName + ' ' + myLastName + '!');
}

else  {
  alert('Здравствуйте!' + myName + ' ' + myLastName + '!');
}
