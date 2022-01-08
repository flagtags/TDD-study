// TODO
// 1. 달러 인스턴스의 값이 times 이후에 바뀌는 문제 해결

import Dollar from './index';

test('달러의 곱셈', () => {
  const dollar = new Dollar(5);
  let product = dollar.times(2);
  expect(product).toStrictEqual(new Dollar(10));

  product = dollar.times(3);
  expect(product).toStrictEqual(new Dollar(15));
});
