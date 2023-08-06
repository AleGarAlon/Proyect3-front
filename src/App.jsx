import "./App.css";
import { Route, Routes } from "react-router-dom";
import AllCatsPage from "./pages/AllCatsPage";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<h1> Homepage </h1>} />
                <Route path="/cats" element={<AllCatsPage />} />

                <Route path="*" element={<h1> 404 page </h1>} />
            </Routes>
        </>
    );
}

export default App;
