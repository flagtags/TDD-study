// TODO
// 1. 더하기 기능, 환율이 있는 더하기 보다 간단한 5$ + 5$ = 10$ 부터 시작한

import { Money, Bank } from './index';

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

test('간단한 덧셈', ()=>{
  const sum = Money.dollar(5).plus(Money.dollar(5))
  const bank = new Bank();
  const reduced = bank.reduce(sum, 'USD');

  expect(Money.dollar(10).equals(reduced)).toBe(true);
})