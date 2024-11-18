import { Card, Collapse, Typography } from "antd";
import { Stage as StageType } from "../../../types/RoadmapData.type";
const { Title, Paragraph } = Typography;
import { CaretRightOutlined } from "@ant-design/icons";
import Task from "./Task/Task";
const { Panel } = Collapse;

type StageProps = {
  stage: StageType;
};

function Stage({ stage }: StageProps) {
  return (
    <Card className="text-sm bg-white shadow">
      <Title level={3} className="text-xl">
        {stage.name}
      </Title>
      <Paragraph>Timeframe: {stage.timeframe}</Paragraph>
      <Collapse
        bordered={false}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
        className="bg-gray-50"
      >
        {stage.tasks.map((task, index) => (
          <Panel header={task.name} key={index} className="bg-white mb-2">
            <Task task={task} />
          </Panel>
        ))}
      </Collapse>
    </Card>
  );
}

export default Stage;
