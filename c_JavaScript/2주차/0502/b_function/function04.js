//! 콜백 함수를 활용하는 자바스크립트 내장 함수

//? 고차 함수 - 타이머 함수
// : 특정한 시간이 지난 후 함수를 실행하거나 일정 간격으로 함수를 반복 실행하는 기능을 제공

//& 1. setTimeout(함수, 시간)
// : 지정된 시간이 지난 후에, 주어진 함수를 단 한 번 실행

// - 첫 번째 인자: 실행할 함수
// - 두 번째 인자: 지연 시간(밀리초 단위)

//* 기본 사용법


//* 익명 함수 사용


//* 타이머 취소
// : clearTimeout(타이머_ID): setTimeout으로 설정한 타이머 제거

// : setTimeout()은 타이머 ID를 반환
// : 해당 ID를 clearTimeout() 함수에 전달하여 타이머를 취소


//& 2. setInterval(함수, 시간)
// : 지정된 시간 간격마다 함수를 반복해서 실행
// : 사용법은 setTimeout()과 유사


//* 타이머 취소
// clearInterval(타이머_ID): setInterval로 설정한 타이머 제거

// 타이머 id는 해당 타이머를 반환하는 객체
