import { Card, Typography, List } from "antd";
import { Subtask as SubtaskType } from "../../../../../types/RoadmapData.type";

const { Title, Text, Paragraph } = Typography;

type SubtaskProps = {
  subtask: SubtaskType;
};

function Subtask({ subtask }: SubtaskProps) {
  return (
    <Card className="mt-2 bg-white shadow-sm">
      <Title level={5} className="text-base font-medium">
        {subtask.name}
      </Title>
      <Paragraph className="text-sm text-gray-600">
        {subtask.description}
      </Paragraph>
      <Text className="text-sm text-gray-500">Time: {subtask.time}</Text>
      {subtask.resources.content && (
        <div className="mt-2">
          <Title level={5} className="text-sm font-semibold">
            Resources:
          </Title>
          <Paragraph className="text-sm">{subtask.resources.content}</Paragraph>
          {subtask.resources.links.length > 0 && (
            <List
              size="small"
              dataSource={subtask.resources.links}
              renderItem={(link) => (
                <List.Item>
                  <a href={link} className="text-blue-500 hover:underline">
                    {link}
                  </a>
                </List.Item>
              )}
            />
          )}
        </div>
      )}
    </Card>
  );
}

export default Subtask;
