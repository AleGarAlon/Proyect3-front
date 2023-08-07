import "./App.css";
import { Route, Routes } from "react-router-dom";
import AllCatsPage from "./pages/AllCatsPage";
import CatDetailsPage from "./pages/CatDetailsPage";
import NewCat from "./pages/NewCat";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<h1> Homepage </h1>} />
                <Route path="/cats" element={<AllCatsPage />} />
                <Route path="/cats/:id" element={<CatDetailsPage />} />
                <Route path="/cats/new" element={<NewCat />} />

                <Route path="*" element={<h1> 404 page </h1>} />
            </Routes>
        </>
    );
}

export default App;
