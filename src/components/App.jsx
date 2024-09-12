import React from "react";
import Home from "./Home";
import Edit from "./Edit";
import Unit from "./Unit";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/unit" element={<Unit />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
