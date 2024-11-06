import { Button, Form, Input, message } from "antd";
import React from "react";
import type { ValidateErrorEntity } from "rc-field-form/lib/interface";
import { Link, useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = (values: {
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    console.log("Đăng ký với:", values);
    message.success("Đăng ký thành công!");
    navigate("/login");
  };

  const onFinishFailed = (error: ValidateErrorEntity) => {
    console.log("Failed:", error);
  };

  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-bl from-blue-500 to-teal-300 p-4">
      <div className="bg-white bg-opacity-90 p-10 rounded-3xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">
          Đăng ký
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Vui lòng điền thông tin để đăng ký
        </p>
        <Form
          name="register"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="space-y-5"
        >
          <Form.Item
            label={<span className="text-gray-600 font-medium">Họ Tên</span>}
            name="username"
            rules={[{ required: true, message: "Vui lòng nhập Họ tên!" }]}
          >
            <Input placeholder="abcd" size="large" className="rounded-full" />
          </Form.Item>
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
            rules={[
              { required: true, message: "Vui lòng nhập mật khẩu!" },
              { min: 6, message: "Mật khẩu phải có ít nhất 6 ký tự!" },
            ]}
          >
            <Input.Password
              placeholder="********"
              size="large"
              className="rounded-full"
            />
          </Form.Item>
          <Form.Item
            label={
              <span className="text-gray-600 font-medium">
                Xác Nhận Mật Khẩu
              </span>
            }
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Vui lòng xác nhận mật khẩu!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Mật khẩu không khớp!"));
                },
              }),
            ]}
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
              className="bg-blue-600 hover:bg-teal-400 text-white rounded-full  "
            >
              Đăng Ký
            </Button>
          </Form.Item>
        </Form>
        <div className="text-center mt-6">
          <p className="text-gray-600">
            Đã có tài khoản?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-semibold hover:underline"
            >
              Đăng nhập
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

export default Register;
