import React from "react";
import { Layout, Menu } from "antd";
import { DesktopOutlined, PieChartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Header } = Layout;

const Navbar: React.FC = () => {
  return (
    <Layout>
      <Header className="p-0 ">
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{
            display: "flex",
            justifyContent: "start",
            paddingLeft: "12px",
            paddingRight: "12px",
          }}
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            <Link to="/roadmaps">Your roadmaps</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<DesktopOutlined />}>
            <Link to="/schedule">Calendar</Link>
          </Menu.Item>

          <Menu.Item
            style={{
              display: "flex",
              justifyContent: "end",
              marginLeft: "auto",
              fontWeight: "bold",
            }}
          >
            <Link to="/login">Login</Link>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};

export default Navbar;
