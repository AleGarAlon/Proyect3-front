import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewCat() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("http://localhost:5005/cats/cats", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, description, image }), // Remove age and gender
            });
            console.log(response);
            if (response.status === 201) {
                const parsed = await response.json();
                console.log(parsed);
                // Logic to navigate to the just created cat
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
            <h1> Post a cat to be Adopted </h1>
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
                    type="number"
                    value={age}
                    placeholder="age"
                    onChange={(e) => {
                        setAge(e.target.value);
                    }}
                />
                <input
                    type="text"
                    value={gender}
                    placeholder="gender"
                    onChange={(e) => {
                        setGender(e.target.value);
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

export default NewCat;
