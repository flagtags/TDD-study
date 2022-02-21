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

export default function Cell({
  state,
  onClick,
  onContextMenu,
}: {
  state: CELL_STATE;
  onClick: () => void;
  onContextMenu: () => void;
}) {
  const FilledImage = <Image alt={'fill'} src={'/square.png'} />;
  const BlankImage = <div className={'blank'} />;
  const NothingImage = <Image alt={'nothing'} src={'/close.png'} />;

  const CellImage = {
    [CELL_STATE.FILL]: FilledImage,
    [CELL_STATE.BLANK]: BlankImage,
    [CELL_STATE.NOTHING]: NothingImage,
  };

  console.log(state);

  return (
    <Button className={'cell_button'} onClick={onClick} onContextMenu={onContextMenu}>
      {CellImage[state]}
    </Button>
  );
}
