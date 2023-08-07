import {Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from "./pages/Homepage";
import Navbar from './components/Navbar';
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import AllHomesPage from './pages/AllHomesPage'
import HomeDetailsPage from './pages/HomeDetailsPage'
import NewHomePage from './pages/NewHomePage'
import UpdateHomePage from './pages/UpdateHomePage'
import IsPrivate from "./components/IsPrivate";
import Profile from './pages/Profile';


function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path='/profile' element={
        <IsPrivate>
        <Profile />
        </IsPrivate>
        } />
        <Route path='/homes' element={<AllHomesPage />} />
        <Route path='/homes/new' element={
          <IsPrivate>
            <NewHomePage />
          </IsPrivate>
        } />
        <Route path='/homes/:id' element={
         <IsPrivate>
            <HomeDetailsPage />
        </IsPrivate>
        } />
        <Route path='/homes/:id/edit' element={
        <IsPrivate>
            <UpdateHomePage />
        </IsPrivate>
        } />
        <Route path="*" element={<h1>404 page</h1>} />
      </Routes>
    </div>
  );
}

export default App;
