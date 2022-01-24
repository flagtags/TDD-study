// TODO
// 1. Dollar 객체의 equals 메소드 생성: Dollar를 값 객체로 비교할 수 있도록.

import Dollar from './index';

test('달러의 동등비교', () => {
  // 틀린 것까지 테스트를 만들어본 다음에 일반화 해서 코드를 작성 한다.
  expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
  expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
});

test('달러의 곱셈', () => {
  const dollar = new Dollar(5);
  let product = dollar.times(2);
  expect(product.amount).toBe(10);

  product = dollar.times(3);
  expect(product.amount).toBe(15);
});
