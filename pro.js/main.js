let number1 = Date.now() % 100;
let number2 = Math.floor(Date.now() / 100) % 100;

let answer = prompt(`What is ${number1} + ${number2}?`);
answer = Number(answer);

document.getElementById("result").innerText =
  `${number1} + ${number2} = ${answer} is ${number1 + number2 === answer}`;
