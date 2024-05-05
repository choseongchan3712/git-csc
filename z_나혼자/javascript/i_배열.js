// ! Array 객체 인스턴스 만들기 - 초기값이 없는 경우
console.log('---Array 객체 인스턴스 만들기 - 초기값이 없는 경우---');

let numbers1 = new Array();
let numbers2 = new Array(4);
console.log(numbers2);

// ! Array 객체 인스턴스 만들기 - 초기 값이 있는 경우
console.log('---Array 객체 인스턴스 만들기 - 초기 값이 있는 경우---');

let numbers3 = ['one', 'two', 'three', 'four'];
let numbers4 = Array('one', 'two', 'three', 'four');
console.log(numbers3);
console.log(numbers4);

// ! Array 객체의 length 프로퍼티 사용하기
console.log('---Array 객체의 length 프로퍼티 사용하기---');

let numbers5 = ['one', 'two', 'three', 'four'];
for(i = 0; i < numbers5.length; i++) {
  console.log(numbers5[i]);
}

// ! Array 객체의 메서드
console.log('---Array 객체의 메서드---');
// ? concat: 기존 배열에 요소를 추가해 새로운 배열을 만듭니다.
// ? every: 배열의 모든 요소가 주어진 함수에 대해 참이면 true를 반환하고 그렇지 않으면 false를 반환합니다.
// ? filter: 배열 요소 중에서 주어진 필터링 함수에 
// ? forEach:
// ? indexOf:
// ? join:
// ? push:
// ? unshift:
// ? pop:
// ? shift:
// ? splice:
// ? slice:
// ? reverce:
// ? sort:
// ? toString:...(p559)


// # 배열끼리 합치는 concat()
console.log('---배열끼리 합치는 concat()---');

let num1 = [1, 2, 3];
let num2 = [4, 5, 6];

let num1Num2 = num1.concat(num2);
console.log(num1Num2);

// # 배열 안의 요소끼리 합치는 join() 메서드
console.log('---배열 안의 요소끼리 합치는 join() 메서드---');

let num3 = [1, 2, 3, 4, 5, 6];

let string1 = num3. join();
console.log(string1);

let string2 = num3.join('/');
console.log(string2);

// # 새로운 요소를 추가하는 push(), unshift() 메서드
// push(): 배열 맨 끝에 요소를 추가
// unshift(): 배열 맨 앞에 요소를 추가

console.log('---새로운 요소를 추가하는 push(), unshift() 메서드---');

let num4 = [1, 2, 3, 4];

let num5 = num4.push(5, 6);
console.log(num4);

let num6 = num4.unshift(-1, 0);
console.log(num4);

// # 배열에서 요소를 꺼내는 pop(), shift() 메서드
// pop(): 배열 뒤에 있는 요소를 꺼낼 때
// shift(): 배열 앞에 있는 요소를 꺼낼 때

console.log('---배열에서 요소를 꺼내는 pop(), shift() 메서드---');

let num7 = [1, 2, 3, 4, 5, 6, 7];

let poped = num7.pop();
console.log(num7);

let poped2 = num7.shift();
console.log(num7);

// # 원하는 위치에 요소를 추가, 삭제하는 splice() 메서드
// ? (1) 메서드의 인수가 1개인 경우: 인수는 배열의 위치를 가리키고, 인수가 지정한 인덱스 요소부터 맨 끝 요소까지 삭제
console.log('---splice 요소 1개---');

let num8 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newNum8 = num8. splice(5);
console.log(num8);

// ? (2) 메서드 인수가 2개인 경우: 첫번쨰 인수는 인덱스 값이고, 두번쨰 인수는 삭제할 요소의 수입니다.
console.log('---splice 요소 2개---');
let num9 = [1, 2, 3, 4, 5];
let newNUm9 = num9.splice(3, 1);
console.log(num9);

// ? (3) 인수가 3개 이상인 경우: 첫 번째 인수는 삭제할 위치, 두 번째 요소는 삭제할 개수, 세 번째 요소는 삭제한 위치에 추가할 요소
console.log('---splice 요소 3개---');
let nums = [1, 2, 3];
let spliceNumber = nums.splice(2, 1, '삼');
console.log(nums);

// # 기존 배열을 바꾸지 않으면서 요소를 꺼내는 slice() 메서드
// ? (1) 인수가 1개일 경우: 지정한 요소 부터 마지막 요소까지 꺼내서 변환.
console.log('---slice() 요소 한개');
let colors = ['red', 'green', 'blue', 'white', 'black'];
let colors2 = colors. slice(2);
console.log(colors2);

// ? (2) 인수가 2개일 경우:
console.log('---slice() 요소 두개');
let colors3 = ['red', 'green', 'blue', 'yellow', 'orange'];
let colors4 = colors3.slice(2, 4); // 인덱스 2~3 번 반환
console.log(colors4);