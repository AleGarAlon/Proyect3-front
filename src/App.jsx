import { Route, Routes } from "react-router-dom";
import "./App.css";
//import HomePage from "./pages/HomePage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import IsPrivate from "./components/IsPrivate";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={
          <IsPrivate>
            <Profile />
          </IsPrivate>
          } />
        <Route path="*" element={<h1>404 page</h1>} />
      </Routes>
    </>
  );
}

export default App;