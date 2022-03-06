import styled from 'styled-components';
import { IFlexDirection } from '../type';

const Th = styled.th`
  background-color: lightgrey;
  border: 2px solid black;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;

const Button = styled.button`
  font-size: 1.8 rem;
  margin: 2.5px;
`;

const HintCell = ({ direction, hints, role }: { direction: IFlexDirection; hints: number[]; role: string }) => {
  const verticalAlign = direction === 'row' ? 'middle' : 'bottom';

  return (
    <Th role={role} style={{ verticalAlign }}>
      <Div style={{ flexDirection: direction }}>
        {hints.map((hint: number) => (
          <Button>{hint}</Button>
        ))}
      </Div>
    </Th>
  );
};

export default HintCell;
