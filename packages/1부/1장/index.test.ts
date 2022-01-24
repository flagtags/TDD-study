// TODO
// 1. 달러의 곱셈(주식 수 * 가격)
// 2. 환율을 반영한 덧셈(달러 + 프랑)

// TODO 중에서 더 간단한 것부터 테스트 만든다.

import Dollar from './index';

test('달러의 곱셈', () => {
  const dollar = new Dollar(5);
  dollar.times(2);

  expect(dollar.amount).toBe(10);
});
