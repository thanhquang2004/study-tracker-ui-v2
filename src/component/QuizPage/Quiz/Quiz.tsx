import { Button, Col, Input, Row, Typography } from "antd";
import { useState } from "react";

type QuizProps = {
  quiz: {
    nextQuestion: string;
    info: string;
    suggestAnswer: {
      content: string;
    }[];
  };
  onSubmit: (info: string, answer: string) => void;
};

function Quiz(quizProp: QuizProps) {
  const [answer, setAnswer] = useState<string>("");

  return (
    <div className="pt-[80px] w-full h-full p-[20px]">
      <Row gutter={24} className="h-full">
        {/* Question and text input answer */}
        <Col span={12} className="gap-[20px] flex flex-col items-center">
          <Typography.Title level={2}>Generate Roadmap</Typography.Title>
          <Typography.Title
            style={{
              fontSize: "45px",
              color: "#333",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            {quizProp.quiz.nextQuestion}
          </Typography.Title>
          <div className="flex flex-col  w-[80%] mt-[50px] items-center">
            <Input
              placeholder="Options"
              className="rounded-[4px]"
              onChange={(e) => setAnswer(e.target.value)}
              size="large"
              style={{
                width: "100%",
                height: "50px",
                fontSize: "20px",
                backgroundColor: "#f0f0f0",
              }}
            />
            <br />
            <Button
              htmlType="submit"
              variant="outlined"
              className="w-[80px] h-[50px] flex bg-[#1677ff] text-white"
              onClick={() => quizProp.onSubmit(quizProp.quiz.info, answer)}
            >
              Submit
            </Button>
          </div>
        </Col>

        {/* List of recommended answers */}
        <Col span={12} className="h-full">
          <div className="flex flex-col items-center w-full h-full gap-5">
            {quizProp.quiz.suggestAnswer.map((answer) => (
              <Button
                variant="filled"
                className="w-full h-[22%] text-[30px]"
                onClick={() =>
                  quizProp.onSubmit(quizProp.quiz.info, answer.content)
                }
              >
                {answer.content}
              </Button>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Quiz;
