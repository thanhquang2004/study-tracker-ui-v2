import { useState } from "react";
import Quiz from "./Quiz/Quiz";

const data = {
  nextQuestion:
    "What specific aspects of music performance or composition are you most interested in pursuing?",
  info: "Specific Musical Goals",
  suggestAnswer: [
    {
      content: "Performance in concerts or recitals",
    },
    {
      content: "Composing original music",
    },
    {
      content: "Both performance and composition",
    },
  ],
};

const firstQuestion = {
  nextQuestion: "What do you want to study?",
  info: "Want to study",
  suggestAnswer: [],
};

const lastQuestion = {
  nextQuestion: "What is your goal?",
  info: "Goal",
  suggestAnswer: [],
};

function QuizPage() {
  const [questionPage, setQuestionPage] = useState(0);
  const [infos, setInfos] = useState("");
  const [goal, setGoal] = useState("");

  const onSubmit = async (info: string, answer: string) => {
    const newInfo = `${info}: ${answer}`;
    setInfos(`${infos} ;${newInfo}`);

    const req = {
      goal: goal,
      info: infos,
    };

    setQuestionPage(questionPage + 1);
  };

  return (
    <div className="w-full bg-white h-[100vh]">
      {questionPage === 0 ? (
        <Quiz quiz={firstQuestion} onSubmit={onSubmit} />
      ) : questionPage === 5 ? (
        <Quiz quiz={lastQuestion} onSubmit={onSubmit} />
      ) : (
        <Quiz quiz={data} onSubmit={onSubmit} />
      )}
    </div>
  );
}

export default QuizPage;
