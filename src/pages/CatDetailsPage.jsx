import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../config/config.index";
import "./CatDetailsPage.css";

function CatDetailsPage() {
    //destructure id
    const { id } = useParams();

    const navigate = useNavigate();
    // store data
    const [cat, setCat] = useState();

    const fetchCat = async () => {
        try {
            const response = await fetch(`${API_URL}/cats/${id}`);
            if (response.status === 200) {
                const parsedCat = await response.json();
                console.log(parsedCat);
                console.log(parsedCat.Owner?._id);
                setCat(parsedCat);
            }
        } catch (error) {
            console.error(error);
        }
    };
    //fetch data
    useEffect(() => {
        fetchCat();
    }, [id]);

    /*const handleDelete = async () => {
        try {
            const response = await fetch(`${API_URL}/cats/cats/${id}`, {
                method: "DELETE",
            });
            if (response.status === 202) {
                navigate("/cats");
            }
        } catch (error) {
            console.error(error);
        }
    }; */

    // will be undefined, so we use Conditional (ternary)
    return cat ? (
        <div className="cat-details-container">
            <div className="cat-details-content">
                <div className="cat-details-img">
                    <img src={cat.image} alt={cat.name} />
                </div>
                <div className="cat-details">
                    <h3>
                        Name <br></br> <p>{cat.name}</p>
                    </h3>
                    <h3>
                        Description <br></br> <p> {cat.description}</p>
                    </h3>
                    <h3>
                        Owner <br></br>{" "}
                        <p>{cat.Owner ? cat.Owner.name : "Unknown"}</p>
                    </h3>
                    <button
                        onClick={() => navigate(`/comment/${cat.Owner?._id}`)}
                        className="cat-details-btn"
                    >
                        Reach the owner
                    </button>
                </div>
            </div>
        </div>
    ) : (
        <div className="cat-details-loading">
            <h1>Wait... we have a furball...</h1>
        </div>
    );
}

export default CatDetailsPage;
