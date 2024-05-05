//! 조건문을 사용하는 프로그래밍 로직

//? 1. 사용자 입력값 검사
// 사용자로부터 입력받은 값이 유효한지 검사하기 위해 조건문 사용

// isNaN() 함수
// : 어떤 값이 NaN인지 판별
// : 숫자가 아닌 경우: true, 숫자인 경우: false
let userInput = prompt('숫자 입력');

if (isNaN(userInput)) {
  console.log('유효한 숫자 아님');
} else {
  console.log(`당신이 입력한 값 ${userInput3}`);
}

userInput = '';

if (userInput.trim() ==='') {
  console.log('아이디 입력');
} else {
  console.log('성공하셨습니다');
}

//? 2. 접근 제어
// 로그인 상태나 사용자 권한에 따라 다른 페이지를 보여줄 때 조건문 사용

let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn){
  if (isAdmin) {
    console.log('관리자님 환영 합니다.');
  } else {
    console.log('회원님 환영합니다.');
  }
} else{
  console.log('로그인 해주세요');
}

//? 코드 실행 흐름 제어
// 조건에 따라서 특정 코드를 실행할지에 대한 여부를 제어 가능

let shouldExecute = confirm('해당 코드를 실행하시겠습니까?');

