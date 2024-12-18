import axios from "axios";
import { useState } from "react";
import { RoadmapData } from "../types/RoadmapData.type";

interface GetRoadmapRequest {
  info: string;
}

const useGetRoadmap = () => {
  const [roadmapIsLoading, setRoadmapIsLoading] = useState(false);
  const [roadmapData, setRoadmapData] = useState<RoadmapData>();
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  };


  const GetRoadmap = async (request: GetRoadmapRequest) => {
    setRoadmapIsLoading(true);
    try {
      const respone = await axios.post(
        "http://localhost:3000/generateRoadmap",
        request,
        config
      );

      setRoadmapData(respone.data);
      setRoadmapIsLoading(false);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  return { GetRoadmap, roadmapIsLoading, roadmapData };
};

export { useGetRoadmap };
