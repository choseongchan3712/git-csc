//! 문제: 게임 캐릭터 스킬 시뮬레이터
// 목적: 함수의 정의, 매개변수와 인자의 이해, 반환값의 활용을 복습
// 기본 데이터 타입만을 사용하여 게임 캐릭터의 스킬을 시뮬레이션하는 간단한 프로그램

//? 게임 설명
// RPG 게임의 캐릭터를 제어하는 코드를 작성
// 캐릭터는 여러 스킬 사용 가능, 각 스킬은 다양한 효과를 보유
// 스킬을 사용할 때마다 캐릭터의 상태 변화
// => 함수를 통해 구현

//? 캐릭터 상태

// 체력 (HP)
// 마력 (MP)
// 스킬



//? 스킬(기술)

// 힐(Heal): 체력을 일정량 회복 / 사용할 때 마력을 소모
// 파이어볼(Fireball): 적에게 피해를 주고 마력을 소모
// 메디테이션(Meditation): 마력을 소량 회복 / 추가 체력 소모 X

//? 문제 상황
// 캐릭터의 초기 체력(HP)은 100, 마력(MP)은 50으로 시작
// 각 스킬의 기능을 수행하는 함수를 작성
// - 각 함수는 현재 HP 또는 MP를 인자로 받고, 각 스킬의 결과로 변경된 HP 또는 MP를 반환


//? 각 스킬(함수)의 작동 
// 힐(Heal): 체력을 30 회복하고, 10의 마력 소모
//           단, 마력이 부족하면 스킬 사용 X
// 파이어볼(Fireball): 적에게 25의 피해를 주고, 15의 마력을 소모
//                   마력이 부족하면 스킬 사용 X
// 메디테이션(Meditation): 20의 마력을 회복



// - 스킬 사용 시마다 현재의 체력과 마력을 출력하는 코드를 추가
// - 사용자가 선택한 스킬에 따라 적절한 함수를 호출하고 결과를 처리하는 메인 로직을 작성
//   : 사용자 입력으로 스킬을 선택할 수 있도록 하되, 입력은 스킬 이름의 첫 글자 ('H', 'F', 'M')로 제한

//? 연습 상황(구현 테스트)
// 현재 상태: HP = 100, MP = 50
// 사용할 스킬을 선택하세요 (H, F, M): H
// 힐 사용: HP = 130, MP = 40
// 현재 상태: HP = 130, MP = 40
// 사용할 스킬을 선택하세요 (H, F, M): F
// 파이어볼 사용: 적에게 25의 피해를 주었습니다. MP = 25
// 현재 상태: HP = 130, MP = 25
// 사용할 스킬을 선택하세요 (H, F, M): M
// 메디테이션 사용: MP = 45
// 현재 상태: HP = 130, MP = 45

//! 소스코드 작성
// heal 구현
function heal(hp, mp) {
  if (mp >= 10) {
    hp += 30;
    mp -= 10;
    console.log(`힐 사용 HP = ${hp}, MP = ${mp}`);
  } else {
    console.log('마력 부족으로 힐 사용 불가');
  }
  return [hp, mp];
}
// fireball
function fireball(mp){
  if (mp >= 15) {
    const damage = 25;
    mp -= 15;
    console.log(`파이어볼 사용: 적에게 ${damage}의 공격을 하였습니다. MP = ${mp}`);
  } else {
    console.log('공격 실패');
    return mp;
  }
}

// meditation
function meditation(mp) {
  mp += 20;
  console.log(`메디테이션사용: MP = ${mp}`);
  return mp;
}

// ! 실행 함수
function main() {
  let hp = 100;
  let mp = 50;
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout});
  
    const prompt = () => {
      console.log(`현재: HP = ${hp}, MP = ${mp}`);
      rl.question('사용할 스킬을 선택하세요(H, F, M, Q to quit) :',
      function(input) {
        const choice = input.toUpperCase();

        switch (choice) {
          case 'H' :
            [hp, mp] = heal(hp, mp);
            prompt();
            break;
          case 'F':
            mp = fireball(mp);
            prompt();
            break;
          case 'M':
            mp = meditation(mp);
            prompt();
            break;
          case 'Q':
            console.log('게임을 종료합니다.');
            break;
          default:
            console.log('잘못 입력 되었습니다');
          prompt();
        }
      }
    );
    };

    prompt();
}

main();