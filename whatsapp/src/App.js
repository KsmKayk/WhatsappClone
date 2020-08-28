import React from "react";
import "./app.css";

import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="app__body">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
