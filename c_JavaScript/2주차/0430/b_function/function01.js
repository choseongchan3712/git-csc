//! 자바스크립트의 즉시 호출 함수
// : 즉시 실행 함수 표현
// : IIFE (Immediately Invoked Function Expression)

//? IIFE 정의
// : 정의되자마자 즉시 호출(실행)되는 함수
// : 주로 변수의 스코프(변수가 유효한 범위, 지역)를 제한하여 전역 스코프의 오염을 방지하는 데 사용
//   >> 전역 변수는 코드 어디에서나 접근 가능하기 때문에 의도치 않은 변경이 발생 가능
//   >> 이를 방지하기 위한 하나의 기법이 IIFE

// : 활용: 초기화 코드 실행이 필요할 때 사용하며, 글로벌 스코프를 오염시키지 않기 위해 사용

//? IIFE의 대표적 형태
// : 익명함수를 생성하고 즉시 호출
// : 정의된 직후 자동으로 실행되는 함수 - 초기화 코드 실행이 필요할 때 유용하게 사용
// : 전역 스코프에 영향을 주지 않으면서 필요한 코드를 실행 가능

// (function() {

// })();

//? 이름 충돌 문제
// : 다른 스크립트나 라이브러리와 변수명이 충돌하는 문제

// >> JS에서는 스코프 충돌을 방지하기 위해서 중괄호를 사용 | 함수를 생성하여 블록을 생성

let pi = 3.14;
console.log(`파이1의 값은 ${pi}입니다`);

{
let pi = 3.14;
console.log(`파이2의 값은 ${pi}입니다`);
}
{
let pi = 3.14159;
console.log(`파이3의 값은 ${pi}입니다`);
}

// 함수 블록
function sample() {
  let pi = 3.141596253333;
  console.log(`파이5의 값은 ${pi}입니다`);
}
sample();

// ? 즉시 호출 함수
let commonVar = '전역변수';
console.log(commonVar);

(function() {
  let commonVar = 'IFEE'
console.log(commonVar);
})()
console.log(commonVar);

