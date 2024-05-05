//! 문자열 연산자
console.log(`===문자열 연산자===`);

// :  덧셈(+) 연산자는 피연산자의 타입에 따라 두 가지 다른 연산을 수행

// - 1. 피연산자가 둘 다 숫자이면, 산술 연산인 덧셈을 수행
let a = 5;
let b =3;
console.log(a + b);

// - 2. 피연산자가 하나라도 문자열이면, 문자열 결합을 수행
let firstName = 'seongchan'
let lastName = `cho`;
let name = firstName + ` ` + lastName;
console.log(name);

//! typeof 연산자

// : 변수 또는 표현식의 데이터 타입을 문자열로 반환하는 연산자
// : 프로그래머가 디버깅을 할 때 또는 동적 타입을 갖는 언어의 특성상 데이터 타입을 확인할 필요가 있을 때 유용하게 사용

let variable = 10;
variable = `10`;
variable = false;
variable = undefined;

// 반환 값
// : typeof 연산자는 다음과 같은 문자열 중 하나를 반환
// : "number", "string", "boolean", "undefined", "object", "function", "symbol", "bigint"

console.log(`======`);

let num = 12;
console.log(typeof null);

let str = `문자열`;
console.log(typeof str);

let isTure = ture;
console.log(typeof isTure);

let obj = {
  name: '이승아'
};
console.log(typeof obj);

let func = finction();
console.log(typeof func);