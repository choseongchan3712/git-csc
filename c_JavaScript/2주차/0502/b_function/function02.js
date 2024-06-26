
//! 콜백 함수를 활용하는 자바스크립트 내장 함수

//? 배열이 가지는 콜백함수 활용 - 메서드의 형태

// 콜백함수의 인자값
// function (value, index, array)
// : 순회되는 각 요소의 값, 순회되는 각 요소의 인덱스 번호, 배열 그자체

//& 1. forEach()
// : 각 요소에 대해 함수를 실행
// : 단순하게 배열 내부의 요소를 사용해서 콜백함수를 호출

// console.log('=== forEach() ===');

// const numbers = [273, 52, 103, 32, 57];

// numbers.forEach(function (value, index, array){
//   console.log(`${index} 번째 요소; ${value}`);
// })

// numbers.forEach(function (value, index, array){
//   array[index] = value *value;
// })

// ! 무슨 개소린지 이해 안됨


//& 2. map()
// : 배열의 각 요소에 대해 함수를 적용하고 새로운 배열을 생성하여 반환
// : 콜백 함수에서 리턴한 값들을 기반으로 새로운 배열을 생성
// : 요소의 개수 변화 X

// console.log('=== map() ===');

// numbers.map(function(value){
//   return value * value;
// })
// console.log(numbers);


//& 3. filter()
// : 콜백 함수에서 리턴하는 값이 true인 것들만 모아서 새로운 배열을 만드는 함수
// : 기존의 배열과 요소의 수가 일치 하지 않을 수도 있다.

console.log('=== filter() ===');


// - 배열의 콜백 함수 사용 시 주로 화살표 함수를 사용

//& 배열을 활용한 콜백 함수 예제
// let cars = ['audi', 'bmw', 'hyundai', 'volvo'];
