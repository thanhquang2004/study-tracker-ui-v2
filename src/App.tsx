import AdminLayout from "./component/Admin/adminLayout";
import UserList from "./component/Admin/userList";
import LoginForm from "./component/Auth/login";
import Register from "./component/Auth/register";
import UserProfile from "./component/Profile/userProfile";
import QuizPage from "./component/QuizPage/QuizPage";
import Roadmap from "./component/Roadmap/Roadmap";
import Roadmaps from "./component/Roadmap/Roadmaps";
import Schedule from "./component/schedule/Schedule";
import Footer from "./layout/footer";
import Navbar from "./layout/header";
import HomePage from "./view/homePage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
const checkTokenAndRole = () => {
  const token = localStorage.getItem("accessToken");
  const roles = JSON.parse(localStorage.getItem("roles") || "[]");

  // Kiểm tra xem người dùng có quyền admin không
  const isAdmin = roles.some((role: { name: string }) => role.name === "ADMIN");

  return { token, isAdmin };
};

// Component để bảo vệ route admin
const PrivateAdminRoute = ({ children }: { children: React.ReactNode }) => {
  const { token, isAdmin } = checkTokenAndRole();

  if (!token || !isAdmin) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};
const App = () => {
  const isAdminPath = location.pathname.startsWith("/admin");

  return (
    <div className="flex min-h-screen flex-col ">
      <Router>
        {!isAdminPath && (
          <header className="fixed top-0 z-10 w-full">
            <Navbar />
          </header>
        )}
        <main className={`flex-grow ${isAdminPath ? "" : "mt-[60px]"}`}>
          <Routes>
            <Route path={`/`} element={<HomePage />} />
            <Route path={"/schedule"} element={<Schedule />} />
            <Route path={"/login"} element={<LoginForm />} />
            <Route path={"/register"} element={<Register />} />
            <Route path={"/quiz"} element={<QuizPage />} />
            <Route path={"/roadmap/:id"} element={<Roadmap />} />
            <Route path={"*"} element={<h1>404 Not Found</h1>} />
            <Route path={"/roadmaps"} element={<Roadmaps />} />
            <Route path={"/userProfile"} element={<UserProfile />} />

            <Route
              path="/admin"
              element={
                <PrivateAdminRoute>
                  <AdminLayout />
                </PrivateAdminRoute>
              }
            >
              <Route path="users" element={<UserList />} />
            </Route>
          </Routes>
        </main>
        {!isAdminPath && (
          <footer className="mt-4 drop-shadow">
            <Footer />
          </footer>
        )}
      </Router>
    </div>
  );
};
export default App;
