//! 윤년 계산기
// 윤년의 조건
// - 연도가 4로 나누어 떨어지는 해는 윤년입니다.
// - 그 중에서 100으로 나누어 떨어지는 해는 윤년이 아닙니다.
// - 하지만 400으로 나누어 떨어지는 해는 다시 윤년이 됩니다.

// 사용자로부터 prompt창으로 연도를 입력
// : prompt 창으로 입력받는 값은 문자열 타입
let inputYear = prompt('연도');

// parseInt()로 해당 값을 정수 변환
let year = Number(inputYear); 

// 사용자의 입력이 NaN일 경우 오류 발생
// : 해당 사용자의 입력이 NaN이 아님을 판별
// : isNaN() - 어떤 값이 NaN값인지 판별

// >> 위의 윤년 조건에 따라 해당 연도가 윤년인지 아닌지를 판별
// >> 콘솔창에 판별 결과를 표시

// NaN이 아닐 경우에 코드 블럭을 실행
// >> NaN이 아닐 경우: false를 반환
if (!isNaN(year)) {
  // NaN이 아닌 연도 계산
  // >> 윤년의 공식을 작성 (if문)
  if (year % 4 === 0 && year % 100 !== 0) {
    console.log(`${year}년은 윤년입니다`);
  } else if (year % 400 === 0) {
    console.log(`${year}년은 윤년입니다`);
  } else {
    console.log(`${year}년은 윤년이 아닙니다`)
  }
} else {
  console.log('유효하지 않은 숫자 입니다.');
}