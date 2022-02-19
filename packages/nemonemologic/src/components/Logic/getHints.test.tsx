import getHints, { splitSum } from './getHints';

describe('로직의 한 열을 힌트 배열로 바꾸는 함수 테스트', () => {
  test('일반 예시 테스트' ,() => {
    const row = [1, 1, 1, 0, 1, 0, 1];
    const hintOfRowSolution = [3,1,1];

    const hintOfRow = splitSum(row);

    expect(hintOfRow).toEqual(hintOfRowSolution);
  });

  // 테스트 케이스에서 끝에 0
  // 전체 0이면 버그를 찾을 수 있었다.
  test('[0,1,0] 테스트', () => {
    const row = [0,1,0];
    const hintOfRowSolution = [1];

    const hintOfRow = splitSum(row);

    expect(hintOfRow).toEqual(hintOfRowSolution);
  })

})
