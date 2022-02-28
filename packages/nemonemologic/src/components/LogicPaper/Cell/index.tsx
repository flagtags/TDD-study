import styled from 'styled-components';
import { CELL_STATE } from '../type';

const Button = styled.button`
  border: none;
  background-color: white;
  width: 100%;
  height: 100%;
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

  return (
    <Button className={'cell_button'} onClick={onClick} onContextMenu={onContextMenu}>
      {CellImage[state]}
    </Button>
  );
}
