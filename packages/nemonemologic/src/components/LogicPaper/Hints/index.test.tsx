// 힌트가 힌트 영역에 알맞게 표시된다.

import { render, screen, within } from '@testing-library/react';
import LogicPaper from '..';
import getHints from '../getHints';

describe('힌트가 힌트 영역에 알맞게 표시된다.', () => {
  test('스파스 로직 케이스', () => {
    const solution = [
      [1, 0, 1],
      [0, 1, 0],
      [1, 0, 1],
    ];
    const hints = getHints(solution);

    render(<LogicPaper rowLength={3} colLength={3} hints={hints} />);

    // row hints
    const logicPaperRowHints = screen.getAllByRole('row-hint').map((rowHint: HTMLElement) =>
      within(rowHint)
        .getAllByText(/d+/)
        .map((hint: HTMLElement) => +hint.innerText),
    );

    expect(logicPaperRowHints).toEqual(hints.row);

    // col hints
    const logicPaperColumnHints = screen.getAllByRole('column-hint').map((columnHint: HTMLElement) =>
      within(columnHint)
        .getAllByText(/d+/)
        .map((hint: HTMLElement) => +hint.innerText),
    );

    expect(logicPaperColumnHints).toEqual(hints.column);
  });
});
