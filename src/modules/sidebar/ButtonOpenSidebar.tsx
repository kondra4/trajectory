import { Button } from 'antd';
import { useAppDispatch } from '../../hooks';
import { show } from './sidebarSlice';

function ButtonOpenSidebar() {
  const dispatch = useAppDispatch();

  return (
    <Button type='primary' size={'small'} onClick={() => dispatch(show())}>
      Open cars list
    </Button>
  );
}

export default ButtonOpenSidebar;
