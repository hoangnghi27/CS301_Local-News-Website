import "../styles/SignUp.scss";
import { Input, Button, Form, message } from "antd";
import { useState } from "react";
import {
  UserOutlined,
  MailOutlined,
  LockOutlined,
  PhoneOutlined,
  HomeOutlined,
} from "@ant-design/icons";

export default function SignUp() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    setLoading(true);

    try {
      const response = await fetch("http://localhost:4000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      if (data.message === "User registered successfully") {
        console.log("User registered successfully!");

        message.success("User registered successfully!");

        window.location.href = "/sign-in";
      } else {
        console.error("Error registering user:", data.error);

        message.error("Error registering user: " + data.error);
      }
    } catch (error) {
      console.error("Error registering user:", error);
      message.error("Error registering user: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="sign-up">
        <div className="form">
          <div className="form-header">
            <h1>Sign Up</h1>
          </div>

          <div className="form-body">
            <Form form={form} onFinish={handleSubmit}>
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined />}
                  placeholder="Username"
                  size="large"
                />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },

                  {
                    type: "email",
                    message: "Please input a valid email!",
                  },
                ]}
              >
                <Input
                  prefix={<MailOutlined />}
                  placeholder="Email"
                  size="large"
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },

                  {
                    min: 6,
                    message: "Password must be at least 6 characters!",
                  },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="Password"
                  size="large"
                />
              </Form.Item>

              <Form.Item
                name="confirmPassword"
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
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="Confirm Password"
                  size="large"
                />
              </Form.Item>

              <Form.Item
                name="phoneNumber"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },

                  {
                    pattern: /^[0-9]{10}$/,
                    message: "Please input a valid phone number!",
                  },
                ]}
              >
                <Input
                  prefix={<PhoneOutlined />}
                  placeholder="Phone Number"
                  size="large"
                />
              </Form.Item>

              <Form.Item
                name="address"
                rules={[
                  {
                    required: true,
                    message: "Please input your address!",
                  },
                ]}
              >
                <Input
                  prefix={<HomeOutlined />}
                  placeholder="Address"
                  size="large"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  block
                  contentFontSizeLG
                  contentLineHeight
                  size="large"
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                >
                  Sign Up
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
