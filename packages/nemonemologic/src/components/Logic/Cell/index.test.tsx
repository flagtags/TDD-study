// 일단은 컴포넌트가 보여지는거
// CELL_STATE 에 따라서 blank, nothing, fill 이 제대로 보여지는지 테스트

import { CELL_STATE } from '../type';
import { render } from '@testing-library/react';
import Cell from './index';

describe('Cell 컴포넌트가 state 따라 보여지는가.', ()=>{
  test('fill', () => {

    const {getAllByAltText} = render(<Cell state={CELL_STATE.FILL} />)

    expect(getAllByAltText('fill')).toHaveAttribute('alt','fill')
  });
})