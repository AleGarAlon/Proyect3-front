import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../config/config.index";
import StylingImage from "../assets/styling-background.png";
import "./AllHomesPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const AllHomesPage = () => {
    const [homes, setHomes] = useState([]);

    const fetchHomes = async () => {
        try {
            const response = await fetch(`${API_URL}/api/homes/`);
            if (response.status === 200) {
                const parsedHomes = await response.json();
                setHomes(parsedHomes);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchHomes();
    }, []);

    return (
        <div className="all-homes">
            <h1> Shelters for out little creautures</h1>
            <div className="home-container">
                {homes.map((home) => (
                    <div key={home._id} className="home-card">
                        <Link to={`/homes/${home._id}`}>
                            <img
                                src={home.photo}
                                alt="Home Photo"
                                style={{ height: "150px" }}
                            />
                            <h3> {home.name}</h3>
                            <p>
                                {" "}
                                <FontAwesomeIcon
                                    icon={faLocationDot}
                                    size="lg"
                                    style={{ color: "#fe9e0d" }}
                                />{" "}
                                {home.location}
                            </p>
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

export default AllHomesPage;
