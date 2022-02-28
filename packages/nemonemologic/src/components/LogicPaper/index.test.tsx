import { render, screen } from '@testing-library/react';
import LogicPaper from '.';
import { CELL_STATE } from './type';

describe('로직 페이퍼 렌더링', () => {
  test('솔루션 2차원 배열의 행, 열만큼 로직 페이퍼 렌더링.', () => {
    const solution = [
      [CELL_STATE.FILL, CELL_STATE.FILL, CELL_STATE.FILL],
      [CELL_STATE.FILL, CELL_STATE.FILL, CELL_STATE.FILL],
      [CELL_STATE.FILL, CELL_STATE.FILL, CELL_STATE.FILL],
    ];

    const rowLength = solution.length;
    const colLength = solution[0].length;

    render(<LogicPaper rowLength={rowLength} colLength={colLength} />);

    expect(screen.getAllByRole('row')).toHaveLength(rowLength);
    expect(screen.getAllByRole('cell')).toHaveLength(rowLength * colLength);
    expect(screen.queryAllByRole('img')).toHaveLength(0);
  });
});
