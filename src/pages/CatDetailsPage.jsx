import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function CatDetailsPage() {
    //destructure id
    const { id } = useParams();

    const navigate = useNavigate();
    // store data
    const [cat, setCat] = useState();

    const fetchCat = async () => {
        try {
            const response = await fetch(`http://localhost:5005/cats/cats/${id}`);
            if (response.status === 200) {
                const parsedCat = await response.json();
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

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:5005/cats/cats/${id}`, {
                method: "DELETE",
            });
            if (response.status === 202) {
                navigate("/cats");
            }
        } catch (error) {
            console.error(error);
        }
    };

    // will be undefined, so we use Conditional (ternary)
    return cat ? (
        <div>
            {" "}
            <h1>Cat Details </h1>
            <h3> {cat.name}</h3>
            <button> Adopt me </button>
            <button onClick={() => navigate(`/cats/${id}/update`)}>
                Update
            </button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    ) : (
        <h1> Loading </h1>
    );
}

export default CatDetailsPage;
