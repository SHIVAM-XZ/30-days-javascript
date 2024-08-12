// Day 4: Loops

Task1: text = "";
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

Task2: text = "";
for (let i = 1; i <= 10; i++) {
  console.log(5 * i);
}

Task3: sum = 0;
i = 1;
while (i <= 10) {
  sum += i + "\n";
  i++;
}
console.log(sum);

Task4: i = 10;
while (i >= 1) {
  console.log(i);
  i--;
}

Task5: i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);

Task6: i = parseInt(prompt("enter number"));
let num = 1;
do {
  num *= i;
  i--;
} while (i >= 1);
console.log(num);

Task7: for (let i = 1; i <= 5; i++) {
  let str = "";
  for (let j = 0; j < i; j++) {
    str += "*";
  }
  console.log(str);
}

Task8: for (i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

Task9: i = 0;
while (i <= 10) {
  if (i == 7) {
    break;
  }
  i++;
  console.log(i);
}
