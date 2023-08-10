import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../config/config.index";
import "./AllCatsPage.css";
import StylingImage from "../assets/styling-background.png";

const AllCatsPage = () => {
    //store data
    const [cats, setCats] = useState([]);

    const fetchCats = async () => {
        try {
            const response = await fetch(`${API_URL}/cats`);
            if (response.status === 200) {
                const parsedCats = await response.json();
                setCats(parsedCats);
            }
        } catch (error) {
            console.error(error);
        }
    };

    //make sure we access data and running once at mounting time
    useEffect(() => {
        fetchCats();
    }, []);

    return (
        <div className="allCats">
            {" "}
            <h1> Adopt a Cat </h1>
            <div className="cat-container">
                {cats.map((cat) => (
                    <div key={cat._id} className="cat-card">
                        <Link to={`/cats/${cat._id}`}>
                        <img
                            src={cat.image}
                            alt={cat.name}
                            style={{ height: "200px" }}
                        />
                            {" "}
                            <h3> {cat.name}</h3>
                        <p>{cat.description}</p>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="styling-image-container">
                <img src={StylingImage} alt="" />
            </div>
        </div>
    );
};

export default AllCatsPage;
