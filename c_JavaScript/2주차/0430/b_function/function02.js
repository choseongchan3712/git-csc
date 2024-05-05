//! 익명 함수와 선언적 함수의 차이

//! 1. 익명 함수의 사용
// : 순차적인 코드 실행에서 코드가 해당 줄을 읽을 때 생성

//? 익명 함수의 특징
// 코드 간결성: 코드를 간결하게 만들고, 직관적으로 표현
// 동적 할당: 익명 함수는 코드 실행 도중에 동적으로 할당되고, 재할당 가능합
let anonymous;
anonymous = function() {
  console.log('첫 번째 익명 함수');
}
anonymous();

anonymous = function() {
  console.log('두 번째 익명 함수');
}
anonymous();

//! 2. 선언적 함수 사용
// : 순차적인 코드 실행이 일어나기 전에 생성, 어디에서든 호출 가능

// 선언적 함수 호출
// 선언적 함수의 경우 호이스팅이 가능

//! 3. 선언적 함수와 익명 함수의 조합
// 선언적 함수가 먼저 생성, 이후에 순차적인 코드를 진행을 시작하면서 익명 함수를 생성
// : 선언적 함수와 익명 함수를 조합하면, 초기화 단계에서 선언적 함수를 정의하고, 이후 동적으로 기능을 변경하거나 확장할 때 익명 함수를 사용
