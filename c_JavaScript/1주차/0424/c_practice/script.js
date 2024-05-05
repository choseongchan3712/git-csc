const PI = 3.14;
let r = Number(prompt('반지름의 길이를 입력하세요(cm)'));
let area = PI * r * r;
console.log(`원의 넓이는 ${area}`);

let inches = Number(prompt('인치를 입력하세요'));
let centimeters = inches * 2.54;
console.log(`${inches}inch는 ${centimeters}cm입니다.`);