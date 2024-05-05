// ! for
//  for(초깃값; 조건; 증가식){실행할 명령}

let i = 1;
for(i = 1; i <6; i++) {
  console.log(i);
}

// ?practice 1부터 100까지 더하기
i = 1;
let sum = 0;
for(i = 1; i <= 1000; i++) {
  sum += i;
}
console.log(sum);

// ? practice 99단
i = 1;
let j = 1;

for(i = 1; i <= 9; i++) {
  console.log(i + '단');
  for(j = 1; j <= 9; j++) {
    console.log(i + 'x' + j + '=' + i * j);
  }
}

// ! while문과 do~while문
// (1) while(조건){실행할 명령}
// (2) do{실행할 명령}while(조건)

// ? 1부터 9까지 곱한 값
i = 1;
let n = 1;

while(i <= 9){
  n *= i;
  i++;
}
console.log(n);

// ! break 문
// ? 99단 3단에서 마무리 하기
i = 1;
j = 1;
for(i = 1; i <= 9; i++) {
  console.log(i + '단');
  for(j = 1; j <= 9; j++) {
    console.log(i + 'x' + j + '=' + i * j);
  }
  if(i === 3) break;
}

// ! continue문
// ? 1부터10까지 짝수만 더하기
i = 1;
sum = 0;

for(i = 1; i <= 10; i++) {
  if (i % 2 ===1)
  continue
sum += i;
}
console.log(sum);
