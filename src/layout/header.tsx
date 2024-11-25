import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import {
  DesktopOutlined,
  LogoutOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

const { Header } = Layout;

const Navbar: React.FC = () => {
  const location = useLocation();
  const [username, setUsername] = useState<string | null>(null);
  const [selectedKey, setSelectedKey] = useState<string>("");

  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    setUsername(savedUsername);
  }, []);

  useEffect(() => {
    const currentPath = location.pathname;
    setSelectedKey(currentPath);
  }, [location]);

  const handleLogout = () => {
    const confirmLogout = window.confirm("Bạn có chắc chắn muốn đăng xuất?");

    if (confirmLogout) {
      localStorage.removeItem("username");
      localStorage.removeItem("userId");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("expiryTime");
      window.location.href = "/login";
    }
  };

  return (
    <Layout>
      <Header className="p-0 ">
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[selectedKey]}
          style={{
            display: "flex",
            justifyContent: "start",
            paddingLeft: "12px",
            paddingRight: "12px",
          }}
        >
          <Menu.Item key="/" icon={<PieChartOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="/roadmaps" icon={<DesktopOutlined />}>
            <Link to="/roadmaps">Your roadmaps</Link>
          </Menu.Item>
          <Menu.Item key="/schedule" icon={<DesktopOutlined />}>
            <Link to="/schedule">Calendar</Link>
          </Menu.Item>

          {username ? (
            <>
              <Menu.Item
                style={{
                  marginLeft: "auto",
                  fontWeight: "bold",
                }}
              >
                <Link to="/userProfile">
                  <span className="font-bold">Hello, {username}</span>
                </Link>
              </Menu.Item>
              <Menu.Item
                icon={<LogoutOutlined />}
                onClick={handleLogout}
                style={{
                  fontWeight: "bold",
                }}
              >
                Đăng xuất
              </Menu.Item>
            </>
          ) : (
            <Menu.Item
              style={{
                marginLeft: "auto",
                fontWeight: "bold",
              }}
            >
              <Link to="/login">Login</Link>
            </Menu.Item>
          )}
        </Menu>
      </Header>
    </Layout>
  );
};

export default Navbar;
