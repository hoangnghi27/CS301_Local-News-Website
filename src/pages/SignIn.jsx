import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useState } from "react";
import "../styles/SignIn.scss";
import { saveLocal } from "../utils/localStorage";
import axios from "axios";

export default function SignIn() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:4000/signin",
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;
      if (data.accessToken) {
        console.log("User logged in successfully!");
        message.success("User logged in successfully!");
        // Store the token in local storage or a cookie
        saveLocal("accessToken", data.accessToken);
        // Save username to local storage
        saveLocal("username", values.username);
        // Redirect to home page or do something else
        window.location.href = "/";
      } else {
        console.error("Error logging in user:", data.error);
        message.error("Error logging in user: " + data.error);
      }
    } catch (error) {
      console.error("Error logging in user:", error);
      if (error && error.message) {
        message.error("Error logging in user: " + error.message);
      } else {
        message.error("Error logging in user");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className='sign-in'>
        <div className='form'>
          <div className='form-header'>
            <h1>Sign In</h1>
          </div>
          <div className='form-body'>
            <Form
              form={form}
              onFinish={handleSubmit}>
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

              <Form.Item>
                <Button
                  block
                  contentFontSizeLG
                  contentLineHeight
                  size='large'
                  type='primary'
                  htmlType='submit'
                  loading={loading}>
                  Sign In
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
