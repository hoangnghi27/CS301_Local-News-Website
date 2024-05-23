import "../styles/SignIn.scss";
import { Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

export default function SignIn() {
  return (
    <>
      <div className="sign-in">
        <div className="form">
          <div className="form-header">
            <h1>Sign In</h1>
          </div>
          <div className="form-body">
            <div className="user-name">
              <h2>User Name</h2>
              <Input
                prefix={<UserOutlined />}
                placeholder="Username"
                size="large"
              />
            </div>
            <div className="password">
              <h2>Password</h2>
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Password"
                size="large"
              />
            </div>
            <div className="button">
              <Button block contentFontSizeLG contentLineHeight size="large">Sign In</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
