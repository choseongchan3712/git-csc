//! 자바스크립트의 배열

//! 1. 배열이란?
// 배열(Array)은 '여러 개'의 값을 '순차적'으로 나열한 자료 구조
// : 다양한 타입의 데이터를 하나의 변수에 저장
// : 각가의 데이터는 인덱스(Index)번호값을 가짐 
//   해당 값을 통해 데이터에 접근
//   인덱스의 시작 값은 0
// : 배열의 각각의 데이터 - '요소'
// : 크기가 고정되어 있지 X, 프로그램 실행 중 동적으로 사용 가능

//! 2. 배열의 사용 목적
// - 집합적 데이터 관리 용이
// - 순차적 접근 
// - 다양한 데이터 타입을 함께 저장
// - 효율적인 데이터 처리

//! 3. 배열 생성
// - 리터럴 방식으로 배열 생성
// : 가장 직관적이고 간단함
// : [](대괄호)안에 원하는 요소를 ,(콤마)로 구분하여 나열

//? 배열의 이름은 여러 개의 데이터를 담는 특성을 살려
//  복수형태로 작성을 권장

let fruit = ['apple', 'banana', 'mango'];
let numbers = [1, 2, 3, 4, 5];
let emptyArray = [];



// - Array 생성자를 사용한 배열 생성
// : 새로운 배열을 만들 때 배열의 크기나 초기 값을 지정하는 데 유용

let arrayConstructor = new Array(3);


//! 배열 요소 접근 & 수정
// : 각 요소는 고유한 인덱스를 통해 접근 & 수정 가능
// : 인덱스 번호는 0부터 시작
// : 각 인덱스 번호는 1씩 증가하여 순차적으로 부여

let sports = ['축구', '야구', '농구'];
console.log(sports[1]);

// ? 수정
sports[1] = 'baseball';
console.log(sports[1]);

//! 배열의 길이와 동적 성질
// : 배열명.length 속성을 사용하여 배열의 길이를 확인
// : 해당 배열이 가지는 마지막 인덱스 번호 = 배열의 길이 - 1

console.log(sports.length);

// 배열 길이 변경
sports.length = 2;
console.log(sports);

sports.length = 4;
console.log(sports);

sports[3] = '배구';
console.log(sports);

//! 배열 탐색 및 정보 확인

let snacks = ['칸쵸', '초코송이', '포테토칩', '초코송이'];

//? indexOf()
// : 배열에서 지정된 요소를 찾고, 그 요소의 첫 번째 인덱스를 반환
// : 해당 요소가 존재하지 않으면 -1을 반환

let index = snacks.indexOf('초코송이');
let notFound = snacks.indexOf('쿠크다스');
console.log(index);
console.log(notFound);


//? lastIndexOf()
// : 배열의 끝부터 시작하여 요소를 탐색
// : 지정된 요소의 가장 마지막 인덱스를 반환
// : 요소가 없으면 -1을 반환

let lastIndexOfSnacks = snacks.lastIndexOf('초코송이');
console.log(lastIndexOfSnacks);

//? includes()
// : 배열에 특정 요소가 존재하는지 확인
// : 그 결과를 불리언 값으로 반환 
//   (요소의 인덱스X, 존재 유무만 확인)
let haspotato = snacks.includes('포테토칩');
console.log(haspotato);

//! 배열 조작 메서드
//? 1. 배열 요소 추가 및 삭제
fruits = ['apple', 'banana'];

// 요소 추가
// push(): 배열의 끝에 하나 이상의 요소를 추가, 수정된 배열의 길이를 반환
let newLength = fruits.push('cherry');
console.log(newLength);

// 요소 삭제
// pop(): 배열의 마지막 요소를 제거, 그 요소를 반환
// - 빈 배열의 경우 undefined를 반환

// shift(): 배열의 첫 번째 요소를 제거, 그 요소를 반환
// - 빈 배열의 경우 undefined를 반환

// unshift(): 배열의 시작 부분에 하나 이상의 요소를 추가
// - 수정된 배열의 새로운 길이를 반환

// splice
// : 배열의 기존 요소를 삭제하거나 새로운 요소를 추가하거나의 모든 동작을 수행

// - 요소 삭제
// : splice(삭제할 요소의 시작 인덱스, 삭제할 요소의 수)

// - 요소 추가
// : splice(추가할 위치의 인덱스, 0, 아이템나열)

// - 요소 교체
// : 기존의 아이템 삭제 + 새로운 요소 추가
// : splice(시작 인덱스, 제거할 요소의 수, 아이템 나열)

//! 배열 조작 메서드
//? 배열 정렬 & 순서 변경
// sort(): 배열의 요소를 정렬 - 문자열 순서대로 정렬(오름차순)

// reverse(): 배열의 요소의 순서를 반대로 정렬(내림차순)