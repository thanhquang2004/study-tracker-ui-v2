import {
  Button,
  Form,
  Input,
  notification,
  DatePicker,
  Row,
  Col,
  Radio,
} from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import authApi from "../apis/AUsers/Auth/Auth.api";
import { IRegister } from "../apis/AUsers/Auth/Auth.interface";
import moment from "moment";

const Register: React.FC = () => {
  const [notify, notifyContext] = notification.useNotification();
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (values: IRegister) => {
    try {
      const userData: IRegister = {
        ...values,
        dob: moment(values.dob).format("YYYY-MM-DD"),
      };

      console.log("Giá trị ngày sinh (dob) từ Form:", values.dob);
      console.log("Giá trị ngày sinh (dob) sau khi định dạng:", userData.dob);
      await authApi.userRegister(userData);

      notify.success({
        message: "Đăng ký thành công",
        description: "Tài khoản của bạn đã được tạo",
      });

      window.location.href = "/login";
    } catch (error) {
      notify.error({
        message: "Đăng ký thất bại",
      });
    }
    setIsLoading(false);
  };

  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  return (
    <div className="flex items-center justify-center h-2/4 bg-gradient-to-bl from-blue-500 to-teal-300 p-4">
      <div className="bg-white bg-opacity-90 p-10 rounded-3xl shadow-2xl w-full max-w-xl">
        <h2 className="text-3xl font-bold text-center mb-6 ">Đăng ký</h2>
        <p className="text-center text-gray-600 mb-8">
          Vui lòng điền thông tin để đăng ký
        </p>
        {notifyContext}
        <Form
          name="register"
          layout="vertical"
          onFinish={handleRegister}
          className="space-y-5"
        >
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item
                label={<span className=" font-medium">Username</span>}
                name="username"
                rules={[{ required: true, message: "Vui lòng nhập Họ tên!" }]}
              >
                <Input
                  placeholder="abcd"
                  size="large"
                  className="rounded-full"
                />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                label={<span className="font-medium">Email</span>}
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
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={12}>
              <Form.Item
                label={<span className="font-medium">Mật Khẩu</span>}
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
            </Col>

            <Col span={12}>
              <Form.Item
                label={<span className=" font-medium">Xác Nhận Mật Khẩu</span>}
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
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={12}>
              <Form.Item
                label={<span className=" font-medium">Tên</span>}
                name="name"
                rules={[{ required: true, message: "Vui lòng nhập tên!" }]}
              >
                <Input
                  placeholder="Abcd"
                  size="large"
                  className="rounded-full"
                />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                label={<span className=" font-medium">Giới tính</span>}
                name="gender"
                rules={[
                  { required: true, message: "Vui lòng chọn giới tính!" },
                ]}
              >
                <Radio.Group>
                  <Radio value="male">Nam</Radio>
                  <Radio value="female">Nữ</Radio>
                  <Radio value="other">Khác</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={12}>
              <Form.Item
                label={<span className=" font-medium">Nghề nghiệp</span>}
                name="occupation"
                rules={[
                  { required: true, message: "Vui lòng nhập nghề nghiệp!" },
                ]}
              >
                <Input
                  placeholder="Ví dụ: Lập trình viên"
                  size="large"
                  className="rounded-full"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={<span className=" font-medium">Ngày sinh</span>}
                name="dob"
                rules={[
                  { required: true, message: "Vui lòng chọn ngày sinh!" },
                ]}
              >
                <DatePicker
                  placeholder="Chọn ngày sinh"
                  size="large"
                  className="rounded-full w-full"
                  format="YYYY-MM-DD"
                />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={isLoading}
              block
              size="large"
              className="bg-blue-600 hover:bg-teal-400 text-white rounded-full"
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
