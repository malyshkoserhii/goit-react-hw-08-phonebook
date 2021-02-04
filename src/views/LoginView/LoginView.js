import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { authOperations } from '../../redux/auth';
import s from './LoginView.module.css';

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  // const handleChange = ({ target: { name, value } }) => {
  //   switch (name) {
  //     case 'email':
  //       return setEmail(value);
  //     case 'password':
  //       return setPassword(value);
  //     default:
  //       return;
  //   }
  // };

  const handleSubmit = e => {
    // e.preventDefault();
    // dispatch(authOperations.logIn({ email, password }));
    // console.log('email: ', email);
    // setEmail('');
    // setPassword('');
  };

  const layout = {
    labelCol: { span: 10 },
    wrapperCol: { span: 4 },
  };
  const tailLayout = {
    wrapperCol: { offset: 10, span: 10 },
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  function QWE() {
    return (
      <div>
        <h1 className={s.loginPageTitle}>Login Page</h1>

        <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
          <label className={s.label}>
            Email
            <input
              type="email"
              name="email"
              value={email}
              // onChange={handleChange}
            />
          </label>

          <label className={s.label}>
            Password
            <input
              type="password"
              name="password"
              value={password}
              // onChange={handleChange}
            />
          </label>

          <button type="submit">Log In</button>
        </form>
      </div>
    );
  }

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={() => dispatch(authOperations.logIn({ email, password }))}
      onFinishFailed={onFinishFailed}
    >
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
  );
}
