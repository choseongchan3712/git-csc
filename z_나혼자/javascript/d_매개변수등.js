// ! 매개변수, 인수, return
function addNUmber(num1, num2){
  let sum = num1 + num2;
  return sum;
}
// num1, num2 가 매개변수
let result = addNUmber(2, 3);
console.log(result);
// 2, 3이 인수

// ? 소스 간단하게 작성하기
function addNUmber2(num3, num4){
  return num3 + num4;
}
let result2 = addNUmber2(4, 5);
console.log(result2);

// 다른 방법
function addNUmber3(num5, num6) {
  console.log(num5 +num6);
}
addNUmber3(3, 4);

// ! 매개변수 기본값 지정하기
function multiple(a, b = 5, c = 10) {
  console.log(a * b +c);
}
multiple(5, 10, 20);
multiple(10, 20);
multiple(30);


