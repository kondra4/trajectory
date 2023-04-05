import React from 'react';
import { Button, Form, Input, Modal } from 'antd';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { closeModalWindow, saveNewCarData } from './carsListSlise';

interface InitialValues {
  name: string;
  model: string;
  year: number;
}

const ModalWindow: React.FC = () => {
  const [form] = Form.useForm();
  const isModalOpen = useAppSelector((state) => state.carsList.isModal);
  const carData = useAppSelector((state) => state.carsList.carData);
  const dispatch = useAppDispatch();

  const handleOk = () => {
    dispatch(closeModalWindow());
  };

  const handleCancel = () => {
    dispatch(closeModalWindow());
  };

  function onFinish(values: InitialValues) {
    const result = { ...carData };
    result.name = values.name;
    result.model = values.model;
    result.year = values.year;
    dispatch(saveNewCarData(result));
  }

  return (
    <>
      <Modal title='Edit data' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form
          layout={'horizontal'}
          form={form}
          initialValues={{ name: carData.name, model: carData.model, year: carData.year }}
          style={{ maxWidth: 600 }}
          onFinish={onFinish}
        >
          <Form.Item label='Name' name='name'>
            <Input placeholder='input placeholder' />
          </Form.Item>
          <Form.Item label='Model' name='model'>
            <Input placeholder='input placeholder' />
          </Form.Item>
          <Form.Item label='Year' name='year'>
            <Input placeholder='input placeholder' />
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit'>
              Save
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalWindow;
