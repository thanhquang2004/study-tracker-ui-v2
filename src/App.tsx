import LoginForm from "./component/Auth/login";
import Register from "./component/Auth/register";
import QuizPage from "./component/QuizPage/QuizPage";
import Roadmap from "./component/Roadmap/Roadmap";
import Schedule from "./component/schedule/Schedule";
import Footer from "./layout/footer";
import Navbar from "./layout/header";
import HomePage from "./view/homePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="flex min-h-screen flex-col ">
      <Router>
        <header className="fixed top-0 z-10 w-full">
          <Navbar />
        </header>
        <main className="flex-grow mt-16">
          <Routes>
            <Route path={`/`} element={<HomePage />} />
            <Route path={"/schedule"} element={<Schedule />} />
            <Route path={"/login"} element={<LoginForm />} />
            <Route path={"/register"} element={<Register />} />
            <Route path={"/quiz"} element={<QuizPage />} />
            <Route path={"/roadmap"} element={<Roadmap />} />
            <Route path={"*"} element={<h1>404 Not Found</h1>} />
          </Routes>
        </main>
        <footer className=" drop-shadow">
          <Footer />
        </footer>
      </Router>
    </div>
  );
};
export default App;
