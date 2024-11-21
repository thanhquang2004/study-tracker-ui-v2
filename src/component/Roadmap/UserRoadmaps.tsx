"use client";

import { useState } from "react";
import { List, Card, Button, Modal, Typography, message, Tooltip } from "antd";
import { DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { RoadmapData } from "../../types/RoadmapData.type";

const { Title, Text } = Typography;
const { confirm } = Modal;

type UserRoadmapsProps = {
  roadmaps: RoadmapData[];
  onDeleteRoadmap: (id: string) => Promise<void>;
};

export default function UserRoadmaps({
  roadmaps,
  onDeleteRoadmap,
}: UserRoadmapsProps) {
  const [loading, setLoading] = useState(false);

  const showDeleteConfirm = (roadmap: RoadmapData) => {
    confirm({
      title: "Are you sure you want to delete this roadmap?",
      icon: <ExclamationCircleOutlined />,
      content: `This will permanently delete "${roadmap.title}".`,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk: async () => {
        try {
          setLoading(true);
          await onDeleteRoadmap(roadmap.id);
          message.success("Roadmap deleted successfully");
        } catch (error) {
          message.error("Failed to delete roadmap" + error);
        } finally {
          setLoading(false);
        }
      },
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Title level={2} className="mb-6">
        Your Roadmaps
      </Title>
      <List
        grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }}
        dataSource={roadmaps}
        renderItem={(roadmap) => (
          <List.Item>
            <Tooltip title={roadmap.title} placement="top">
              <Card
                title={roadmap.title}
                extra={
                  <Button
                    type="text"
                    danger
                    icon={<DeleteOutlined />}
                    onClick={() => showDeleteConfirm(roadmap)}
                    loading={loading}
                  />
                }
                className="h-full"
              >
                <Text type="secondary">
                  Created: {new Date(roadmap.createdAt).toLocaleDateString()}
                </Text>
                <br />
                <Text type="secondary">
                  Updated: {new Date(roadmap.updatedAt).toLocaleDateString()}
                </Text>
                <br />
                <Text>Stages: {roadmap.stages.length}</Text>
              </Card>
            </Tooltip>
          </List.Item>
        )}
      />
    </div>
  );
}
