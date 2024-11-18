import { RoadmapData } from "../../types/RoadmapData.type";
import Road from "./RoadmapDetail";



const data: RoadmapData = {
  title: "React Learning Roadmap for Beginners",
  stages: [
    {
      name: "Stage 1: Introduction to JavaScript, JSX, and React Fundamentals",
      timeframe: "4 weeks",
      tasks: [
        {
          name: "Task 1: Getting Started with JavaScript ES6+",
          description: "Learn the basics of JavaScript ES6+.",
          time: "1 week",
          subtasks: [
            {
              name: "Subtask 1: Variables, Data Types, and Operators",
              description:
                "Understand variables, data types, and operators in JavaScript.",
              resources: { content: "", links: [] },
              time: "1 day",
              quizzes: [],
            },
            {
              name: "Subtask 2: Control Flow and Loops",
              description:
                "Learn about control flow statements and loops in JavaScript.",
              resources: { content: "", links: [] },
              time: "1 day",
              quizzes: [],
            },
            {
              name: "Subtask 3: Functions and Scope",
              description: "Understand functions and scope in JavaScript.",
              resources: { content: "", links: [] },
              time: "1 day",
              quizzes: [],
            },
            {
              name: "Subtask 4: Arrays and Objects",
              description: "Learn about arrays and objects in JavaScript.",
              resources: { content: "", links: [] },
              time: "1 day",
              quizzes: [],
            },
            {
              name: "Subtask 5: Working with the DOM",
              description:
                "Learn how to manipulate the Document Object Model (DOM).",
              resources: { content: "", links: [] },
              time: "1 day",
              quizzes: [],
            },
          ],
        },
        {
          name: "Task 2: Introduction to JSX",
          description: "Learn the basics of JSX.",
          time: "1 week",
          subtasks: [
            {
              name: "Subtask 1: What is JSX?",
              description: "Understand what JSX is and how it works.",
              resources: { content: "", links: [] },
              time: "1 day",
              quizzes: [],
            },
            {
              name: "Subtask 2: Embedding Expressions in JSX",
              description: "Learn how to embed JavaScript expressions in JSX.",
              resources: { content: "", links: [] },
              time: "1 day",
              quizzes: [],
            },
            {
              name: "Subtask 3: JSX Attributes",
              description: "Understand how to use attributes in JSX.",
              resources: { content: "", links: [] },
              time: "1 day",
              quizzes: [],
            },
            {
              name: "Subtask 4: JSX and HTML",
              description: "Compare and contrast JSX with HTML.",
              resources: { content: "", links: [] },
              time: "1 day",
              quizzes: [],
            },
            {
              name: "Subtask 5: JSX Styling",
              description: "Learn how to style JSX elements.",
              resources: { content: "", links: [] },
              time: "1 day",
              quizzes: [],
            },
          ],
        },
        {
          name: "Task 3: Building Your First React Components",
          description: "Build your first React components.",
          time: "2 weeks",
          subtasks: [
            {
              name: "Subtask 1: Setting up a Development Environment",
              description: "Set up a development environment for React.",
              resources: { content: "", links: [] },
              time: "1 day",
              quizzes: [],
            },
            {
              name: "Subtask 2: Creating a Simple Component",
              description: "Create a simple functional component in React.",
              resources: { content: "", links: [] },
              time: "2 days",
              quizzes: [],
            },
            {
              name: "Subtask 3: Creating a Class Component",
              description: "Create a class component in React.",
              resources: { content: "", links: [] },
              time: "2 days",
              quizzes: [],
            },
            {
              name: "Subtask 4: Rendering Components",
              description: "Learn how to render React components.",
              resources: { content: "", links: [] },
              time: "2 days",
              quizzes: [],
            },
            {
              name: "Subtask 5: Component Composition",
              description: "Understand component composition in React.",
              resources: { content: "", links: [] },
              time: "2 days",
              quizzes: [],
            },
          ],
        },
      ],
    },
    {
      name: "Stage 2: React State and Props",
      timeframe: "3 weeks",
      tasks: [
        {
          name: "Understanding State",
          description: "Learn how to use state in React components.",
          time: "1 week",
          subtasks: [
            {
              name: "What is state?",
              description: "Understand the concept of state in React.",
              resources: { content: "", links: [] },
              time: "1 day",
              quizzes: [],
            },
            {
              name: "Using setState()",
              description:
                "Learn how to use the setState() method to update component state.",
              resources: { content: "", links: [] },
              time: "2 days",
              quizzes: [],
            },
            {
              name: "State and Functional Components",
              description:
                "Learn how to use state with functional components using the useState hook.",
              resources: { content: "", links: [] },
              time: "2 days",
              quizzes: [],
            },
          ],
        },
        {
          name: "Working with Props",
          description: "Learn how to use props in React components.",
          time: "1 week",
          subtasks: [
            {
              name: "What are props?",
              description: "Understand the concept of props in React.",
              resources: { content: "", links: [] },
              time: "1 day",
              quizzes: [],
            },
            {
              name: "Passing props to components",
              description: "Learn how to pass props to child components.",
              resources: { content: "", links: [] },
              time: "2 days",
              quizzes: [],
            },
            {
              name: "Prop Validation",
              description: "Learn how to validate props using PropTypes.",
              resources: { content: "", links: [] },
              time: "2 days",
              quizzes: [],
            },
          ],
        },
        {
          name: "State and Props Together",
          description:
            "Learn how to use state and props together in React components.",
          time: "1 week",
          subtasks: [
            {
              name: "Lifting state up",
              description:
                "Understand when and how to lift state up to a parent component.",
              resources: { content: "", links: [] },
              time: "2 days",
              quizzes: [],
            },
            {
              name: "Passing props down",
              description: "Learn how to pass props down to child components.",
              resources: { content: "", links: [] },
              time: "2 days",
              quizzes: [],
            },
            {
              name: "Building a simple application",
              description: "Build a simple application using state and props.",
              resources: { content: "", links: [] },
              time: "1 day",
              quizzes: [],
            },
          ],
        },
      ],
    },
    {
      name: "Stage 3: Advanced React Concepts and Project",
      timeframe: "4 weeks",
      tasks: [
        {
          name: "Task 1: Lifecycle Methods",
          description: "Learn about component lifecycle methods.",
          time: "1 week",
          subtasks: [
            {
              name: "Mounting and Unmounting",
              description:
                "Understand the componentDidMount and componentWillUnmount lifecycle methods.",
              resources: { content: "", links: [] },
              time: "2 days",
              quizzes: [],
            },
            {
              name: "Updating",
              description:
                "Learn about the componentDidUpdate lifecycle method.",
              resources: { content: "", links: [] },
              time: "2 days",
              quizzes: [],
            },
            {
              name: "Error Handling",
              description:
                "Learn about the componentDidCatch lifecycle method.",
              resources: { content: "", links: [] },
              time: "1 day",
              quizzes: [],
            },
          ],
        },
        {
          name: "Task 2: Working with Forms and Events",
          description: "Learn how to work with forms and events in React.",
          time: "1 week",
          subtasks: [
            {
              name: "Handling Events",
              description: "Learn how to handle events in React.",
              resources: { content: "", links: [] },
              time: "2 days",
              quizzes: [],
            },
            {
              name: "Controlled Components",
              description: "Understand controlled components in React forms.",
              resources: { content: "", links: [] },
              time: "2 days",
              quizzes: [],
            },
            {
              name: "Uncontrolled Components",
              description: "Understand uncontrolled components in React forms.",
              resources: { content: "", links: [] },
              time: "1 day",
              quizzes: [],
            },
          ],
        },
        {
          name: "Task 3: Building a React Project",
          description: "Build a more complex React project.",
          time: "2 weeks",
          subtasks: [
            {
              name: "Project Planning",
              description: "Plan your project and choose a topic.",
              resources: { content: "", links: [] },
              time: "2 days",
              quizzes: [],
            },
            {
              name: "Project Implementation",
              description:
                "Implement your project using the concepts you've learned.",
              resources: { content: "", links: [] },
              time: "6 days",
              quizzes: [],
            },
            {
              name: "Project Deployment",
              description:
                "Deploy your project to a web server or hosting platform.",
              resources: { content: "", links: [] },
              time: "2 days",
              quizzes: [],
            },
          ],
        },
      ],
    },
  ],
};

function Roadmap() {
  return <Road roadmapData={data} />;
}

export default Roadmap;
