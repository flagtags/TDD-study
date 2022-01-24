// TODO
// 1. Money를 나타내기 위한 단 하나의 클래스만 갖게 한다.

import { Money } from './index';

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

test('달러의 곱셈', () => {
  const dollar: Money = Money.dollar(5);
  expect(dollar.times(2).equals(Money.dollar(10))).toBe(true);
  expect(dollar.times(3).equals(Money.dollar(15))).toBe(true);
});

test('프랑의 곱셈', () => {
  const franc: Money = Money.franc(5);
  expect(franc.times(2).equals(Money.franc(10))).toBe(true);
  expect(franc.times(3).equals(Money.franc(15))).toBe(true);
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
