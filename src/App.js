import React from "react";
import "./App.css";
import WebcamCapture from "./WebcamCapture";
import Preview from "./Preview";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
} from "react-router-dom";
import Chats from "./Chats";

function App() {
  return (
    <div className="app">
      <Router>
        <div className="app__body">
          <Routes>
            <Route path="/chats" element={<Chats />} />
            <Route path="/preview" element={<Preview />} />
            <Route path="/test" element={<h1>YO WHATS UP</h1>} />
            <Route path="/" element={<WebcamCapture />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
