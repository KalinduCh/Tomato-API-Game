import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import StartGame from "./pages/StartGame";
import Profile from "./pages/Profile";
import Leaderboard from "./pages/Leaderboard";
import Easy from "./pages/Easy";
import TimeWrap from "./pages/TimeWrap";
import Winner from "./pages/Winner";
import TryAgain from "./pages/TryAgain";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/signup":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
      case "/start-game":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
      case "/leaderboard":
        title = "";
        metaDescription = "";
        break;
      case "/easy":
        title = "";
        metaDescription = "";
        break;
      case "/time-wrap":
        title = "";
        metaDescription = "";
        break;
      case "/winner":
        title = "";
        metaDescription = "";
        break;
      case "/try-again":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/start-game" element={<StartGame />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/easy" element={<Easy />} />
      <Route path="/time-wrap" element={<TimeWrap />} />
      <Route path="/winner" element={<Winner />} />
      <Route path="/try-again" element={<TryAgain />} />
    </Routes>
  );
}
export default App;
