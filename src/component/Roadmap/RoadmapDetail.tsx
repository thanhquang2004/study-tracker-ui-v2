import { Typography, Badge, Button } from "antd";
import Stage from "./Stage/Stage";
import { RoadmapData } from "../../types/RoadmapData.type";

const { Title, Paragraph } = Typography;

function RoadmapDetail({ roadmapData }: { roadmapData: RoadmapData }) {
  if (!roadmapData) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Title level={2} className="text-3xl font-bold mb-6">
          Roadmap Not Available
        </Title>
        <Paragraph>
          Sorry, the roadmap data is not available at the moment.
        </Paragraph>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between">
      <Title level={2} className="text-3xl font-bold mb-6">
        {roadmapData.title}
      </Title>
      <Button className="text-xl h-[40px] bg-blue-500 text-white" >Generate Schedule</Button>
      </div>
      {roadmapData.stages && roadmapData.stages.length > 0 ? (
        <div className="space-y-6">
          {roadmapData.stages.map((stage, index) => (
            <div key={index}>
              <Badge count={`Stage ${index + 1}`} className="mb-2" />
              <Stage stage={stage} />
            </div>
          ))}
        </div>
      ) : (
        <Paragraph>No stages available in this roadmap.</Paragraph>
      )}
    </div>
  );
}

export default RoadmapDetail;
