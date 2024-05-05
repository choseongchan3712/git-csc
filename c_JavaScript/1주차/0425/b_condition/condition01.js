//! 자바스크립트의 제어문

// 제어문
// : 프로그램의 흐름을 제어하는 경우에 사용하는 실행문
// - 조건문, 반복문

// 순차문
// : 코드가 위에서 아래로 순차적으로 실행되는 구문

//! 조건문(Condition)
// : 프로그램에게 특정 조건을 검사하고
// : , 그 결과에 따라 다른 행동을 하도록 명령하는 방식
// : 특정 조건에 따라 코드블록을 실행 | 건너뛰기 가능
let number = 10;
if (number > 0) {
  console.log(`양수`);
}

//? JS 조건문의 종류
// : if문, else문, else if문, switch문

//? 1. if문
// : 가장 기본적인 조건문: 특정 조건이 참이면 코드 블록을 실행

//* if문의 기본 형태(구조)
/*
if (조건) {
  조건이 참(true)일 때 실행할 코드
}
*/
// >> 조건
// : 보통 비교 연산자를 사용해 표현(동등, 일치, 부등호 - boolean 타입으로 반환)
// (==, !=, ===, !==, <, >, <=, >=)
// 리턴값(결과값)은 boolean타입(true, false)

// : 주어진 조건이 참(true)일 때만 코드블록을 실행
// : 만약 조건이 거짓(false)d이면 코드블록은 무시

//? (if) else문
// : if문과 함께 사용
// , if문의 주어진 조건이 거짓일 때 실행할 코드 블록을 정의

//* if-else문의 기본 형태(구조)
/*
if (조건) {
  조건이 참일 때 실행되는 코드
} else {
  조건이 거짓일 때 실행되는 코드
}
*/

number = -10;
if (number >0) {
  console.log(`양수`);
} else {
  console.log(`음수`);
}

// else문은 if문의 조건이 거짓일 때 실행
// 즉, if문의 조건을 만족하지 않는 모든 경우에 대해
//     else문의 코드 블럭이 실행

//& if-else문의 코드 축약

//* if-else문 예시

let shopping = false;
let childAllowance;

if (shopping === true) {
  childAllowance = 10;
} else{
  childAllowance = 5
}
console.log(childAllowance);

//? else if문
// : if와 else 사이에 여러 개의 조건을 추가
// : , 해당 여러 조건을 순차적으로 검사하고 싶을 때 사용
// : 첫 번째 if 조건이 거짓이면, else if의 조건을 검사
// >> if문과 else문 사이에 위치, 여러 개의 조건을 확인할 수 있게 해주는 제어 구조

//* else if문의 기본 형태(구조)
/*
if (조건1) {
  조건1이 참일 때 실행되는 코드
} else if (조건2) {
  조건1이 거짓이고, 조건2가 참일 때 실행되는 코드
} else if (조건3) {
  조건1과 2가 거짓이고, 조건3이 참일 때 실행되는 코드
  ...
} else {
  모든 조건이 거짓일 때 실행되는 코드
}
*/

number = 0;
if (number > 0) {
  console.log(`양수`);
} else if (number < 0) {
  console.log(`음수 입니다`);
} else {
  console.log(`0입니다`);
}

// else if문은 if문의 조건이 거짓이고
// , else if문의 조건이 참일 때 실행

//* // else if문의 예시
// 나이가 13살 미만 '어린이 입니다.' 출력
// 나이가 13살 이상 20살 미만 '청소년 입니다.' 출력
// 나이가 20살 이상 '성인 입니다.' 출력

let age = 20;
if (age < 13) {
  console.log('어린이 입니다.');
} else if (age >= 13 && age <20) {
  console.log('청소년 입니다');
} else{
  console.log('성인입니다.');
}

//& - 조건식에 true와 false값과의 비교
// boolean 타입에서 false값으로 인식되는 값
// (false, 0, '', null, undefined)

// : 위의 값을 제외하고는 true의 값을 반환하기 때문에
// : 변수가 참인지 또는 그 값이 존재하는지를 테스트하기 위해서, 변수 이름 그 자체를 사용할 수 있음

// 조건식에서 변수명을 boolean 타입과 일치여부 확인을 하지 않아도 된다.

// >> 해당 변수를 불일치와 비교하고 싶은 경우
//    : 부정논리를 사용(!)

