import axios from "axios";
import { useState } from "react";
import { RoadmapData } from "../types/RoadmapData.type";

const useGetRoadmapById = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<RoadmapData>();

  const GetRoadmapById = async (id: string) => {
    setIsLoading(true);
    try {
      const respone = await axios.post(
        `http://localhost:3000/getRoadmap/${id}`
      );

      setData(respone.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  return { GetRoadmapById, isLoading, data };
};

export { useGetRoadmapById };
