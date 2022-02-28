import { render, screen } from '@testing-library/react';
import LogicPaper from '.';
import { CELL_STATE } from './type';
import userEvent from '@testing-library/user-event';

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

describe('로직 페이퍼 클릭 처리', () => {
  describe('fill 일 때', () => {
    let firstCell: HTMLElement;

    beforeEach(() => {
      render(<LogicPaper rowLength={3} colLength={3} />);
      firstCell = screen.getAllByRole('button')[0];
      userEvent.click(firstCell);
      testFillState(firstCell);
    });

    test('좌클릭 처리', () => {
      userEvent.click(firstCell);
      testBlankstate(firstCell);
    });

    test('우클릭 처리', () => {
      userEvent.click(firstCell, { button: 2 });
      testNothingState(firstCell);
    });
  });

  describe('blank 일 때', () => {
    let firstCell: HTMLElement;

    beforeEach(() => {
      render(<LogicPaper rowLength={3} colLength={3} />);
      firstCell = screen.getAllByRole('button')[0];
      testBlankstate(firstCell);
    });

    test('좌클릭 처리', () => {
      userEvent.click(firstCell);
      testFillState(firstCell);
    });

    test('우클릭 처리', () => {
      userEvent.click(firstCell, { button: 2 });
      testNothingState(firstCell);
    });
  });

  describe('nothing 일 때', () => {
    let firstCell: HTMLElement;

    beforeEach(() => {
      render(<LogicPaper rowLength={3} colLength={3} />);
      firstCell = screen.getAllByRole('button')[0];
      userEvent.click(firstCell, { button: 2 });
      testNothingState(firstCell);
    });

    test('좌클릭 처리', () => {
      userEvent.click(firstCell);
      testFillState(firstCell);
    });

    test('우클릭 처리', () => {
      userEvent.click(firstCell, { button: 2 });
      testBlankstate(firstCell);
    });
  });
});