// ! 변수 선언

// ?변수 한꺼번에 선언하기
let currentYear, birthYear, age

// ? 변수 선언과 값 할당 따로 하기
let birthday;
birthday = 1998;

//  ? 변수선언과 값 할당 같이 하기
// let name = choseongchan;

// ! 자료형 이해하기

//  ? (1) 숫자형
// 숫자형 -> number

//  ? (2) 문자형
// 문자형 -> string

// ? (3) 논리형
// 논리형 -> boolean
// ture or false

// ? (4) undefined && null
// undefined -> 변수를 선언만 하고 값이 할당되지 않은 자료형을 undefined라고 합니다.

// null -> 변수에 할당 된 값이 유효하지 않다는 의미.

// ? (5) 배열 - array
let season = ['봄', '여름', '가을', '겨울'];
// 괄호 안에 4개의 index가 생성됨, 순서는 0~3
console.log(season[1]);
// index 1번인 여름을 표시

// ! 연산자(건너뛰기)

// ! 조건문
// ? (1) if ~else문

let number = 100
if(number % 3 === 0) {
  console.log('3의 배수입니다.');
} else {
  console.log('3의 배수가 아닙니다.');
}

// # 중첩된 if ~ else 문
let number2 = 100
if(number2 !== null) {
  if(number % 3 === 0) {
    console.log("3의 배수입니다");
  } else {
    console.log('3의 배수가 아닙니다.');
  }
} else {
  console.log('입력이 취소되었습니다.');
}

// ! 조건 연산자로 조건 체크하기
let number3 = 150;
(number3 % 3 === 0) ? console.log('3의 배수입니다') : console.log('3의 배수가 아닙니다.');

// -> (조건) ? ture일때 : false 일때

// ! 논리 연산자로 조건 체크하기
// ? (1) OR 연산자
let num1 = 9;
let num2 = 11;

if(num1 < 10 || num2 < 10) {
  console.log('숫자 2개 중에서 최소한 하나는 10 미만 입니다.');
} else {
  console.log('숫자 2개 중에서 10 미만의 수가 없습닙다.');
}

// ? (2) AND 연산자
let num3 = 49;
let num4 = 51;

if(num3 <50 && num4 <50) {
  console.log('숫자 2개 모두 50 미만.');
} else {
  '조건에 맞지 않은 숫자가 있음.'
}

// ? (3) NOT 연산자
// -> if(userNumber !== null){실행할 명령} --------> 입력값이 null이 아니면 if 문을 실행

// ! switch 문
let addNumber = 10;
switch(addNumber) {
  case 9: console.log('작습니다')
    break;
  case 10: console.log('정답입니다')
    break;
  case 11: console.log('큽니다')
    break;
  default : console.log('다른 숫자 입니다');
}
