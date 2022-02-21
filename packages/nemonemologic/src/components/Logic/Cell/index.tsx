import styled from 'styled-components';
import { CELL_STATE } from '../type';

const Button = styled.button`
  border: 1px solid black;
  background-color: white;
  width: 25px;
  height: 25px;
  padding: 0;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export default function Cell({ state }: { state: CELL_STATE }) {

  const FilledImage = <Image alt={'fill'} src={'/square.png'} />;
  const BlankImage = <div className={'blank'} />;
  const NothingImage = <Image alt={'nothing'} src={'/close.png'} />;

  const CellImage = {
    [CELL_STATE.FILL]: FilledImage,
    [CELL_STATE.BLANK]: BlankImage,
    [CELL_STATE.NOTHING]: NothingImage,
  };

  return (
    <Button className={'cell_button'}>
      {CellImage[state]}
    </Button>
  );
}
