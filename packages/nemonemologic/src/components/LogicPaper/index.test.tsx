import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { getStateFromAlt } from './util';
import { CELL_SOLUTION_STATE, CELL_STATE } from './type';
import LogicPaper from '.';
import { testBlankstate, testFillState, testNothingState } from './testUtil';
import getHints from './getHints';

describe('로직 페이퍼 렌더링', () => {
  test('솔루션 2차원 배열의 행, 열만큼 로직 페이퍼 렌더링.', () => {
    const solution = [
      [CELL_SOLUTION_STATE.FILL, CELL_SOLUTION_STATE.FILL, CELL_SOLUTION_STATE.FILL],
      [CELL_SOLUTION_STATE.FILL, CELL_SOLUTION_STATE.FILL, CELL_SOLUTION_STATE.FILL],
      [CELL_SOLUTION_STATE.FILL, CELL_SOLUTION_STATE.FILL, CELL_SOLUTION_STATE.FILL],
    ];

    const rowLength = solution.length;
    const colLength = solution[0].length;
    const hints = getHints(solution);

    render(<LogicPaper rowLength={rowLength} colLength={colLength} hints={hints} />);

    expect(screen.getAllByRole('row')).toHaveLength(rowLength);
    expect(screen.getAllByRole('cell')).toHaveLength(rowLength * colLength);
    expect(screen.queryAllByRole('img')).toHaveLength(0);
  });
});

describe('로직 페이퍼 클릭 처리', () => {
  let firstCell: HTMLElement;
  let restCells: HTMLElement[];
  let cellStates: CELL_STATE[];

  beforeEach(() => {
    const solution = [
      [CELL_SOLUTION_STATE.FILL, CELL_SOLUTION_STATE.FILL, CELL_SOLUTION_STATE.FILL],
      [CELL_SOLUTION_STATE.FILL, CELL_SOLUTION_STATE.FILL, CELL_SOLUTION_STATE.FILL],
      [CELL_SOLUTION_STATE.FILL, CELL_SOLUTION_STATE.FILL, CELL_SOLUTION_STATE.FILL],
    ];
    const hints = getHints(solution);
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<LogicPaper rowLength={3} colLength={3} hints={hints} />);
    [firstCell, ...restCells] = screen.getAllByRole('button');
    cellStates = getStateFromAlt(restCells);
  });

  afterEach(() => {
    const [_, ...restCells] = screen.getAllByRole('button');
    expect(getStateFromAlt(restCells)).toEqual(cellStates);
  });

  describe('fill 일 때', () => {
    beforeEach(() => {
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
    beforeEach(() => {
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
    beforeEach(() => {
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
