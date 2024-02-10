import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UserDetails from "./pages/UserDetails";

function App() {
  const [user, setUserState] = useState({});
  return (
    <Router>
      <Routes>
        {/* <Route exact path='/' element={<Login loginUser={setUserState} />} /> */}
        <Route path="/" element={<Login />}></Route>
        <Route path="/userdetails" element={<UserDetails />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
