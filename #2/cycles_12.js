var i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
console.log('end of cycle')

// do while даже если условие не выполняется, один раз срабатывает do
var k = 1;

do {
  console.log(k);
}while (k > 4);

console.log('end of the world')


//for

for (var j = -8; j <=10; j++) {
  if (j == 0) {
    break;
  }
  console.log('j: ' + j)
}


for (var z = -8; z <=10; z++) {
  if (z % 2 == 0) {
    continue;
  }
  console.log('z: ' + z)
}
