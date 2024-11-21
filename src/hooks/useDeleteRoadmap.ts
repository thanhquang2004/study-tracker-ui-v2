import axios from "axios";
import { useState } from "react";
import { RoadmapData } from "../types/RoadmapData.type";

const useDeleteRoadmapById = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<RoadmapData>();
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  };

  const DeleteRoadmapById = async (id: string) => {
    setIsLoading(true);
    try {
      const respone = await axios.delete(
        `http://localhost:3000/deleteRoadmap/${id}`,
        config
      );

      setData(respone.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  return { DeleteRoadmapById, isLoading, data };
};

export { useDeleteRoadmapById };
