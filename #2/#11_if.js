// 2.11
// var age = 98;
//
// if (age > 0 && age < 20) {
//   alert('Young');
// } else if (age >= 20 && age < 50) {
//   alert('Adult');
// } else if (age >= 50 && age < 90) {
//   alert ('Old man');
// } else {
//   alert('Very old');
// }
//
// //Тернарный оператор (ternary operator)
// var test;
// if (10>5) {
//   test = 1;
// } else {
//   test = 0;
// }
//
// var test_2 = (10 > 5) ? 'True' : 'False';
//
// //унарный оператор
// a++
// a--
//
// //бинарный оператор
// a + b;
// 10 > 5;
//
//

// switch
// switch (expression) {
//   case expression:
//     break;
//   default:
//
// }

var myName = 'Vika';
switch (myName) {
  case 'vika':
    alert('lowercase');
    break;

  case 'Vika':
    alert('uppercase');
    break;

  default:
    alert('wrong name');
}

//falsy values
var myAge = '27';

if (myAge) {        //если (myAge) является truthy value,то она принимает значение true
  alert('test');
}

//falsy values  (all other values are truthy)
false
null
undefined
0
""
NaN


// ! : changes true to false/ false to true
myValue = NaN;

if (!myValue) {
  alert('not falsy value');
}
