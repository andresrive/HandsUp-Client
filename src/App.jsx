import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import PackPage from "./pages/PackPage/PackPage";
import PackCreate from "./pages/PackPage/PackCreate";

import Navbar from "./components/Navbar/Navbar";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile"  element={<IsPrivate> <ProfilePage /> </IsPrivate>}/>
        <Route path="/signup" element={<IsAnon>  <SignupPage /> </IsAnon>}/>
        <Route path="/login" element={<IsAnon>  <LoginPage /> </IsAnon>}/>
        <Route path="/packs" element={<IsAnon>  <PackPage /> </IsAnon>}/>
        <Route path="/packs/:id" element = {<IsAnon>  <PackCreate /> </IsAnon>} />
      </Routes>
    </div>
  );
}

export default App;
