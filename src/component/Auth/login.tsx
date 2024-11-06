import { Button, Form, Input, message } from "antd";
import React from "react";
import type { ValidateErrorEntity } from "rc-field-form/lib/interface";
import { Link, useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = (values: { email: string; password: string }) => {
    console.log("Đăng nhập với:", values);
    message.success("Đăng nhập thành công!");
    navigate("/");
  };

  const onFinishFailed = (error: ValidateErrorEntity) => {
    console.log("Failed:", error);
  };

  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-teal-300 p-4">
      <div className="bg-white bg-opacity-90 p-10 rounded-3xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">
          Đăng Nhập
        </h2>

        <Form
          name="login"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="space-y-5"
        >
          <Form.Item
            label={<span className="text-gray-600 font-medium">Email</span>}
            name="email"
            rules={[
              { required: true, message: "Vui lòng nhập địa chỉ email!" },
              {
                pattern: emailRegex,
                message: "Email phải là định dạng '@gmail.com'!",
              },
            ]}
          >
            <Input
              placeholder="you@gmail.com"
              size="large"
              className="rounded-full"
            />
          </Form.Item>
          <Form.Item
            label={<span className="text-gray-600 font-medium">Mật Khẩu</span>}
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
          >
            <Input.Password
              placeholder="********"
              size="large"
              className="rounded-full"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              size="large"
              className="bg-blue-600 hover:bg-purple-700 text-white rounded-full "
            >
              Đăng Nhập
            </Button>
          </Form.Item>
        </Form>
        <div className="text-center mt-6">
          <p className="text-gray-600">
            Chưa có tài khoản?{" "}
            <Link
              to="/register"
              className="text-blue-600 font-semibold hover:underline"
            >
              Đăng ký ngay
            </Link>
          </p>
          <p className="text-gray-600 mt-2">
            <Link to="/" className="text-gray-500 hover:underline">
              Quay lại trang chủ
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
