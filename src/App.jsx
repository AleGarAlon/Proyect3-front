import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import AllHomesPage from './pages/AllHomesPage'
import HomeDetailsPage from './pages/HomeDetailsPage'
import NewHomePage from './pages/NewHomePage'
import UpdateHomePage from './pages/UpdateHomePage'

function App() {

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/homes'>Shelters</Link>
          </li>
          <li>
            <Link to='/homes/new'>New Shelter</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/homes' element={<AllHomesPage />} />
        <Route path='/homes/new' element={<NewHomePage />} />
        <Route path='/homes/:id' element={<HomeDetailsPage />} />
        <Route path='/homes/:id/edit' element={<UpdateHomePage />} />
      </Routes>
    </>
  )
}

export default App;
