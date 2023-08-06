import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CatDetailsPage() {
    //destructure id
    const { id } = useParams();
    // store data
    const [cat, setCat] = useState();

    const fetchCat = async () => {
        try {
            const response = await fetch(
                `http://localhost:5005/api/cats/${id}`
            );
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
    }, []);

    // will be undefined, so we use Conditional (ternary)
    return cat ? (
        <div>
            {" "}
            <h1>Cat Details </h1>
            <h3> {cat.name}</h3>
            <button> Adopt </button>
        </div>
    ) : (
        <h1> Loading </h1>
    );
}

export default CatDetailsPage;
