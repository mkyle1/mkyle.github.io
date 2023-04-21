import React, {useState} from "react";
import TopAppBar from "./components/TopAppBar";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import GroupChat from "./components/GroupChat";

export default function App() {
  const [changedPath, setPath] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <TopAppBar path={window.location.pathname}/>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage setPath={setPath}/>} />
          <Route path="/chat" element={<GroupChat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
