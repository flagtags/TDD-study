import { CELL_STATE } from '../type';
import { fireEvent, render } from '@testing-library/react';
import Cell from './index';

describe('Cell 컴포넌트가 state 따라 보여지는가.', () => {
  test('fill', () => {
    const { container } = render(<Cell state={CELL_STATE.FILL} />);

    expect(container.getElementsByClassName('blank').length).toBe(0);
    expect(container.getElementsByTagName('img')[0]).toHaveAttribute('alt', 'fill');
    expect(container.getElementsByTagName('img')[0]).not.toHaveAttribute('alt','nothing');
  });

  test('blank', () => {
    const { container } = render(<Cell state={CELL_STATE.BLANK} />);

    expect(container.getElementsByClassName('blank').length).toBe(1);
  });

  test('nothing', () => {
    const { container } = render(<Cell state={CELL_STATE.NOTHING} />);

    expect(container.getElementsByTagName('img')[0]).toHaveAttribute('alt', 'nothing');
    expect(container.getElementsByClassName('blank').length).toBe(0);
    expect(container.getElementsByTagName('img')[0]).not.toHaveAttribute('alt','fill');
  });
});

describe('fill 일 때 ', () => {
  test('우클릭시 nothing 으로', () => {
    const { container } = render(<Cell state={CELL_STATE.FILL} />);
    const { getElementsByTagName } = container;

    fireEvent(getElementsByTagName('button')[0],
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }));

    expect(getElementsByTagName('img')[0]).toHaveAttribute('alt', 'nothing');
  });

  test('좌클릭 blank 로', () => {
    const { container } = render(<Cell state={CELL_STATE.FILL} />);
    fireEvent(container.getElementsByTagName('button')[0],
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }));

    expect(container.getElementsByClassName('blank').length).toBe(1);
  });
});