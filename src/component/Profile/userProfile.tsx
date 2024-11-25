import React, { useEffect, useState } from "react";
import { IUser } from "../apis/AUsers/Auth/Auth.interface";
import userApi from "../apis/AUsers/Auth/Auth.api";
import { Avatar, Card, Col, Descriptions, Row, Typography } from "antd";
import { IdcardOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";

const { Title } = Typography;

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<IUser["result"] | null>(null);

  const getUserProfile = async () => {
    try {
      const userId = localStorage.getItem("userId");
      if (userId === null) return;
      const response = await userApi.getUserId(userId);
      setUser(response.result);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <Card
      style={{
        maxWidth: 600,
        margin: "50px auto",
        borderRadius: 8,
      }}
    >
      {user ? (
        <>
          <Row align="middle" justify="center" style={{ marginBottom: 16 }}>
            <Col>
              <Avatar
                size={120}
                icon={<UserOutlined />}
                style={{ backgroundColor: "#2563EB", fontSize: 48 }}
              />
            </Col>
          </Row>
          <Row justify="center">
            <Col>
              <Title level={3} style={{ textAlign: "center", marginBottom: 0 }}>
                {user.username || "Anonymous User"}
              </Title>
              <p style={{ textAlign: "center", color: "gray" }}>
                {user.occupation || "Not Specified"}
              </p>
            </Col>
          </Row>
          <Descriptions
            bordered
            size="small"
            column={1}
            style={{ marginTop: 20 }}
            labelStyle={{ fontWeight: "bold", background: "#f0f8ff" }}
          >
            <Descriptions.Item label="ID">
              <IdcardOutlined style={{ marginRight: 8 }} />
              {user.id}
            </Descriptions.Item>
            <Descriptions.Item label="name">
              <UserOutlined style={{ marginRight: 8 }} />
              {user.name}
            </Descriptions.Item>
            <Descriptions.Item label="Email">
              <MailOutlined style={{ marginRight: 8 }} />
              {user.email}
            </Descriptions.Item>
            <Descriptions.Item label="Date of Birth">
              {user.dob ? new Date(user.dob).toLocaleDateString() : "N/A"}
            </Descriptions.Item>
            <Descriptions.Item label="Gender">
              {user.gender || "Unknown"}
            </Descriptions.Item>
            <Descriptions.Item label="Age">
              {user.age || "N/A"}
            </Descriptions.Item>
          </Descriptions>
        </>
      ) : (
        <p style={{ textAlign: "center", margin: 20 }}>Loading...</p>
      )}
    </Card>
  );
};

export default UserProfile;
