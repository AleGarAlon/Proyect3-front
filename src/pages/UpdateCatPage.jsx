import React, { useEffect, useState } from "react";
import { API_URL } from "../config/config.index";
import { useParams, useNavigate } from "react-router-dom";


function UpdateCatPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    const fetchCat = async () => {
        const response = await fetch(`${API_URL}/cats/cats/${id}`);
        if (response.status === 200) {
            const cat = await response.json();
            setName(cat.name);
            setDescription(cat.description);
            setImage(cat.image);
        }
    };

    useEffect(() => {
        fetchCat();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`${API_URL}/cats/cats/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, description, image }),
            });
            console.log(response);
            if (response.status === 202) {
                const parsed = await response.json();
                console.log(parsed);
                // Logic to navigate to the updated cat
                navigate(`/cats/${parsed._id}`);
                // Logic to empty your state to have a clean form
                setName("");
                setDescription("");
                setImage("");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1> Update your Cat's Details</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    placeholder="name"
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                <input
                    type="text"
                    value={description}
                    placeholder="description"
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                />
                <input
                    type="text"
                    value={image}
                    placeholder="image"
                    onChange={(e) => {
                        setImage(e.target.value);
                    }}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default UpdateCatPage;
