import { CELL_STATE } from '../type';
import { render, screen } from '@testing-library/react';
import { testFillState, testBlankstate, testNothingState } from '../testUtil';
import userEvent from '@testing-library/user-event';
import Cell from './index';

describe('Cell 컴포넌트가 state 따라 보여지는가.', () => {
  test('fill', () => {
    const { container } = render(<Cell state={CELL_STATE.FILL} onClick={() => {}} onContextMenu={() => {}} />);

    testFillState(container);
  });

  test('blank', () => {
    const { container } = render(<Cell state={CELL_STATE.BLANK} onClick={() => {}} onContextMenu={() => {}} />);

    testBlankstate(container);
  });

  test('nothing', () => {
    const { container } = render(<Cell state={CELL_STATE.NOTHING} onClick={() => {}} onContextMenu={() => {}} />);

    testNothingState(container);
  });
});

describe('Cell 컴포넌트 이벤트 핸들러 ', () => {
  test('우클릭', () => {
    const onContextMenu = jest.fn();

    render(<Cell state={CELL_STATE.FILL} onContextMenu={onContextMenu} onClick={() => {}} />);

    const button = screen.getByRole('button');
    userEvent.click(button, { button: 2 });

    expect(onContextMenu).toHaveBeenCalledTimes(1);
  });

  test('좌클릭', () => {
    const onClick = jest.fn();

    render(<Cell state={CELL_STATE.FILL} onContextMenu={() => {}} onClick={onClick} />);

    const button = screen.getByRole('button');
    userEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
