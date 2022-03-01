import React, { useReducer } from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import Cell from './Cell';
import { CELL_STATE } from './type';

const Td = styled.td`
  height: 30px;
  width: 30px;
  border: 2px solid black;
  text-align: center;
  vertical-align: middle;
`;

export default function LogicPaper({ rowLength, colLength }: { rowLength: number; colLength: number }) {
  const cellStateReducer = (state: CELL_STATE[][], action: any): any => {
    const tempCellStates = _.cloneDeep(state);

    switch (action.toBe) {
      case 'fill':
        tempCellStates[action.rowIndex][action.colIndex] = CELL_STATE.FILL;
        return tempCellStates;
      case 'blank':
        tempCellStates[action.rowIndex][action.colIndex] = CELL_STATE.BLANK;
        return tempCellStates;
      case 'nothing':
        tempCellStates[action.rowIndex][action.colIndex] = CELL_STATE.NOTHING;
        return tempCellStates;
    }
  };

  const [cellStates, dispatch] = useReducer(
    cellStateReducer,
    Array(rowLength)
      .fill(0)
      .map(() => Array(colLength).fill(CELL_STATE.BLANK)),
  );

  const onClick = (rowIndex: number, colIndex: number) => {
    if (cellStates[rowIndex][colIndex] === CELL_STATE.FILL) {
      dispatch({ toBe: 'blank', rowIndex, colIndex });
    } else {
      dispatch({ toBe: 'fill', rowIndex, colIndex });
    }
  };

  const onContextMenu = (e: React.MouseEvent, rowIndex: number, colIndex: number) => {
    e.preventDefault();

    if (cellStates[rowIndex][colIndex] === CELL_STATE.NOTHING) {
      dispatch({ toBe: 'blank', rowIndex, colIndex });
    } else {
      dispatch({ toBe: 'nothing', rowIndex, colIndex });
    }
  };

  return (
    <table>
      <tbody>
        {Array(rowLength)
          .fill(0)
          .map((_, rowIndex) => (
            <tr key={rowIndex}>
              {Array(colLength)
                .fill(0)
                .map((_, colIndex) => (
                  <Td key={colIndex}>
                    <Cell
                      state={cellStates[rowIndex][colIndex]}
                      onClick={() => onClick(rowIndex, colIndex)}
                      onContextMenu={(e: React.MouseEvent) => onContextMenu(e, rowIndex, colIndex)}
                    />
                  </Td>
                ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
}
