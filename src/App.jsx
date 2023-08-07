import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
//import HomePage from "./pages/HomePage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AllHomesPage from './pages/AllHomesPage'
import HomeDetailsPage from './pages/HomeDetailsPage'
import NewHomePage from './pages/NewHomePage'
import UpdateHomePage from './pages/UpdateHomePage'
import IsPrivate from "./components/IsPrivate";

function App() {

  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path='/homes' element={
        <IsPrivate>
        <Profile />
        </IsPrivate>
        } />
        <Route path='/homes' element={<AllHomesPage />} />
        <Route path='/homes/new' element={<NewHomePage />} />
        <Route path='/homes/:id' element={<HomeDetailsPage />} />
        <Route path='/homes/:id/edit' element={<UpdateHomePage />} />
        <Route path="*" element={<h1>404 page</h1>} />
      </Routes>
    </>
  );
}

export default App;
