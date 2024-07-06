import React from "react";
import { getLocal } from "../utils/localStorage";
import "../styles/Profile.scss";
import { Input, Button, Form } from "antd";
import {
  UserOutlined,
  MailOutlined,
  LockOutlined,
  PhoneOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../utils/api";

const Profile = () => {
  const userData = getUserProfile();
  console.log(userData);

  const username = getLocal("username");
  const email = getLocal("email");
  const pwd = getLocal("password");
  const phone = getLocal("phoneNumber");
  const address = getLocal("address");
  const dispath = useDispatch();
  const user = useSelector((state) => state.loggedIn);
  const { loggedIn, error, loading } = useSelector((state) => state.user);
  useEffect(() => {
    const accessToken = getLocal("accessToken");
    if (accessToken) {
      if (user) {
        getUserName(user.userName);
        getEmail(user.email);
        getPwd(user.pwd);
        getPhone(user.phone);
        getAddress(user.address);
      }
    }
  }, []);
  return (
    <>
      <div className='user-profile'>
        <div className='form'>
          <div className='form-header'>
            <h1>Profile</h1>
          </div>
          <div className='form-body'>
            <Form>
              <Form.Item name='username'>
                <b>{username}</b>
              </Form.Item>

              <Form.Item name='email'>
                <b>{email}</b>
              </Form.Item>

              <Form.Item name='password'>
                <b>{pwd}</b>
              </Form.Item>

              <Form.Item name='phoneNumber'>
                <b>{phone}</b>
              </Form.Item>

              <Form.Item name='address'>
                <b>{address}</b>
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
                  Edit changes
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
