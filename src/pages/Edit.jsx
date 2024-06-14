import React, { useEffect } from "react";
import "../styles/Edit.scss";
import { Input, Button, Form, message } from "antd";
import {
  UserOutlined,
  MailOutlined,
  LockOutlined,
  PhoneOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveLocal } from "../utils/localStorage";
import axios from "axios";

export default function Edit() {
  const [updateProfile, editUserProfile] = useState(false);
  const [userName, setUserName] = useState([]);
  const [email, setEmail] = useState([]);
  const [pwd, setPwd] = useState([]);
  const [phone, setPhone] = useState([]);
  const [address, setAddress] = useState([]);
  const dispath = useDispatch();
  const user = useSelector((state) => state.loggedIn);
  const { loggedIn, error, loading } = useSelector((state) => state.user);
  useEffect(() => {
    const accessToken = getLocal("accessToken");
    if (accessToken) {
      if (user) {
        setUserName = user.userName;
      }
    }
    if (error) {
      console.error("Cannot save updated profile", error);
      message.error("Cannot save updated profile" + error);
    }
  }, []);
  return (
    <>
      <div className='profile'>
        <div className='form'>
          <div className='form-header'>
            <h1>Profile</h1>
          </div>
          <div className='form-body'>
            <Form>
              <Form.Item name='username'>
                <Input
                  prefix={<UserOutlined />}
                  placeholder='Username'
                  size='large'
                />
              </Form.Item>

              <Form.Item name='email'>
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

              <Form.Item name='address'>
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
                  type='success'
                  htmlType='submit'
                  loading={loading}>
                  Save changes
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
