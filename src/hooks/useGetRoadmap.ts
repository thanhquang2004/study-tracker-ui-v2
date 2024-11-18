import axios from "axios";
import { useState } from "react";

interface GetRoadmapRequest {
  info: string;
}

const useGetQuiz = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();

  const GetQuestion = async (request: GetRoadmapRequest) => {
    setIsLoading(true);
    try {
      const respone = await axios.post(
        "http://localhost:3000/generateRoadmap",
        request
      );

      setData(respone.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  return { GetQuestion, isLoading, data };
};

export { useGetQuiz };
