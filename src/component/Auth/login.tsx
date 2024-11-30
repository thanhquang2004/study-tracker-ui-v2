import { Button, Form, Input, notification } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ILoginForm } from "../apis/AUsers/Auth/Auth.interface";
import authApi from "../apis/AUsers/Auth/Auth.api";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [notify, notifyContext] = notification.useNotification();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (values: ILoginForm) => {
    try {
      setIsLoading(true);
      console.log("Login values:", values);

      const response = await authApi.userLogin(values);

      // Lưu token trong localStorage
      localStorage.setItem("accessToken", response.result.token);
      localStorage.setItem("refreshToken", response.result.token);
      localStorage.setItem("expiryTime", response.result.expiryTime);
      localStorage.setItem("username", values.username);

      const userId = await authApi.getUserinfo();
      localStorage.setItem("userId", userId.result.id);
      localStorage.setItem("roles", JSON.stringify(userId.result.roles));

      notify.success({
        message: "Đăng nhập thành công",
      });
      const roles = userId.result.roles;
      const isAdmin = roles.some((role) => role.name === "ADMIN");
      console.log(isAdmin);

      if (isAdmin) {
        window.location.href = "/admin";
      } else {
        window.location.href = "/";
      }
    } catch (error) {
      console.log(error);
      notify.error({
        message: "Đăng nhập thất bại",
        description: "Tài khoản hoặc mật khẩu không đúng",
      });
    }
    setIsLoading(false);
  };

  const checkTokenExpiry = () => {
    const expiryTime = localStorage.getItem("expiryTime");
    if (expiryTime && new Date(expiryTime) < new Date()) {
      localStorage.clear();
      notify.warning({
        message: "Phiên đăng nhập đã hết hạn",
        description: "Vui lòng đăng nhập lại.",
      });
      navigate("/login");
    }
  };

  useEffect(() => {
    checkTokenExpiry();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-teal-300 p-4">
      <div className="bg-white bg-opacity-90 p-10 rounded-3xl shadow-2xl w-full  max-w-xl">
        <h2 className="text-3xl font-bold text-center mb-6 ">Đăng Nhập</h2>
        {notifyContext}
        <Form
          name="login"
          layout="vertical"
          onFinish={handleLogin}
          className="space-y-5"
        >
          <Form.Item
            label={<span className=" font-medium">Username</span>}
            name="username"
            rules={[{ required: true, message: "Vui lòng nhập username!" }]}
          >
            <Input
              placeholder="username"
              size="large"
              className="rounded-full"
            />
          </Form.Item>
          <Form.Item
            label={<span className=" font-medium">Mật Khẩu</span>}
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
              loading={isLoading}
              className="bg-blue-600  text-white rounded-full "
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
