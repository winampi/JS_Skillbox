let yearInitial;
let yearFinal;

 do {
   yearInitial = prompt("Введите начальный год от 1900 до 2016");
 } while ( 2016 < yearInitial || yearInitial < 1900);

 do {
   yearFinal = prompt("Введите конечный год от 1900 до 2016");
 } while ( 2016 < yearFinal || yearFinal < 1900 );

 do {
   yearFinal = prompt("Конечный год совпадает с начальным. Введите конечный год от 1900 до 2016");
 } while (yearFinal == yearInitial);

if (yearInitial < yearFinal) {
  for (year = yearInitial; year <= yearFinal; year++) {
    if (year % 4 == 0) {
      console.log(year)
    }
  }
}else {
  for (year = yearInitial; year >= yearFinal; year--) {
    if (year % 4 == 0) {
      console.log(year)
    }
  }
}
