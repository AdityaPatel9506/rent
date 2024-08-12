import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "../src/components/pages/login";
import SignupPage from "../src/components/pages/signup";
import HomePage from "../src/components/pages/home";
import ProfilePage from "../src/components/pages/profile";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Default route */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          {/* Add other routes here */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
