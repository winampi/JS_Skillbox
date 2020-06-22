//--string--//
'abc\ndef';  //перенос строк//
\u  //unicode symbol//
'A' < 'a'; //uppercase symbols go first//

//--numbers--//
10 / 0; //+infinity//
-10 / 0; //-infinity//
isFinite(10 / 0); //false(infinity), true(number)//

// --- var -- //
var varName_1_$ = 'abc';
var number = 34 * 4;
var math = (5>59);
var foo;

typeof varName_1_$;  // 'string'
typeof number; //'number'
typeof math; //'boolean'
typeof foo; //undefined type of var

// --- null  -- smth doesn't exist//
typeof null; //'object'//

//--- NaN ---not a number//
var n = NaN;
typeof n; //'number'
isNan(); //true/false //


//---Преобразование типов
var city = 'Москва';
city = 1000; // теперь city -числовая переменная

10 + '3'; //"103"    STRING    Сложение числа и строки = СТРОКА
10 + 'a';  //"10a"   STRING
'a' + 'b'; // "ab"   STRING

//--BUT--
10 - '3'; // 7      NUMBER    Вычитание числа и строки = ЧИСЛО

20 * '3'; // 60    NUMBER
20 * 'a'; //NaN

10 > '9' ; //true
10 == '10'; //true    Нестрогое сравнение, типы данных неважны
10 === '10'; //false  Cтрогое сравнение, типы данных важны

//преобразование типа данных

var a = +'20'; // a = 20

var a = +'20abc'; // a = NaN

//преобразование строки в число

Number('200'); // 200
//--parseInt()
parseInt('123'); // 123
parseInt('123ABC'); // 123
parseInt('A123'); // NaN

//преобразование числа в строку

10 + ''; // '10'

String(731);// '731'

var myNumber = 333;
myNumber.toString(); //'333'

// 2.11
if (10>5) {
  alert('Yes');
}
