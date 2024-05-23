import "../styles/SignUp.scss";
import { Input, Button } from "antd";
import {
  UserOutlined,
  MailOutlined,
  LockOutlined,
  PhoneOutlined,
  HomeOutlined,
} from "@ant-design/icons";

export default function SignUp() {
  return (
    <>
      <div className="sign-up">
        <div className="form">
          <div className="form-header">
            <h1>Sign Up</h1>
          </div>
          <div className="form-body">
            <div className="user-name">
              <h3>User Name</h3>
              <Input
                prefix={<UserOutlined />}
                placeholder="Username"
                size="large"
              />
            </div>
            <div className="email">
              <h3>Email</h3>
              <Input
                prefix={<MailOutlined />}
                placeholder="Email"
                size="large"
              />
            </div>
            <div className="password">
              <h3>Password</h3>
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Password"
                size="large"
              />
            </div>
            <div className="confirm-password">
              <h3>Confirm Password</h3>
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Confirm Password"
                size="large"
              />
            </div>
            <div className="phone">
              <h3>PhoneNumber</h3>
              <Input
                prefix={<PhoneOutlined />}
                placeholder="PhoneNumber"
                size="large"
              />
            </div>
            <div className="address">
              <h3>Address</h3>
              <Input
                prefix={<HomeOutlined />}
                placeholder="Address"
                size="large"
              />
            </div>
            <div className="button">
              <Button block contentFontSizeLG contentLineHeight size="large">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
