import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import AllHomesPage from "./pages/AllHomesPage";
import HomeDetailsPage from "./pages/HomeDetailsPage";
import NewHomePage from "./pages/NewHomePage";
import UpdateHomePage from "./pages/UpdateHomePage";
import IsPrivate from "./components/IsPrivate";
import UpdateProfile from "./pages/UpdateProfile";
import AllCatsPage from "./pages/AllCatsPage";
import CatDetailsPage from "./pages/CatDetailsPage";
import NewCat from "./pages/NewCat";
import Articles from "./pages/Articles";
import UpdateCatPage from "./pages/UpdateCatPage";
import NewArticle from "./pages/NewArticle";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/articles" element={<Articles />} />
                <Route
                    path="/articles/new"
                    element={
                        <IsPrivate>
                            <NewArticle />
                        </IsPrivate>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <IsPrivate>
                            <Profile />
                        </IsPrivate>
                    }
                />

                <Route
                    path="/profile/:id/update"
                    element={
                        <IsPrivate>
                            <UpdateProfile />
                        </IsPrivate>
                    }
                />

                <Route path="/homes" element={<AllHomesPage />} />
                <Route
                    path="/homes/new"
                    element={
                        <IsPrivate>
                            <NewHomePage />
                        </IsPrivate>
                    }
                />
                <Route
                    path="/homes/:id"
                    element={
                        <IsPrivate>
                            <HomeDetailsPage />
                        </IsPrivate>
                    }
                />
                <Route
                    path="/homes/:id/edit"
                    element={
                        <IsPrivate>
                            <UpdateHomePage />
                        </IsPrivate>
                    }
                />
                <Route path="/cats" element={<AllCatsPage />} />
                <Route path="/cats/:id" element={<CatDetailsPage />} />
                <Route path="/cats/new" element={<NewCat />} />
                <Route path="/cats/:id/update" element={<UpdateCatPage />} />
                <Route path="*" element={<h1>404 page</h1>} />
            </Routes>
        </div>
    );
}
export default App;
