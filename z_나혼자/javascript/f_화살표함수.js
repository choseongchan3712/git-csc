// ! 화살표 함수
// (매개변수) => {함수내용}

// ? 매개변수가 없을 시
let hi = () => {return '안녕하세요'};
console.log(hi());

// ? 매개변수가 1개인 함수
let sum = (n) => {console.log(n + 2);}
sum(3);

// ? 매개변수가 2개인 함수
let sum2 = (a, b) => {console.log(a + b);}
sum2(10, 30);
