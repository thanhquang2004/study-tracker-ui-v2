import axios from "axios";
import { useState } from "react";

interface GetQuestionRequest {
  goal: string;
  info: string;
}

const useGetQuiz = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  };

  const GetQuestion = async (request: GetQuestionRequest) => {
    setIsLoading(true);
    try {
      const respone = await axios.post(
        "http://localhost:3000/generateQuestion",
        request,
        config
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
