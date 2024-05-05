document.addEventListener('DOMContentLoaded', function(){
  let num1 = prompt('첫 번째 숫자를 입력하세요.');
  let num2 = prompt('두 번째 숫자를 입력하세요.');

  num1 = Number(num1)
  num2 = Number(num2)

  let sum = num1 + num2;
  let difference = num1 - num2;
  let product = num1 * num2;
  let quotient = mun1 / num2;

  alert('덧셈 결과' + sum);

  console.log('뺄셈 결과 ${difference}');

  confirm('곱셈 결과' + product);

  const resultDiv = document. getElementById('result');
  resultDiv.innerHTML = `<h2>나눗셈 결과: ${quotient}</h2>`;
});
// !어디가 문제 일까? X발