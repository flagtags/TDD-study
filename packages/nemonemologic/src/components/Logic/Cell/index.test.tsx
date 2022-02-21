import { CELL_STATE } from '../type';
import { fireEvent, render } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import Cell from './index';
import { useState } from 'react';

const testFillState = (container: HTMLElement) => {
  expect(container.getElementsByClassName('blank').length).toBe(0);
  expect(container.getElementsByTagName('img')[0]).toHaveAttribute('alt', 'fill');
  expect(container.getElementsByTagName('img')[0]).not.toHaveAttribute('alt', 'nothing');
};
const testBlankstate = (container: HTMLElement) => {
  expect(container.getElementsByClassName('blank').length).toBe(1);
  expect(container.getElementsByTagName('img').length).toBe(0);
  expect(container.getElementsByTagName('img').length).toBe(0);
};
const testNothingState = (container: HTMLElement) => {
  expect(container.getElementsByClassName('blank').length).toBe(0);
  expect(container.getElementsByTagName('img')[0]).not.toHaveAttribute('alt', 'fill');
  expect(container.getElementsByTagName('img')[0]).toHaveAttribute('alt', 'nothing');
};

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

describe('fill 일 때 ', () => {
  test('우클릭시 nothing 으로', () => {
    const { result } = renderHook(() => useState<CELL_STATE>(CELL_STATE.FILL));

    const onContextMenu = () => {
      act(() => {
        result.current[1](CELL_STATE.NOTHING);
      });
    };

    const { container, rerender } = render(
      <Cell state={result.current[0]} onContextMenu={onContextMenu} onClick={() => {}} />,
    );

    fireEvent(
      container.getElementsByTagName('button')[0],
      new MouseEvent('contextmenu', {
        bubbles: true,
        cancelable: true,
      }),
    );

    rerender(<Cell state={result.current[0]} onContextMenu={onContextMenu} onClick={() => {}} />);

    testFillState(container);
  });

  test('좌클릭 blank 로', async () => {
    const { result } = renderHook(() => useState<CELL_STATE>(CELL_STATE.FILL));

    const onClick = () => {
      act(() => {
        result.current[1](CELL_STATE.BLANK);
      });
    };

    const { container, rerender } = render(
      <Cell state={result.current[0]} onContextMenu={() => {}} onClick={onClick} />,
    );

    fireEvent(
      container.getElementsByTagName('button')[0],
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    );

    rerender(<Cell state={result.current[0]} onContextMenu={() => {}} onClick={onClick} />);

    testBlankstate(container);
  });
});
