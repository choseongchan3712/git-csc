//! 기본 매개변수 & 나머지 매개변수

//? 1. 기본 매개변수(Default)
// : 함수에 인자를 전달하지 않았을 때 사용되는 기본값을 정의
// : 함수의 매개변수가 undefined인 경우에도 함수가 정상적으로 동작하도록 구현
// : 함수 호출 시 특정 매개변수를 생략 가능

// 구현 방법
// : 함수 선언 시 매개변수명 뒤에 '='연산자를 이용하여 기본값을 할당

function defaltParams(param1='defaultValue1', param2=2){};

function greet(name){
  console.log(`안녕하세요 ${name}님`);
}

//? 2. 가변 매개변수
// : 함수가 받을 수 있는 매개변수의 수가 변할 수 있다는 것을 의미
// : 함수를 호출할 때 인자의 수가 정해져 있지 않고, 함수 내부에서 유동적으로 처리

//? 3. 나머지 매개변수(Rest)
// : JS - 나머지 매개변수를 사용하여 가변 매개변수를 구현
// : 함수에 전달된 인자들을 배열로 받을 수 있도록 작성하는 방법
// : 주로 함수에 가변적인 수의 인자를 전달할 때 유용
// : 매개변수명 앞에 ...을 붙여 정의

//^ 나머지 매개변수의 형태
// : 함수 선언 시 매개변수 목록의 마지막에 위치

function exampleFunction(param1, param2, ...args) {
  console.log(param1);
  console.log(param2);
  console.log(args);
}

exampleFunction();


// 예제
function print(num1, num2, ...numbers) {
  console.log(numbers);
}

print(1, 2, 3, 4, 5);

print(11, 12, 33)


function findmin(...numbers) {
  return Math.min(...numbers);
}

let minResult = findmin(58, 35, 92, 10, 23, 77, 1, -55);
console.log(minResult);


//? 4. 나머지 매개변수와 일반 매개변수의 조합
function combinedExample(forstParam, ...restOfParams){
  console.log(`첫 번째 매개변수는: ${firstParam}, 타입: ${typeof firstParam}`);
}