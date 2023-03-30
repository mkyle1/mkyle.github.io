import TopAppBar from "./components/TopAppBar";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import GroupChat from "./components/GroupChat";

export default function App() {
  return (
    <div className="App">
    <TopAppBar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/chat" element={<GroupChat />} />
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}
