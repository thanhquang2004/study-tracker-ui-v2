import { Layout, Menu, Button, Dropdown } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link, Outlet, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

const { Header, Sider, Content } = Layout;

const AdminLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const token = localStorage.getItem("accessToken");
  const roles = JSON.parse(localStorage.getItem("roles") || "[]");
  const navigate = useNavigate();

  useEffect(() => {
    if (
      !token ||
      roles.some((role: { name: string }) => role.name !== "ADMIN")
    ) {
      navigate("/login");
    } else if (location.pathname === "/admin") {
      navigate("/admin/users");
    }
  }, [token, roles, navigate, location]);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("roles");
    navigate("/login");
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{
          background: "#1D1E26",
          color: "#FFFFFF",
          boxShadow: "2px 0px 6px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div
          style={{
            padding: "20px",
            textAlign: "center",
            color: "#FFFFFF",
            fontWeight: "bold",
            fontSize: collapsed ? "16px" : "20px",
            transition: "font-size 0.3s",
          }}
        >
          {collapsed ? "Admin" : "Admin Dashboard"}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          style={{ background: "#1D1E26", color: "#FFFFFF" }}
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/admin/users">Quản lý người dùng</Link>
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout>
        <Header
          style={{
            background: "#FFFFFF",
            padding: "0 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ fontSize: "18px", color: "#333" }}
          />
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item
                  key="1"
                  onClick={handleLogout}
                  icon={<LogoutOutlined />}
                  style={{
                    color: "#d32020",
                  }}
                >
                  Đăng xuất
                </Menu.Item>
              </Menu>
            }
            placement="bottomRight"
          >
            <Button
              type="text"
              icon={<UserOutlined />}
              style={{ fontSize: "16px", color: "#333" }}
            >
              Admin
            </Button>
          </Dropdown>
        </Header>

        {/* Content Area */}
        <Content
          style={{
            margin: "24px 16px",
            padding: "24px",
            background: "#F9FAFB",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
