import React from "react";
import "../styles/Edit.scss";
import { Input, Button, Form, message } from "antd";
import {
  UserOutlined,
  MailOutlined,
  LockOutlined,
  PhoneOutlined,
  HomeOutlined,
} from "@ant-design/icons";


function Edit() {
  <div className='profile'>
        <div className='form'>
          <div className='form-header'>
            <h1>Profile</h1>
          </div>

          <div className='form-body'>
            <Form>
              <Form.Item
                name='username'
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}>
                <Input
                  prefix={<UserOutlined />}
                  placeholder='Username'
                  size='large'
                />
              </Form.Item>

              <Form.Item
                name='email'
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },

                  {
                    type: "email",
                    message: "Please input a valid email!",
                  },
                ]}>
                <Input
                  prefix={<MailOutlined />}
                  placeholder='Email'
                  size='large'
                />
              </Form.Item>

              <Form.Item
                name='password'
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },

                  {
                    min: 6,
                    message: "Password must be at least 6 characters!",
                  },
                ]}>
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder='Password'
                  size='large'
                />
              </Form.Item>

              <Form.Item
                name='confirmPassword'
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },

                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }

                      return Promise.reject(
                        new Error(
                          "The two passwords that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}>
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder='Confirm Password'
                  size='large'
                />
              </Form.Item>

              <Form.Item
                name='phoneNumber'
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },

                  {
                    pattern: /^[0-9]{10}$/,
                    message: "Please input a valid phone number!",
                  },
                ]}>
                <Input
                  prefix={<PhoneOutlined />}
                  placeholder='Phone Number'
                  size='large'
                />
              </Form.Item>

              <Form.Item
                name='address'
                rules={[
                  {
                    required: true,
                    message: "Please input your address!",
                  },
                ]}>
                <Input
                  prefix={<HomeOutlined />}
                  placeholder='Address'
                  size='large'
                />
              </Form.Item>

              <Form.Item>
                <Button
                  block
                  contentFontSizeLG
                  contentLineHeight
                  size='large'
                  type='primary'
                  htmlType='submit'
                  loading={loading}>
                  Sign Up
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
}
export default Edit;
