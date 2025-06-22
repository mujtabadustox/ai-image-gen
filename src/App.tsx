import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import CommunityFeedPage from "./pages/CommunityFeedPage";
import GeneratePage from "./pages/GeneratePage";
import DocsPage from "./pages/DocsPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="community-feed" element={<CommunityFeedPage />} />
          <Route path="docs" element={<DocsPage />} />
        </Route>
        {/* Generate page without Layout (no footer) */}
        <Route path="generate" element={<GeneratePage />} />
      </Routes>
    </Router>
  );
};

export default App;
