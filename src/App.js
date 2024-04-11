import { Route, Routes, useLocation, useNavigationType } from "react-router";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import VeriFyEmail from "./pages/VerifyEmail";
import EmailVerification from "./pages/EmailVerification";
import Signin from "./pages/Signin";
import Profile from "./pages/Profile";
import Privateroutes from "./components/ProtectedRoutes";
import Openroutes from "./components/OpenRouter";
import { useEffect } from "react";
import "./app.css";
import Start from "./pages/ProfileCreation";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathName = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathName]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathName) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathName]);
  return (
    <div className="w-[100vw] min-h-[100vh]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signup"
          element={
            <Openroutes>
              <Signup />
            </Openroutes>
          }
        />
        <Route
          path="/signin"
          element={
            <Openroutes>
              <Signin />
            </Openroutes>
          }
        />
        <Route
          path="/getStarted"
          element={
            <Privateroutes>
              <Start />
            </Privateroutes>
          }
        />
        <Route path="/verifyEmail" element={<VeriFyEmail />} />

        <Route
          path="/EmailVerification/:id/:uuid"
          element={<EmailVerification />}
        />
        <Route
          path="/profile"
          element={
            <Privateroutes>
              <Profile />
            </Privateroutes>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
