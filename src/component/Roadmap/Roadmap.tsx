import { useParams } from "react-router-dom";
import RoadmapDetail from "./RoadmapDetail";
import { useGetRoadmapById } from "../../hooks/useGetRoadmapById";
import { useEffect, useState } from "react";
import LoadingScreen from "../Loader/Loader";

function Roadmap() {
  const { id } = useParams<{ id: string }>();
  const { GetRoadmapById, data, isLoading } = useGetRoadmapById();
  const [isReady, setIsReady] = useState(false);

  const getRoadmap = async () => {
    return await GetRoadmapById(id!);
  };

  useEffect(() => {
    try {
      setIsReady(true);
      getRoadmap();
    } catch (error) {
      console.log(error);
    } finally {
      setIsReady(false);
    }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading || isReady) return <LoadingScreen />;

  return <RoadmapDetail roadmapData={data!} />;
}

export default Roadmap;
