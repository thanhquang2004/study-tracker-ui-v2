import Quiz from "./Quiz/Quiz";
import { useGetQuiz } from "../../hooks/useGetQuiz";
import LoadingScreen from "../Loader/Loader";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useGetRoadmap } from "../../hooks/useGetRoadmap";

const firstQuestion = {
  nextQuestion: "What do you want to study?",
  info: "Want to study",
  suggestAnswer: [],
};

const lastQuestion = {
  nextQuestion: "How long do you want to do it?",
  info: "Goal",
  suggestAnswer: [],
};

function QuizPage() {
  const [questionPage, setQuestionPage] = useState(0);
  const [infos, setInfos] = useState("");
  const [goal, setGoal] = useState("");
  const navigate = useNavigate();

  const { GetQuestion, data, isLoading } = useGetQuiz();
  const { GetRoadmap, roadmapData, roadmapIsLoading } = useGetRoadmap();

  const onSubmit = async (info: string, answer: string) => {
    console.log(info);
    console.log(answer);
    if (questionPage === 0) {
      setGoal(answer);
    }
    const newInfo = `${info}: ${answer}`;
    setInfos(`${infos} ${newInfo};`);

    const req = {
      goal: goal,
      info: `${infos} ${newInfo}`,
    };
    console.log(req);

    if (questionPage === 6) {
      await GetRoadmap(req);
    }

    await GetQuestion(req);

    setQuestionPage(questionPage + 1);
  };

  if (isLoading || roadmapIsLoading) return <LoadingScreen />;

  if (questionPage < 6) {
    navigate("/quiz");
  }

  if (roadmapData) {
    navigate(`/roadmap/${roadmapData.id}`);
  }

  return (
    <div className="w-full bg-white h-[100vh]">
      {questionPage === 0 ? (
        <Quiz quiz={firstQuestion} onSubmit={onSubmit} />
      ) : questionPage === 5 ? (
        <Quiz quiz={lastQuestion} onSubmit={onSubmit} />
      ) : (
        <Quiz quiz={data!} onSubmit={onSubmit} />
      )}
    </div>
  );
}

export default QuizPage;
