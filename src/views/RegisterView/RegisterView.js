import { useDispatch } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { authOperations } from '../../redux/auth';
import s from './RegisterView.module.css';

export default function RegisterView() {
  const dispatch = useDispatch();

  const layout = {
    labelCol: { span: 10 },
    wrapperCol: { span: 4 },
  };
  const tailLayout = {
    wrapperCol: { offset: 10, span: 10 },
  };

  const onFinish = values => {
    dispatch(authOperations.register(values));
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={s.container}>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Name"
          name="name"
          value="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          value="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          value="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
