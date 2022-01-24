// TODO
// 1. 프랑과 달러의 동등비교

import { Money, Dollar, Franc } from './index';

// javascript 에서는 equals 연산자 오버로딩이 없기 때문에 아래 테스트의 의미가 없음.
test('달러의 동등비교', () => {
  // 틀린 것까지 테스트를 만들어본 다음에 일반화 해서 코드를 작성 한다.
  expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
  expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
});

test('프랑의 동등비교', () => {
  // 틀린 것까지 테스트를 만들어본 다음에 일반화 해서 코드를 작성 한다.
  expect(new Franc(5).equals(new Franc(5))).toBe(true);
  expect(new Franc(5).equals(new Franc(6))).toBe(false);
});

test('달러의 곱셈', () => {
  const dollar = new Dollar(5);
  expect(dollar.times(2)).toStrictEqual(new Dollar(10));
  expect(dollar.times(3)).toStrictEqual(new Dollar(15));
});

test('프랑의 곱셈', () => {
  const franc = new Franc(5);
  expect(franc.times(2)).toStrictEqual(new Franc(10));
  expect(franc.times(3)).toStrictEqual(new Franc(15));
});

test('프랑과 달러의 동등비교', () => {
  const franc = new Franc(5);
  const dollar = new Dollar(5);
  expect(dollar.equals(franc)).toBe(false);
})