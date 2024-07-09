import React, { useEffect, useState } from "react";
import { Input, Button, Form, message } from "antd";
import {
  UserOutlined,
  MailOutlined,
  LockOutlined,
  HomeOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import { getLocal } from "../utils/localStorage";
import axios from "axios";

const EditProfile = () => {
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const error = useSelector((state) => state.auth.error);
  const loading = useSelector((state) => state.auth.loading);

  const [updateProfile, setUpdateProfile] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    const accessToken = getLocal("accessToken");

    if (accessToken) {
      if (loggedIn) {
        setUserName(loggedIn.userName);
        setEmail(loggedIn.email);
        setPwd(loggedIn.pwd);
        setPhone(loggedIn.phone);
        setAddress(loggedIn.address);
      }
    }

    if (error) {
      console.error("Cannot save updated profile", error);
      message.error("Cannot save updated profile" + error);
    }
  }, [loggedIn, error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProfile = {
      userName,
      email,
      pwd,
      phone,
      address,
    };

    axios
      .put("/api/user/profile", updatedProfile, {
        headers: {
          Authorization: `Bearer ${getLocal("accessToken")}`,
        },
      })
      .then((response) => {
        message.success("Profile updated successfully");
        setUpdateProfile(false);
      })
      .catch((error) => {
        console.error("Error updating profile", error);
        message.error("Error updating profile");
      });
  };

  return (
    <div className='profile'>
      <div className='form'>
        <div className='form-header'>
          <h1>Profile</h1>
        </div>
        <div className='form-body'>
          <Form onSubmit={handleSubmit}>
            {loggedIn && (
              <div className='user-details'>
                <h2>User Information</h2>
                <p>
                  <strong>Username:</strong> {loggedIn.userName}
                </p>
                <p>
                  <strong>Email:</strong> {loggedIn.email}
                </p>
                {loggedIn.phone && (
                  <p>
                    <strong>Phone:</strong> {loggedIn.phone}
                  </p>
                )}
                {loggedIn.address && (
                  <p>
                    <strong>Address:</strong> {loggedIn.address}
                  </p>
                )}
              </div>
            )}

            {/* Edit profile form */}
            {updateProfile && (
              <div className='edit-profile-form'>
                <Form.Item
                  name='username'
                  label='Username'>
                  <Input
                    prefix={<UserOutlined />}
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder='Username'
                    size='large'
                  />
                </Form.Item>

                <Form.Item
                  name='email'
                  label='Email'>
                  <Input
                    prefix={<MailOutlined />}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email'
                    size='large'
                  />
                </Form.Item>

                <Form.Item
                  name='password'
                  label='Password'>
                  <Input.Password
                    prefix={<LockOutlined />}
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                    placeholder='Password'
                    size='large'
                  />
                </Form.Item>

                <Form.Item
                  name='phone'
                  label='Phone'>
                  <Input
                    prefix={<PhoneOutlined />}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder='Phone'
                    size='large'
                  />
                </Form.Item>

                <Form.Item
                  name='address'
                  label='Address'>
                  <Input
                    prefix={<HomeOutlined />}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
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
                    Save Changes
                  </Button>
                </Form.Item>
              </div>
            )}

            {/* Edit profile button */}
            <Button
              type='primary'
              onClick={() => setUpdateProfile(!updateProfile)}>
              {updateProfile ? "Cancel" : "Edit Profile"}
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
