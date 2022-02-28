import { render, screen } from '@testing-library/react';
import LogicPaper from '.';
import { CELL_STATE } from './type';
export const testFillState = (container: HTMLElement) => {
  expect(container.getElementsByClassName('blank').length).toBe(0);
  expect(container.getElementsByTagName('img')[0]).toHaveAttribute('alt', 'fill');
  expect(container.getElementsByTagName('img')[0]).not.toHaveAttribute('alt', 'nothing');
};

export const testBlankstate = (container: HTMLElement) => {
  expect(container.getElementsByClassName('blank').length).toBe(1);
  expect(container.getElementsByTagName('img').length).toBe(0);
  expect(container.getElementsByTagName('img').length).toBe(0);
};

export const testNothingState = (container: HTMLElement) => {
  expect(container.getElementsByClassName('blank').length).toBe(0);
  expect(container.getElementsByTagName('img')[0]).not.toHaveAttribute('alt', 'fill');
  expect(container.getElementsByTagName('img')[0]).toHaveAttribute('alt', 'nothing');
};

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
