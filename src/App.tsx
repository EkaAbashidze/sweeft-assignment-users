import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import UserPage from "./components/UserPage";

function App() {
  return (
    <Router>
      <div >

        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/userpage" element={<UserPage/>} />
        </Routes>


      </div>
    </Router>
  );
}

export default App;
