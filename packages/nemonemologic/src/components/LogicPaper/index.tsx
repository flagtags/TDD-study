import styled from 'styled-components';
import Cell from './Cell';
import { CELL_STATE } from './type';

const Td = styled.td`
  height: 30px;
  width: 30px;
  border: 2px solid black;
`;

export default function LogicPaper({ rowLength, colLength }: { rowLength: number; colLength: number }) {
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
                    <Cell state={CELL_STATE.BLANK} onClick={() => {}} onContextMenu={() => {}} />
                  </Td>
                ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
}
