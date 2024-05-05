// ! 익명함수
let sum = function(a, b) {
  return a + b;
}
console.log('함수 실행 결과' + sum(10, 20));

// ! 즉시 실행 함수
// ? (1) 매개변수가 없는 즉시 실행 함수
// (function(){명령}());
(function(){
  console.log('hello');
}());

// ? (2) 매개변수 있는 즉시 실행 함수
// (function(매개변수){명령}(인수));
(function(a, b){
  console.log(a + b);
}(20, 30));

