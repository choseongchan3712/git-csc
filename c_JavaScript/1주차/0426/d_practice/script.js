//! 반복문 연습 예제

let fruits = ['apple', 'banana', 'mango'];

//? 1. 배열의 모든 요소를 출력
let length = fruits.length;

// for문
console.log('---for문---');
for (let i = 0; i < length; i++){
  console.log(fruits[i]);
}

// while문
console.log('---while문---');

let i = 0;

while (i < length) {
  console.log(fruits[i]);
  i++
}

// do-while문
console.log('---do-while문---');
i = 0;
do {
  console.log(fruits[i]);
  i++;
} while (i < length);

//! 반복문 사용하기 실습
// 사용자로부터 입력 받기(do while문)

// userInput 변수에 propmt('Enter a number greater than 10')
// userInput 변수가 10을 초과하는 수가 아닌 경우 반복

//! prompt창
// prompt 함수는 항상 문자열을 반환
let userInput;
do {
  userInput = prompt('10보다 큰 수');
} while (userInput <= 10);

//! 반복문 실습
// html불러오기

const para = document.querySelector('p');
const inputNumber = document.querySelector('input');
const btn = document. querySelector('button');

// btn.addEventListener('click', function(){
//   para.textContent + 'Output:';
//   let num = inputNumber.value;
//   inputNumber.value = '';
//   inputNumber.focous();

//   for (tel = i = 1; i <= num; i++){
//     let sqRoot = Math.sqrt(i);
//   }

//   if (Math.floor(sqRoot) !== sqRoot){
//     continue;}
//     para.textContent += i + '';
//     }
//   })