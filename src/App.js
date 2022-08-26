import React from "react";
import "./App.css";
import WebcamCapture from "./WebcamCapture";

function App() {
  return (
    <div className="app">
      <Router>
        <div className="app__body">
  <Switch>
    <Route exact path="/test">
      <h1>YO WHATS UP</h1>
    </Route>
    <Route exact path="/">
      <WebcamCapture/>
    </Route>
  </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
