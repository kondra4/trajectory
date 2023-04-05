import React from 'react';
import { Avatar, Drawer, List, Radio, RadioChangeEvent } from 'antd';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { hide } from './sidebarSlice';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { filterCarList, getCarData, remove } from './carsListSlise';

const Sidebar: React.FC = () => {
  const dispatch = useAppDispatch();
  const isShown = useAppSelector((state) => state.sidebar.isShown);
  const data = useAppSelector((state) => state.carsList.carsList);

  const onChange = (e: RadioChangeEvent) => {
    dispatch(filterCarList(e.target.value));
  };

  const onClose = () => {
    dispatch(hide());
  };

  return (
    <>
      <Drawer title='Cars list' placement={'left'} width={500} onClose={onClose} open={isShown}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Radio.Group defaultValue={'all'} size='small' onChange={onChange}>
            <Radio.Button value='all'>all</Radio.Button>
            <Radio.Button value='price Up'>price Up</Radio.Button>
            <Radio.Button value='price Low'>price Low</Radio.Button>
            <Radio.Button value='year Up'>year Up</Radio.Button>
            <Radio.Button value='year Low'>year Low</Radio.Button>
          </Radio.Group>
        </div>

        <List
          itemLayout='horizontal'
          dataSource={data && data}
          renderItem={(item) => (
            <List.Item
              actions={[
                <a key="edit">
                  <EditOutlined key={'edit'} onClick={() => dispatch(getCarData(item))} />
                </a>,
                <a key="delete" >
                  <DeleteOutlined key={'delete'} onClick={() => dispatch(remove(item.id))} />
                </a>,
              ]}
            >
              <List.Item.Meta
                avatar={
                  <Avatar
                    style={{
                      backgroundColor: `${item.color}`,
                      borderColor: 'grey',
                    }}
                  />
                }
                title={`${item.name} ${item.model}`}
                description={`year: ${item.year} price: $${item.price}`}
              />
            </List.Item>
          )}
        />
      </Drawer>
    </>
  );
};

export default Sidebar;
