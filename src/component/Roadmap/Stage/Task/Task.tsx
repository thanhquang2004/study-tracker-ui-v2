import { Collapse, Card, Typography } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import { Task as TaskType } from "../../../../types/RoadmapData.type";
import Subtask from "./Subtask/Subtask";

const { Panel } = Collapse;
const { Title, Text, Paragraph } = Typography;

type TaskProps = {
  task: TaskType;
};

function Task({ task }: TaskProps) {
  return (
    <Card className="mt-4 bg-white shadow-sm">
      <Title level={4} className="text-lg">
        {task.name}
      </Title>
      <Paragraph className="text-sm text-gray-600">
        {task.description}
      </Paragraph>
      <Text className="text-sm text-gray-500 mb-2">Time: {task.time}</Text>
      <Collapse
        bordered={false}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
        className="bg-gray-50"
      >
        {task.subtasks.map((subtask, index) => (
          <Panel header={subtask.name} key={index} className="bg-white mb-2">
            <Subtask subtask={subtask} />
          </Panel>
        ))}
      </Collapse>
    </Card>
  );
}

export default Task;
