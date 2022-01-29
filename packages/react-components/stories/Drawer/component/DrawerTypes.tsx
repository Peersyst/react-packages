import { Button, Row, useDrawer, DrawerProps } from '../../../src/';
import DisplayDrawer from './DisplayDrawer';

function DrawerTypes(): JSX.Element {
  const { showDrawer } = useDrawer();

  const handleOpen = (position: DrawerProps['position']) =>
    showDrawer(DisplayDrawer, {
      name: 'drawer',
      position,
      style:
        position === 'left' || position === 'right'
          ? { width: '300px', height: '100%' }
          : { width: '100%', height: '200px' },
    });

  return (
    <Row justifyContent="space-evenly">
      <Button onClick={() => handleOpen('left')}>Left</Button>
      <Button onClick={() => handleOpen('top')}>Top</Button>
      <Button onClick={() => handleOpen('right')}>Right</Button>
      <Button onClick={() => handleOpen('bottom')}>Bottom</Button>
    </Row>
  );
}

export default DrawerTypes;
