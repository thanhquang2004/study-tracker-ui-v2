import axios from "axios";
import { useState } from "react";
import { RoadmapData } from "../types/RoadmapData.type";

const useGetRoadmaps = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<RoadmapData[]>();
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  };

  const GetRoadmaps = async () => {
    setIsLoading(true);
    try {
      const respone = await axios.get(
        `http://localhost:3000/getRoadmaps`,
        config
      );

      setData(respone.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  return { GetRoadmaps, isLoading, data };
};

export { useGetRoadmaps };
