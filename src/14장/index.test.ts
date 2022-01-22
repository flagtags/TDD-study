// TODO
// 1. 통화변환을 하는 reduce 함수 제작

import { Money, Bank, Sum } from './index';

// javascript 에서는 equals 연산자 오버로딩이 없기 때문에 아래 테스트의 의미가 없음.
test('달러의 동등비교', () => {
  // 틀린 것까지 테스트를 만들어본 다음에 일반화 해서 코드를 작성 한다.
  expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
  expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
});

test('프랑의 동등비교', () => {
  // 틀린 것까지 테스트를 만들어본 다음에 일반화 해서 코드를 작성 한다.
  expect(Money.franc(5).equals(Money.franc(5))).toBe(true);
  expect(Money.franc(5).equals(Money.franc(6))).toBe(false);
});

test('머니의 곱셈', () => {
  const dollar: Money = Money.dollar(5);
  expect(dollar.times(2).equals(Money.dollar(10))).toBe(true);
  expect(dollar.times(3).equals(Money.dollar(15))).toBe(true);
});

test('프랑과 달러의 동등비교', () => {
  const franc = Money.franc(5);
  const dollar = Money.dollar(5);
  expect(dollar.equals(franc)).toBe(false);
});

test('통화개념 추가', () => {
  const dollar = Money.dollar(4);
  expect(dollar.currency).toBe('USD');

  const franc = Money.franc(4);
  expect(franc.currency).toBe('CHF');
});

test('간단한 덧셈', () => {
  const sum = Money.dollar(5).plus(Money.dollar(5))
  const bank = new Bank();
  const reduced = bank.reduce(sum, 'USD');

  expect(Money.dollar(10).equals(reduced)).toBe(true);
})

test('덧셈이 Sum 타입을 리턴한다.', () => {
  const result = Money.dollar(5).plus(Money.dollar(5));
  const sum: Sum = result;

  expect(sum.augend.equals(Money.dollar(5))).toBe(true);
  expect(sum.addend.equals(Money.dollar(5))).toBe(true);
})

test('reduce 에 sum 인 경우', () => {
  const sum = new Sum(Money.dollar(3), Money.dollar(4));
  const bank = new Bank();
  const result = bank.reduce(sum, 'USD');

  expect(result.equals(Money.dollar(7))).toBe(true);
})

test('Bank.reduce()에 인자로 Money 를 넘겼을 경우를 테스트', () => {
  const bank = new Bank();
  const result = bank.reduce(Money.dollar(9), 'USD');
  expect(result.equals(Money.dollar(9))).toBe(true);
})

test('2프랑을 1달러로 변환한다',() => {
  const twoFranc = Money.franc(2)
  const oneDollar = Money.dollar(1)

  const bank = new Bank();
  bank.addRate('CHF','USD',2);

  expect(oneDollar.equals(bank.reduce(twoFranc,'USD'))).toBe(true);
})

test('addRate 확인', ()=>{
  const bank = new Bank();
  bank.addRate('CHF', 'USD', 2);
  expect(bank.rate('CHF','USD')).toBe(2)
})

test('같은 통화', () =>{
  const bank = new Bank();
  expect(bank.rate('USD','USD')).toBe(1)
})