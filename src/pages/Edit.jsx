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
/*import { saveLocal } from "../utils/localStorage";
import axios from "axios";*/

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
        setUserName(user.userName);
        setEmail(user.email);
        setPwd(user.pwd);
        setPhone(user.phone);
        setAddress(user.address);
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
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                editUserProfile(!updateProfile);
              }}>
              <Form.Item name='username'>
                {updateProfile ? (
                  <Input
                    prefix={<UserOutlined />}
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder='Username'
                    size='large'
                  />
                ) : (
                  <b>{userName}</b>
                )}
              </Form.Item>

              <Form.Item name='email'>
                {updateProfile ? (
                  <Input
                    prefix={<MailOutlined />}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email'
                    size='large'
                  />
                ) : (
                  <b>{email}</b>
                )}
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
                {updateProfile ? (
                  <Input.Password
                    prefix={<LockOutlined />}
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                    placeholder='Password'
                    size='large'
                  />
                ) : (
                  <b>{pwd}</b>
                )}
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
                {updateProfile ? (
                  <Input
                    prefix={<PhoneOutlined />}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder='Phone Number'
                    size='large'
                  />
                ) : (
                  <b>{phone}</b>
                )}
              </Form.Item>

              <Form.Item name='address'>
                {updateProfile ? (
                  <Input
                    prefix={<HomeOutlined />}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder='Address'
                    size='large'
                  />
                ) : (
                  <b>{address}</b>
                )}
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
                  {updateProfile ? "Save" : "Edit"}
                  changes
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
