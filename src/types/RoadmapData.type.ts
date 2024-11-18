export type RoadmapData = {
  id: string;
  userId: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  stages: Stage[];
};

export type Stage = {
  name: string;
  timeframe: string;
  tasks: Task[];
};
export type Task = {
  name: string;
  description: string;
  time: string;
  subtasks: Subtask[];
};

export type Subtask = {
  name: string;
  description: string;
  resources: Resource;
  time: string;
  quizzes: Quiz[];
};

export type Quiz = {
  question: string;
  options: string[];
  correctAnswer: number;
};

export type Resource = {
  content: string;
  links: string[];
};
